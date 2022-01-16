export * as enums from '@src/accounts/enums';
export * as interfaces from '@src/accounts/interfaces';
export declare const functions: {
    GetAccountBalances: ({ accountIdKey, accountType, realTimeNAV }: import("@src/accounts/GetAccountBalances").IGetAccountBalancesRequest) => Promise<import("@src/accounts/GetAccountBalances").IGetAccountBalancesResponse>;
    ListAccounts: () => Promise<import("@src/accounts/ListAccounts").IListAccountsResponse>;
    ListTransactionDetails: ({ accountIdKey, storeId, transactionId }: import("@src/accounts/ListTransactionDetails").IListTransactionDetailsRequest) => Promise<import("@src/accounts/ListTransactionDetails").IListTransactionDetailsResponse>;
    ListTransactions: ({ accountIdKey, ...query }: import("@src/accounts/ListTransactions").IListTransactionsRequest) => Promise<import("@src/accounts/ListTransactions").IListTransactionsResponse>;
    ViewPortfolio: ({ accountIdKey, count, lotsRequired, marketSession, sortBy, sortOrder, totalsRequired, view }: import("@src/accounts/ViewPortfolio").IViewPortfolioRequest) => Promise<import("@src/accounts/ViewPortfolio").IViewPortfolioResponse>;
};
