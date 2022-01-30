/// <reference types="node" />
import Emitter from 'events';
import type { IEtradeConfig, ITokenData } from './interfaces';
export * from './enums';
export * from './interfaces';
export { IFetchOptions } from './session';
export * from './accounts/enums';
export * from './accounts/interfaces';
export * from './alerts/enums';
export * from './alerts/interfaces';
export * from './auth/interfaces';
export * from './market/enums';
export * from './market/interfaces';
export * from './order/enums';
export * from './order/interfaces';
/**
 * @class ETrade
 * @augments Emitter
 */
export default class ETrade extends Emitter {
    accounts: {
        GetAccountBalances: ({ accountIdKey, accountType, realTimeNAV }: import("./accounts/GetAccountBalances").IGetAccountBalancesRequest) => Promise<import("./accounts/GetAccountBalances").IGetAccountBalancesResponse>;
        ListAccounts: () => Promise<import("./accounts/ListAccounts").IListAccountsResponse>;
        ListTransactionDetails: ({ accountIdKey, storeId, transactionId }: import("./accounts/ListTransactionDetails").IListTransactionDetailsRequest) => Promise<import("./accounts/ListTransactionDetails").IListTransactionDetailsResponse>;
        ListTransactions: ({ accountIdKey, ...query }: import("./accounts/ListTransactions").IListTransactionsRequest) => Promise<import("./accounts/ListTransactions").IListTransactionsResponse>;
        ViewPortfolio: ({ accountIdKey, count, lotsRequired, marketSession, sortBy, sortOrder, totalsRequired, view }: import("./accounts/ViewPortfolio").IViewPortfolioRequest) => Promise<import("./accounts/ViewPortfolio").IViewPortfolioResponse>;
    };
    alerts: {
        DeleteAlert: ({ alertIds }: import("./alerts/DeleteAlert").IDeleteAlertRequest) => Promise<import("./alerts/DeleteAlert").IDeleteAlertResponse>;
        ListAlertDetails: ({ id, ...query }: import("./alerts/ListAlertDetails").IListAlertDetailsRequest) => Promise<import("./alerts/ListAlertDetails").IListAlertDetailsResponse>;
        ListAlerts: (query: import("./alerts/ListAlerts").IListAlertsRequest) => Promise<import("./alerts/ListAlerts").IListAlertsResponse>;
    };
    auth: {
        completeOAuth: (verifier: string) => Promise<void>;
        startOAuth: () => Promise<string>;
        RenewAccessToken: () => Promise<import("./auth/RenewAccessToken").IRenewAccessTokenResponse>;
        RevokeAccessToken: () => Promise<import("./auth/RevokeAccessToken").IRevokeAccessTokenResponse>;
    };
    market: {
        GetOptionChains: (query: import("./market/GetOptionChains").IGetOptionChainsRequest) => Promise<import("./market/GetOptionChains").IGetOptionChainsResponse>;
        GetOptionExpireDates: (query: import("./market/GetOptionExpireDates").IGetOptionExpireDatesRequest) => Promise<import("./market/GetOptionExpireDates").IGetOptionExpireDatesResponse>;
        GetQuotes: ({ symbols, ...query }: import("./market/GetQuotes").IGetQuotesRequest) => Promise<import("./market/GetQuotes").IGetQuotesResponse>;
        LookUpProduct: ({ search }: import("./market/LookUpProduct").ILookUpProductRequest) => Promise<import("./market/LookUpProduct").ILookUpProductResponse>;
    };
    order: {
        BuildOrder: ({ accountId, allOrNone, orderAction, orderTerm, override, priceType, quantity, securityType, symbol }: import("./order/interfaces").IOrderParams) => import("./order/interfaces").IOrderDetailReq;
        CancelOrder: ({ accountIdKey, orderId }: import("./order/CancelOrder").ICancelOrderRequest) => Promise<import("./order/CancelOrder").ICancelOrderResponse>;
        ChangePreviewedOrder: ({ accountIdKey, orderId, ...PreviewOrderRequest }: import("./order/ChangePreviewedOrder").IChangePreviewedOrderRequest) => Promise<import("./order/ChangePreviewedOrder").IChangePreviewedOrderResponse>;
        ListOrders: ({ accountIdKey, ...query }: import("./order/ListOrders").IListOrdersRequest) => Promise<import("./order/ListOrders").IListOrdersResponse>;
        PlaceChangedOrder: ({ accountIdKey, orderId, ...PlaceOrderRequest }: import("./order/PlaceChangedOrder").IPlaceChangedOrderRequest) => Promise<import("./order/PlaceChangedOrder").IPlaceChangedOrderResponse>;
        PlaceOrder: ({ accountIdKey, ...PlaceOrderRequest }: import("./order/PlaceOrder").IPlaceOrderRequest) => Promise<import("./order/PlaceOrder").IPlaceOrderResponse>;
        PreviewOrder: ({ accountIdKey, ...PreviewOrderRequest }: import("./order/PreviewOrder").IPreviewOrderRequest) => Promise<import("./order/PreviewOrder").IPreviewOrderResponse>;
    };
    /**
     * E-Trade API constructor.
     * @param config - The configuration object.
     */
    constructor(config: IEtradeConfig);
    /**
     * Get the active token, secret, and environment from the session.
     * @returns {ITokenData} - The token data.
     */
    getToken: () => ITokenData;
    /**
     * Set the access token and secret.
     * @param accessToken - The access token.
     * @param accessTokenSecret - The access token secret.
     */
    setToken(accessToken: string, accessTokenSecret: string): void;
}
