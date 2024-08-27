import {writeFile} from 'node:fs/promises';
import {spawn} from './process.js';
import {getRelease} from './github.js';
import {resolve} from 'node:path';
/**
 * Pack the package and publish it
 *
 *
 * @param packagePath
 * @param url
 * @param name
 * @return {Promise<*>}
 */
export async function build(packagePath, url, name) {
    await spawn('npm', ['run', 'clean'], {cwd: packagePath});
    await spawn('npx', ['openapi-ts', '--exportCore', 'false', '-i', url, '-o', 'src', '-c', 'fetch', '--name', name], {cwd: packagePath});
    await spawn('npm', ['run', 'build'], {cwd: packagePath});
}

/**
 * Pack the package and publish it
 *
 *
 * @param packagePath
 * @return {Promise<*>}
 */
export async function publish(packagePath) {
    await spawn('npm', ['publish'], {cwd: packagePath});
}


const CONFIGS = {
    AlgodClient: {
        BASE: 'https://testnet-api.algonode.cloud',
        DOCS: 'https://awesome-algorand.github.io/algo-fetch/guides/clients/algod/'
    },
    IndexerClient: {
        BASE: 'https://testnet-idx.algonode.cloud/',
        DOCS: 'https://awesome-algorand.github.io/algo-fetch/guides/clients/indexer/'
    },
    KmdClient: {
        BASE: 'https://localhost:4001',
        DOCS: 'https://awesome-algorand.github.io/algo-fetch/guides/clients/kmd/'
    }
}

export async function release({
    name, // AlgodClient
    packagePath, // ./packages/algod
    version, // [3,0,0]
    tag, // v3.0.0-stable
    repo, // algorand/go-algorand
    schema, // daemon/algod/api/algod.oas3.yml
}, pkg, token, skipNpm) {
    console.log(`Current ${name} Version: ${pkg.version}`);
    const schemaUrl = `https://raw.githubusercontent.com/${repo}/${tag}/${schema}`;
    if (version.join('.') !== pkg.version) {
        console.log(`Deploying Next ${name} Version: ${version.join('.')}`);
        const readMeHeader = `
# ${pkg.name}
> ${pkg.description}

Generated ${name} for Algorand based on the [OpenAPI Specification](${schemaUrl}). 
See the [upstream repository](https://github.com/${repo}) for more information.

## Installation

\`\`\`bash
npm install ${pkg.name} --save
\`\`\`

### Usage

\`\`\`typescript
import {${name}} from '${pkg.name}';

const client = new ${name}({
    BASE: '${CONFIGS[name].BASE}',
})
\`\`\`

#### See the full [API Documentation](${CONFIGS[name].DOCS}) for more information

# Change Log
`
        try {
            const [major, minor, patch] = version;
            const ghRelease = await getRelease(repo, tag, token);
            if(!ghRelease){
                console.error(`Failed to get release for ${name} v${major}.${minor}.${patch}-stable`);
                return;
            }
            await writeFile(resolve(packagePath, "README.md"), readMeHeader + ghRelease.body);
            pkg.version = `${major}.${minor}.${patch}`;
            await writeFile(resolve(packagePath, "package.json"), JSON.stringify(pkg, null, 2));
            await build(packagePath, schemaUrl, name);
            if(skipNpm !== true) await publish(packagePath) ;
            console.log(`Deployed ${name} ${major}.${minor}.${patch}`);
        } catch (e) {
            console.error(e);
        }
    } else {
        console.log(`No new ${name} versions to deploy, building current`);
        await build(packagePath, schemaUrl, name);
    }

}
