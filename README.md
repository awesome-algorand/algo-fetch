# algo-fetch
> Unofficial fetch wrapper for Algorand RPC

Please visit one of the official packages for integrating with Algorand:

- [algokit](https://developer.algorand.org/docs/get-started/algokit/)
- [algosdk](https://algorand.github.io/js-algorand-sdk/)
- [algo-models](https://github.com/algorandfoundation/algo-models) *wip*

# TLDR

This is a fetch wrapper for the Algorand RPC API. 
It is generated from the openapi schema provided by Algorand. 
It is intended to be used in the browser and in nodejs.

# Motivation

This demonstrates a way of working with RPC specifications with a clear separation of concerns.
Projects like algokit, algosdk and algo-models could benefit from this approach by sharing the same generated types and fetch clients.

This approach is already used in algosdk but only for the models, we purpose also exporting the interface from the operations
definition.

# TODO:

- [ ] Add tests
- [ ] Regenerate library without Class closures
- [ ] Allow decoding of `format=msgpack`
- [ ] Handle BigInt conversions

# Get Started

Login to [Github's Package Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

```bash
npm login --scope=@awesome-algorand --auth-type=legacy --registry=https://npm.pkg.github.com
```

Install one of the packages

```bash
npm install @awesome-algorand/algod-fetch
npm install @awesome-algorand/indexer-fetch
npm install @awesome-algorand/kmd-fetch
```

See the [Reference Documentation](https://awesome-algorand.github.io/algo-fetch/) for more information

# Contributing

Clone the project

```bash
git clone git@github.com:awesome-algorand/algo-fetch.git
```

Install the dependencies

```bash
npm install
```

Run the release without publishing

```bash
./bin/publisher.js --skipNpm
```

## Commands

All projects share the same commands with the same intents

### dev

Runs vitest ui in development mode

```bash
npm run dev
```

### build

Builds project

```bash
npm run build
```

### test

Runs the tests

```bash
npm run test
```

### coverage

Creates a coverage report

```bash
npm run coverage
```

### lint

Runs the linter

```bash
npm run lint
```