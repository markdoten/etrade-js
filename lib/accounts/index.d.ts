declare const _default: {
    GetAccountBalances: ({ accountIdKey, accountType, realTimeNAV }: import("./GetAccountBalances").IGetAccountBalancesRequest) => Promise<import("./GetAccountBalances").IGetAccountBalancesResponse>;
    ListAccounts: () => Promise<import("./ListAccounts").IListAccountsResponse>;
    ListTransactionDetails: ({ accountIdKey, storeId, transactionId }: import("./ListTransactionDetails").IListTransactionDetailsRequest) => Promise<import("./ListTransactionDetails").IListTransactionDetailsResponse>;
    ListTransactions: ({ accountIdKey, ...query }: import("./ListTransactions").IListTransactionsRequest) => Promise<import("./ListTransactions").IListTransactionsResponse>;
    ViewPortfolio: ({ accountIdKey, count, lotsRequired, marketSession, sortBy, sortOrder, totalsRequired, view }: import("./ViewPortfolio").IViewPortfolioRequest) => Promise<import("./ViewPortfolio").IViewPortfolioResponse>;
};
export default _default;
