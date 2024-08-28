import {
    LookupAccountAppLocalStatesResponse,
    Application as IndexerApplication,
    Block,
    Asset as IndexerAsset,
    LookupAccountAssetsResponse,
    LookupAccountByIdResponse,
    SearchForApplicationBoxesResponse,
    LookupApplicationBoxByIdAndNameResponse, LookupApplicationLogsByIdResponse
} from '@awesome-algorand/indexer-fetch';
import {
    AccountApplicationInformationResponse,
    Application,
    GetBlockResponse,
    Asset,
    AccountAssetsInformationResponse,
    AccountInformationResponse, GetApplicationBoxesResponse, GetApplicationBoxByNameResponse, GetBlockLogsResponse,
} from '@awesome-algorand/algod-fetch';


export interface Namespace {
    /**
     * /v2/blocks/{round}
     * algod.getBlock(round)
     *
     * /v2/blocks/{round-number}
     * indexer.lookupBlock(round)
     * @param round
     */
    getBlock({round}: {round: number | bigint}): Block | GetBlockResponse;

    /**
     * /v2/blocks/{round}/logs
     * algod.getBlockLogs
     * @param round
     */
    getBlockLogs({round}: {round: number | bigint}): LookupApplicationLogsByIdResponse | GetBlockLogsResponse;
    /**
     * /v2/accounts/{address}/assets
     * algod.getAccountAssets(address)
     *
     * /v2/accounts/{account-id}/assets
     * indexer.lookupAccountAssets(address)
     * @param address
     */
    getAccountAssets({address}: {address: string}): LookupAccountAssetsResponse | AccountAssetsInformationResponse;
    /**
     * /v2/accounts/{address}
     * algod.accountInformation(address)
     *
     * /v2/accounts/{account-id}
     * indexer.lookupAccountById(address)
     * @param address
     */
    getAccount({address}: {address: string}): AccountInformationResponse | LookupAccountByIdResponse;
    /**
     * /v2/accounts/{address}/applications/{application-id}
     * algod.accountApplicationInformation(applicationId)
     *
     * /v2/accounts/{account-id}/apps-local-state?application-id={application-id}
     * indexer.lookupAccountAppLocalStates(applicationId)
     * @param address
     * @param applicationId
     */
    getAccountApplicationState({address, applicationId}: {address: string, applicationId: number | bigint}): AccountApplicationInformationResponse | LookupAccountAppLocalStatesResponse;
    /**
     * /v2/applications/{application-id}
     * algod.getApplicationById(applicationId)
     *
     * /v2/applications/{application-id}
     * indexer.lookupApplicationById(applicationId)
     * @param applicationId
     */
    getApplication({applicationId}: {applicationId: number | bigint}): Application | IndexerApplication;
    /**
     * /v2/applications/{application-id}/boxes
     * algod.getApplicationBoxes(applicationId)
     *
     * /v2/applications/{application-id}/boxes
     * indexer.searchForApplicationBoxes(applicationId)
     * @param applicationId
     */
    getApplicationBoxes({applicationId}: {applicationId: number | bigint}): SearchForApplicationBoxesResponse | GetApplicationBoxesResponse
    /**
     * /v2/applications/{application-id}/box
     * algod.getApplicationBoxByName(applicationId, name)
     *
     * /v2/applications/{application-id}/box
     * indexer.lookupApplicationBoxByIdAndName(applicationId, name)
     * @param applicationId
     * @param name
     */
    getApplicationBox({applicationId, name}: {applicationId: number | bigint, name: string}): LookupApplicationBoxByIdAndNameResponse | GetApplicationBoxByNameResponse
    /**
     * /v2/assets/{asset-id}
     * algod.getAssetById(assetId)
     *
     * /v2/assets/{asset-id}
     * indexer.lookupAssetById(assetId)
     * @param assetId
     */
    getAsset({assetId}: {assetId: number | bigint}): Asset | IndexerAsset;
}



export interface IndexerNamespace {
    // INDEXER ONLY searchForAccounts(): void
    // INDEXER ONLY searchForApplications(): void
    // INDEXER ONLY searchForAssets(): void
    // INDEXER ONLY searchForTransactions(): void

    // searchForApplicationBoxes(): void
    // lookupAccountAppLocalStates(): void
    // lookupAccountAssets(): void
    // lookupAccountById(): void
    // lookupAssetById(): void
    // lookupBlock(): void
    // lookupApplicationBoxByIdAndName(): void
    // lookupApplicationById(): void

    // INDEXER ONLY lookupAccountCreatedApplications(): void
    // INDEXER ONLY lookupAccountCreatedAssets(): void
    // INDEXER ONLY lookupAccountTransactions(): void
    // INDEXER ONLY lookupApplicationLogsById(): void
    // INDEXER ONLY lookupAssetBalances(): void
    // INDEXER ONLY lookupAssetTransactions(): void
    // INDEXER ONLY lookupTransaction(): void
}

export interface FetchNamespace {
    // ALGOD ONLY accountAssetInformation(): void
    // ALGOD ONLY getBlockLogs(): void
    // ALGOD ONLY getBlockHash(): void
    // ALGOD ONLY getBlockTimeStampOffset(): void
    // ALGOD ONLY getBlockTxids(): void
    // ALGOD ONLY getGenesis(): void
    // ALGOD ONLY getLedgerStateDelta(): void
    // ALGOD ONLY getLedgerStateDeltaForTransactionGroup(): void
    // ALGOD ONLY getLightBlockHeaderProof(): void
    // ALGOD ONLY getPendingTransactions(): void
    // ALGOD ONLY getPendingTransactionsByAddress(): void
    // ALGOD ONLY getReady(): void
    // ALGOD ONLY getStateProof(): void
    // ALGOD ONLY getStatus(): void
    // ALGOD ONLY getSupply(): void
    // ALGOD ONLY getSyncRound(): void
    // ALGOD ONLY getTransactionGroupLedgerStateDeltasForRound(): void
    // ALGOD ONLY getTransactionProof(): void
    // ALGOD ONLY getVersion(): void
    // ALGOD ONLY healthCheck(): void
    // ALGOD ONLY metrics(): void
    // ALGOD ONLY pendingTransactionInformation(): void
    // ALGOD ONLY rawTransaction(): void
    // ALGOD ONLY setBlockTimeStampOffset(): void
    // ALGOD ONLY setSyncRound(): void
    // ALGOD ONLY simulateTransaction(): void
    // ALGOD ONLY swaggerJson(): void
    // ALGOD ONLY tealCompile(): void
    // ALGOD ONLY tealDisassemble(): void
    // ALGOD ONLY tealDryrun(): void
    // ALGOD ONLY transactionParams(): void
    // ALGOD ONLY unsetSyncRound(): void
    // ALGOD ONLY waitForBlock(): void


    // accountApplicationInformation(): void
    // accountAssetsInformation(): void
    // accountInformation(): void
    // experimentalCheck(): void
    // getApplicationBoxByName(): void
    // getApplicationBoxes(): void
    // getApplicationById(): void
    // getAssetById(): void
    // getBlock(): void
}