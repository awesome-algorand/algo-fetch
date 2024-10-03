
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.26.0-stable/daemon/kmd/api/swagger.json). 
See the [upstream repository](https://github.com/algorand/go-algorand) for more information.

## Installation

```bash
npm install @awesome-algorand/kmd-fetch --save
```

### Usage

```typescript
import {KmdClient} from '@awesome-algorand/kmd-fetch';

const client = new KmdClient({
    BASE: 'https://localhost:4001',
})
```

#### See the full [API Documentation](https://awesome-algorand.github.io/algo-fetch/guides/clients/kmd/) for more information

# Change Log
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)

# Overview

This release adds **experimental** support for libp2p networking, a major advance for Algorand decentralization. We would like to emphasize that this support is in preview mode only, and not recommended for production use cases yet.

# What&apos;s New
* libp2p networking support (experimental preview)
* AVM enhancements
* Mac OS X universal binary

# Changelog
## New Features
* Network: p2p traffic exchange for algorand node ([#5939](https://github.com/algorand/go-algorand/pull/5939))
## Enhancements
* AVM: Derive looser, but more principled, checks of txn max size ([#6114](https://github.com/algorand/go-algorand/pull/6114))
* AVM: Provide access to some more block header values ([#6107](https://github.com/algorand/go-algorand/pull/6107))
* AVM: Expose relevant incentive constants ([#6025](https://github.com/algorand/go-algorand/pull/6025))
* Algons: expose error for dnsaddr command ([#6121](https://github.com/algorand/go-algorand/pull/6121))
* Build: add universal Mac make target ([#6023](https://github.com/algorand/go-algorand/pull/6023))
* Ci: update nightly builds to use universal mac update ([#6071](https://github.com/algorand/go-algorand/pull/6071))
* Cicd: remove mac AMD64 support from circleci ([#6036](https://github.com/algorand/go-algorand/pull/6036))
* Cmd: Add goal node subcommand to generate peer private key ([#6078](https://github.com/algorand/go-algorand/pull/6078))
* Config: use P2PHybridIncomingConnectionsLimit only for hybrid mode ([#6103](https://github.com/algorand/go-algorand/pull/6103))
* Config: Expose merged configuration for easier debugging ([#6049](https://github.com/algorand/go-algorand/pull/6049))
* Config: Add warning if EndpointAddress and NetAddress ports are equal ([#6006](https://github.com/algorand/go-algorand/pull/6006))
* Config: Add GoMemLimit config option and use with 10-node test ([#5975](https://github.com/algorand/go-algorand/pull/5975))
* Docs: p2p package overview ([#6096](https://github.com/algorand/go-algorand/pull/6096))
* Installer: add support for algoh to systemd installs ([#6102](https://github.com/algorand/go-algorand/pull/6102))
* Logging: change transaction pool re-evaluation message from warn to info ([#6047](https://github.com/algorand/go-algorand/pull/6047))
* Metrics: collect total netdev sent/received bytes ([#6108](https://github.com/algorand/go-algorand/pull/6108))
* Metrics: Add algod version to metrics ([#6003](https://github.com/algorand/go-algorand/pull/6003))
* Netgoal: allow unknown template tokens ([#6091](https://github.com/algorand/go-algorand/pull/6091))
* Network: remove ws net proto 2.1 ([#6081](https://github.com/algorand/go-algorand/pull/6081))
* Network: use http.ResponseController instead of GetHTTPRequestConnection ([#6044](https://github.com/algorand/go-algorand/pull/6044))
* Network: Allow short-lived connections to query /status endpoint when at full capacity ([#6009](https://github.com/algorand/go-algorand/pull/6009))
* P2p: store private keys as PKCS#8 ASN.1 DER PEM ([#6119](https://github.com/algorand/go-algorand/pull/6119))
* P2p: Add algod_network_p2p_* traffic metrics ([#6105](https://github.com/algorand/go-algorand/pull/6105))
* P2p: get rid of interface{} from PeerStore methods ([#6101](https://github.com/algorand/go-algorand/pull/6101))
* P2p: handle txns in pubsub validator ([#6070](https://github.com/algorand/go-algorand/pull/6070))
* P2p: do not advertise private and non-routable addresses ([#6092](https://github.com/algorand/go-algorand/pull/6092))
* P2p: support EnableGossipService in p2p streams ([#6073](https://github.com/algorand/go-algorand/pull/6073))
* P2p: hybrid node net identity for connection deduplication ([#6035](https://github.com/algorand/go-algorand/pull/6035))
* P2p: Introduce profiles for hybridRelay, hybridArchival, and hybridClient. ([#6062](https://github.com/algorand/go-algorand/pull/6062))
* P2p: Disable circuit relaying via libp2p.NoListenAddrs ([#6064](https://github.com/algorand/go-algorand/pull/6064))
* REST API: make RawTransactionAsync developer API ([#6069](https://github.com/algorand/go-algorand/pull/6069))
* Scripts: allow metrics filtering by labels in metrics_viz.py ([#6125](https://github.com/algorand/go-algorand/pull/6125))
* Tests: set pprof labels for goroutines that use the same code for different cases ([#4350](https://github.com/algorand/go-algorand/pull/4350))
* Tests: preserve logs on LibGoalFixture failure ([#6030](https://github.com/algorand/go-algorand/pull/6030))
## Bugfixes
* Algod: fix telemetry lookup if phonebook is used ([#6061](https://github.com/algorand/go-algorand/pull/6061))
* Catchup: skip logging err for catchup cancellation ([#6053](https://github.com/algorand/go-algorand/pull/6053))
* Catchup: do not loop forever if there is no peers ([#6037](https://github.com/algorand/go-algorand/pull/6037))
* Ci: fix mac universal rebuild for nightlies ([#6084](https://github.com/algorand/go-algorand/pull/6084))
* Ci: update to CentOS Stream 9 and start integrating universal target ([#6080](https://github.com/algorand/go-algorand/pull/6080))
* Ci: increase artifact upload timeout ([#6050](https://github.com/algorand/go-algorand/pull/6050))
* Cicd: fix broken ci-build target ([#6087](https://github.com/algorand/go-algorand/pull/6087))
* Config: ensure both ws and p2p net running the same mode in hybrid ([#6130](https://github.com/algorand/go-algorand/pull/6130))
* Ledger: restore block listeners on reloadLedger ([#6041](https://github.com/algorand/go-algorand/pull/6041))
* Legacy Docker: pin ubuntu version ([#6028](https://github.com/algorand/go-algorand/pull/6028))
* Network: fix outgoing HTTP rate limiting ([#6118](https://github.com/algorand/go-algorand/pull/6118))
* Network: fix publicKeyIdentTracker data race in hybrid mode ([#6110](https://github.com/algorand/go-algorand/pull/6110))
* Node: clear new p2p net handlers on fast catchup ([#6127](https://github.com/algorand/go-algorand/pull/6127))
* Node: close ledger and part keys on node shutdown ([#6039](https://github.com/algorand/go-algorand/pull/6039))
* P2p: reuse existing libp2p.Host for http clients ([#6129](https://github.com/algorand/go-algorand/pull/6129))
* P2p: make sure p2p http server runs on all interfaces ([#6123](https://github.com/algorand/go-algorand/pull/6123))
* P2p: do not register closing peer ([#6086](https://github.com/algorand/go-algorand/pull/6086))
* P2p: fix connection deduplication in hybrid mode ([#6082](https://github.com/algorand/go-algorand/pull/6082))
* REST API: Fix `LedgerStateDelta` JSON encoding ([#6106](https://github.com/algorand/go-algorand/pull/6106))
* REST API: Fix to Disable API authentication ([#6067](https://github.com/algorand/go-algorand/pull/6067))
* Simulate: fix signers ([#5942](https://github.com/algorand/go-algorand/pull/5942))
* Tests: fix expect tests and add EOF linter ([#6122](https://github.com/algorand/go-algorand/pull/6122))
* Tests: fix a race in TestP2PwsStreamHandlerDedup ([#6116](https://github.com/algorand/go-algorand/pull/6116))
* Tests: fix e2e subs goal-partkey-commands ([#6095](https://github.com/algorand/go-algorand/pull/6095))
* Tests: fix flushing in TestVotersReloadFromDiskAfterOneStateProofCommitted ([#6090](https://github.com/algorand/go-algorand/pull/6090))
* Tests: fix concurrent accout commits in TestLedgerVerifiesOldStateProofs ([#6060](https://github.com/algorand/go-algorand/pull/6060))
* Tests: fix TestVotersReloadFromDiskAfterOneStateProofCommitted ([#6024](https://github.com/algorand/go-algorand/pull/6024))
* Txhandler: fix TestTxHandlerAppRateLimiter ([#6075](https://github.com/algorand/go-algorand/pull/6075))
## Protocol Upgrade
This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

