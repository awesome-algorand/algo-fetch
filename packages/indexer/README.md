
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/v3.6.0/api/indexer.oas3.yml). 
See the [upstream repository](https://github.com/algorand/indexer) for more information.

## Installation

```bash
npm install @awesome-algorand/indexer-fetch --save
```

### Usage

```typescript
import {IndexerClient} from '@awesome-algorand/indexer-fetch';

const client = new IndexerClient({
    BASE: 'https://testnet-idx.algonode.cloud/',
})
```

#### See the full [API Documentation](https://awesome-algorand.github.io/algo-fetch/guides/clients/indexer/) for more information

# Change Log
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)
## What's Changed
This release contains a breaking API change to properly reflect that rewinding is no longer available (the round query parameter being rejected). The rewinding functionality was removed as it did not produce accurate results as expected and did not have a clear path to providing a better experience.

### Enhancements
* API: Disable rewinding and reject the `round` query param on account lookups and searches. (#1630)
* API: Add support for Private Network Access header preflight requests (#1620)

## Changelog
* e0fc3407aa3f09988c509af82671210bd1595923 Address import collision due to https://github.com/googleapis/go-genproto/issues/1015 (#1634)
* ecbedc4c50e46daaeeccf0ca78d0e8a88e8cc9c1 CI: Enable linting for tests (#1632)
* 56d86caf5666c07a9d89d3950a56d980f02024d9 CI: update CircleCI Ubuntu image to 24.04 (#1633)
* 249016cf51cf9c3aecf37c6fc8c09774523f02bc Disable rewinding and reject the `round` query param on account lookups and searches. (#1630)
* 316221e01269ced80b76a3b4ea72a9ce0cb28296 Fix: Ensure requests for asset/application id 0 check for the correct result (#1622)
* fb82382d82a7d2991ba74fb86e7e1b3dd842971b Regression test for UTF-8 printable characters (#1624)
* aef44309fae849ff13113d00b77649c5585e039b Tweak release template. (#1617)
* 25c7ab7619bd5c8eb3fbe8efcafc84929726afa5 api: Add support for Private Network Access header preflight requests (#1620)
* 6dce903c2d5f807962dd03c41903ede7067e4f7d build(deps): bump github.com/docker/docker (#1621)
* 674516da8e505247fd7726437301cfd51c6be0b8 build(deps): bump setuptools from 65.5.1 to 70.0.0 in /e2e_tests (#1618)

**Full Changelog**: https://github.com/algorand/indexer/compare/v3.5.0...v3.6.0

---
[Docker images for this release are available on Docker Hub.](https://hub.docker.com/r/algorand/indexer)

