export * as enums from '../../accounts/enums';
export * as interfaces from '../../accounts/interfaces';
export declare const functions: {
    GetAccountBalances: ({ accountIdKey, accountType, realTimeNAV }: import("../../accounts/GetAccountBalances").IGetAccountBalancesRequest) => Promise<import("../../accounts/GetAccountBalances").IGetAccountBalancesResponse>;
    ListAccounts: () => Promise<import("../../accounts/ListAccounts").IListAccountsResponse>;
    ListTransactionDetails: ({ accountIdKey, storeId, transactionId }: import("../../accounts/ListTransactionDetails").IListTransactionDetailsRequest) => Promise<import("../../accounts/ListTransactionDetails").IListTransactionDetailsResponse>;
    ListTransactions: ({ accountIdKey, ...query }: import("../../accounts/ListTransactions").IListTransactionsRequest) => Promise<import("../../accounts/ListTransactions").IListTransactionsResponse>;
    ViewPortfolio: ({ accountIdKey, count, lotsRequired, marketSession, sortBy, sortOrder, totalsRequired, view }: import("../../accounts/ViewPortfolio").IViewPortfolioRequest) => Promise<import("../../accounts/ViewPortfolio").IViewPortfolioResponse>;
};
