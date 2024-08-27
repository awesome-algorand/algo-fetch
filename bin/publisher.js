#!/usr/bin/env node

import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';

import {getNextVersion, isValid, sortVersions, toTuple} from './lib/versions.js';
import {getTags} from './lib/github.js';
import {release} from './lib/release.js';


const GO_ALGORAND_REPO = 'algorand/go-algorand';
const INDEXER_REPO = 'algorand/indexer';


async function getStableAlgodVersions(token) {
    let res = await getTags(GO_ALGORAND_REPO, token);
    return res
        // .filter(r => r.ref.includes('stable') && !BAD_VERSIONS.every(b => !r.ref.includes(b)))
        .filter(r => isValid(r['ref'].replace('refs/tags/', '')))
        .map(r => toTuple(r.ref))
        // Skip missing KMD versions
        .filter(r=>r[0] === 2 ? r[1] >= 10 : true)
        .sort(sortVersions);
}

async function getStableIndexerVersions(token) {
    let res = await getTags(INDEXER_REPO, token);
    const BAD_VERSIONS = [
        // Tags without releases
        '2.0.1',
        '2.3.0',
        '2.3.1',
        '2.7.1',
        '2.11.0',
        // Misc tags
        'jackstest',
        'pr',
        '-rc',
        'alpha',
        'beta',
        'pre'
    ];
    return res
        .filter(r => !BAD_VERSIONS.some(b => r.ref.includes(b)))
        .map(r => toTuple(r.ref))
        .sort(sortVersions);
}


/**
 * Release Algod Package
 * @return {Promise<void>}
 */
async function releaseAlgodKMD() {
    const ALGOD_PATH = resolve('./packages/algod');
    const ALGOD_PACKAGE = resolve(ALGOD_PATH, 'package.json');
    const algod = JSON.parse(readFileSync(ALGOD_PACKAGE).toString());

    const stableReleases = await getStableAlgodVersions(process.env.GITHUB_TOKEN);
    const nextVersion = getNextVersion(algod.version, stableReleases);

    // Algod Release
    try {
        const [major, minor, patch] = nextVersion;
        await release({
            name: 'AlgodClient',
            packagePath: ALGOD_PATH,
            version: [major, minor, patch],
            tag: `v${major}.${minor}.${patch}-stable`,
            repo: GO_ALGORAND_REPO,
            schema: `daemon/algod/api/algod.oas3.yml`,
        }, algod, process.env.GITHUB_TOKEN, typeof process.argv[2] !== 'undefined')
    } catch (e) {
        console.error(e);
    }

    // KMD Release
    const KMD_PATH = resolve('./packages/kmd');
    const KMD_PACKAGE = resolve(KMD_PATH, 'package.json');
    const kmd = JSON.parse(readFileSync(KMD_PACKAGE).toString());

    try {
        const [major, minor, patch] = nextVersion;
        await release({
            name: 'KmdClient',
            packagePath: KMD_PATH,
            version: [major, minor, patch],
            tag: `v${major}.${minor}.${patch}-stable`,
            repo: GO_ALGORAND_REPO,
            schema: `daemon/kmd/api/swagger.json`,
        }, kmd, process.env.GITHUB_TOKEN, typeof process.argv[2] !== 'undefined')
    } catch (e) {
        console.error(e);
    }

}

/**
 * Release Indexer Package
 *
 * @return {Promise<void>}
 */
async function releaseIndexer(){
    const INDEXER_PATH = resolve('./packages/indexer');
    const INDEXER_PACKAGE = resolve(INDEXER_PATH, 'package.json');
    const indexer = JSON.parse(readFileSync(INDEXER_PACKAGE).toString());

    const stableReleases = await getStableIndexerVersions(process.env.GITHUB_TOKEN);
    const nextVersion = getNextVersion(indexer.version, stableReleases);

    try {
        const [major, minor, patch] = nextVersion;
        const tag = `${major === 3 ? 'v' : ''}${major}.${minor}.${patch}`
        await release({
            name: 'IndexerClient',
            packagePath: INDEXER_PATH,
            version: [major, minor, patch],
            tag,
            repo: INDEXER_REPO,
            schema: `api/indexer.oas3.yml`,
        }, indexer, process.env.GITHUB_TOKEN, typeof process.argv[2] !== 'undefined')
    } catch (e) {
        console.error(e);
    }
}
console.log('Running Publisher');
await releaseAlgodKMD()
await releaseIndexer()
