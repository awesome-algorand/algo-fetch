
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.27.0-stable/daemon/algod/api/algod.oas3.yml). 
See the [upstream repository](https://github.com/algorand/go-algorand) for more information.

## Installation

```bash
npm install @awesome-algorand/algod-fetch --save
```

### Usage

```typescript
import {AlgodClient} from '@awesome-algorand/algod-fetch';

const client = new AlgodClient({
    BASE: 'https://testnet-api.algonode.cloud',
})
```

#### See the full [API Documentation](https://awesome-algorand.github.io/algo-fetch/guides/clients/algod/) for more information

# Change Log
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)

# Overview
This release provides performance improvements and network stability, as well as includes other enhancements and upgrades. Note that the AVM changes while present in the codebase, are in fact 'consensus-gated'; they will be available upon the next consensus upgrade.

**Important Note:** For performance reasons, we no longer report extra details for failed app transactions by default. This was useful if you were debugging a smart contract, but also had a significant processing performance impact. This behavior is still available if you use the developer API by setting `EnableDeveloperAPI: true`.

# What&apos;s New
* New block header API endpoint (to support reward-related queries)
* Improve performance and optimize networking
* Upgrade golang to 1.23

# Changelog
## Enhancements
* API: New algod endpoint `/v2/block/{round}/header` omits transactions and cert from response ([#6163](https://github.com/algorand/go-algorand/pull/6163))
* API: MaxTealSourceBytes to 512 kb ([#6068](https://github.com/algorand/go-algorand/pull/6068))
* API: Add support for Private Network Access header preflight requests ([#6089](https://github.com/algorand/go-algorand/pull/6089))
* AVM: Implement lsig size pooling ([#6057](https://github.com/algorand/go-algorand/pull/6057))
* Build: Upgrade to Golang 1.23 ([#6169](https://github.com/algorand/go-algorand/pull/6169))
* Build: Add automake to linux dependencies ([#6138](https://github.com/algorand/go-algorand/pull/6138))
* Consensus: For Devnet and Betanet, support custom network upgrade delay ([#6148](https://github.com/algorand/go-algorand/pull/6148))
* Docs: Update README.md to be more concise ([#6099](https://github.com/algorand/go-algorand/pull/6099))
* P2p: upgrade libp2p ([#6142](https://github.com/algorand/go-algorand/pull/6142))
* Performance: do not report extra details for failed app txns ([#6171](https://github.com/algorand/go-algorand/pull/6171))
* Tools: heapWatch metrics imported into Prometheus/Grafana ([#6147](https://github.com/algorand/go-algorand/pull/6147))
* Tools: add support for developing in OpenSUSE Tumbleweed ([#6153](https://github.com/algorand/go-algorand/pull/6153))
## Bugfixes
* AVM: Only update the bytec disassembleState for bytecblock opcodes ([#6154](https://github.com/algorand/go-algorand/pull/6154))
* Ci: remove homebrew autoupdate deactivation from CircleCI ([#6135](https://github.com/algorand/go-algorand/pull/6135))
* Network: handle p2p to ws messages propagation ([#6156](https://github.com/algorand/go-algorand/pull/6156))
* Network: fix misplaced p2p received TX metric ([#6144](https://github.com/algorand/go-algorand/pull/6144))
* Tests: Fix MaxConnectionsPerIP setting in agreement/gossip tests ([#6173](https://github.com/algorand/go-algorand/pull/6173))
## Protocol Upgrade
This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

