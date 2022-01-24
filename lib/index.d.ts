/// <reference types="node" />
/**
 * @file E-Trade API.
 */
import * as Accounts from './accounts';
import * as Alerts from './alerts';
import * as Auth from './auth';
import * as Market from './market';
import * as Order from './order';
import Emitter from 'events';
import type { IEtradeConfig } from './interfaces';
export * as enums from './enums';
export * as interfaces from './interfaces';
export declare const accounts: {
    enums: typeof Accounts.enums;
    interfaces: typeof Accounts.interfaces;
};
export declare const alerts: {
    enums: typeof Alerts.enums;
    interfaces: typeof Alerts.interfaces;
};
export declare const auth: {
    enums: {};
    interfaces: typeof Auth.interfaces;
};
export declare const market: {
    enums: typeof Market.enums;
    interfaces: typeof Market.interfaces;
};
export declare const order: {
    enums: typeof Order.enums;
    interfaces: typeof Order.interfaces;
};
/**
 * @class ETrade
 * @augments Emitter
 */
export default class ETrade extends Emitter {
    accounts: {
        GetAccountBalances: ({ accountIdKey, accountType, realTimeNAV }: Accounts.interfaces.IGetAccountBalancesRequest) => Promise<Accounts.interfaces.IGetAccountBalancesResponse>;
        ListAccounts: () => Promise<Accounts.interfaces.IListAccountsResponse>;
        ListTransactionDetails: ({ accountIdKey, storeId, transactionId }: Accounts.interfaces.IListTransactionDetailsRequest) => Promise<Accounts.interfaces.IListTransactionDetailsResponse>;
        ListTransactions: ({ accountIdKey, ...query }: Accounts.interfaces.IListTransactionsRequest) => Promise<Accounts.interfaces.IListTransactionsResponse>;
        ViewPortfolio: ({ accountIdKey, count, lotsRequired, marketSession, sortBy, sortOrder, totalsRequired, view }: Accounts.interfaces.IViewPortfolioRequest) => Promise<Accounts.interfaces.IViewPortfolioResponse>;
    };
    alerts: {
        DeleteAlert: ({ alertIds }: Alerts.interfaces.IDeleteAlertRequest) => Promise<Alerts.interfaces.IDeleteAlertResponse>;
        ListAlertDetails: ({ id, ...query }: Alerts.interfaces.IListAlertDetailsRequest) => Promise<Alerts.interfaces.IListAlertDetailsResponse>;
        ListAlerts: (query: Alerts.interfaces.IListAlertsRequest) => Promise<Alerts.interfaces.IListAlertsResponse>;
    };
    auth: {
        completeOAuth: (verifier: string) => Promise<void>;
        startOAuth: () => Promise<string>;
        RenewAccessToken: () => Promise<Auth.interfaces.IRenewAccessTokenResponse>;
        RevokeAccessToken: () => Promise<Auth.interfaces.IRevokeAccessTokenResponse>;
    };
    market: {
        GetOptionChains: (query: Market.interfaces.IGetOptionChainsRequest) => Promise<Market.interfaces.IGetOptionChainsResponse>;
        GetOptionExpireDates: (query: Market.interfaces.IGetOptionExpireDatesRequest) => Promise<Market.interfaces.IGetOptionExpireDatesResponse>;
        GetQuotes: ({ symbols, ...query }: Market.interfaces.IGetQuotesRequest) => Promise<Market.interfaces.IGetQuotesResponse>;
        LookUpProduct: ({ search }: Market.interfaces.ILookUpProductRequest) => Promise<Market.interfaces.ILookUpProductResponse>;
    };
    order: {
        BuildOrder: ({ accountId, allOrNone, orderAction, orderTerm, override, priceType, quantity, securityType, symbol }: Order.interfaces.IOrderParams) => Order.interfaces.IOrderDetail;
        CancelOrder: ({ accountIdKey, orderId }: Order.interfaces.ICancelOrderRequest) => Promise<Order.interfaces.ICancelOrderResponse>;
        ChangePreviewedOrder: ({ accountIdKey, orderId, ...PreviewOrderRequest }: Order.interfaces.IChangePreviewedOrderRequest) => Promise<Order.interfaces.IChangePreviewedOrderResponse>;
        ListOrders: ({ accountIdKey, ...query }: Order.interfaces.IListOrdersRequest) => Promise<Order.interfaces.IListOrdersResponse>;
        PlaceChangedOrder: ({ accountIdKey, orderId, ...PlaceOrderRequest }: Order.interfaces.IPlaceChangedOrderRequest) => Promise<Order.interfaces.IPlaceChangedOrderResponse>;
        PlaceOrder: ({ accountIdKey, ...PlaceOrderRequest }: Order.interfaces.IPlaceOrderRequest) => Promise<Order.interfaces.IPlaceOrderResponse>;
        PreviewOrder: ({ accountIdKey, ...PreviewOrderRequest }: Order.interfaces.IPreviewOrderRequest) => Promise<Order.interfaces.IPreviewOrderResponse>;
    };
    /**
     * E-Trade API constructor.
     * @param config - The configuration object.
     */
    constructor(config: IEtradeConfig);
    /**
     * Set the access token and secret.
     * @param accessToken - The access token.
     * @param accessTokenSecret - The access token secret.
     */
    setToken(accessToken: string, accessTokenSecret: string): void;
}
