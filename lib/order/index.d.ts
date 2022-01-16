export * as enums from '@src/order/enums';
export * as interfaces from '@src/order/interfaces';
export declare const functions: {
    BuildOrder: ({ accountId, allOrNone, orderAction, orderTerm, override, priceType, quantity, securityType, symbol }: import("@src/order/interfaces").IOrderParams) => import("@src/order/interfaces").IOrderDetail;
    CancelOrder: ({ accountIdKey, orderId }: import("@src/order/CancelOrder").ICancelOrderRequest) => Promise<import("@src/order/CancelOrder").ICancelOrderResponse>;
    ChangePreviewedOrder: ({ accountIdKey, orderId, ...PreviewOrderRequest }: import("@src/order/ChangePreviewedOrder").IChangePreviewedOrderRequest) => Promise<import("@src/order/ChangePreviewedOrder").IChangePreviewedOrderResponse>;
    ListOrders: ({ accountIdKey, ...query }: import("@src/order/ListOrders").IListOrdersRequest) => Promise<import("@src/order/ListOrders").IListOrdersResponse>;
    PlaceChangedOrder: ({ accountIdKey, orderId, ...PlaceOrderRequest }: import("@src/order/PlaceChangedOrder").IPlaceChangedOrderRequest) => Promise<import("@src/order/PlaceChangedOrder").IPlaceChangedOrderResponse>;
    PlaceOrder: ({ accountIdKey, ...PlaceOrderRequest }: import("@src/order/PlaceOrder").IPlaceOrderRequest) => Promise<import("@src/order/PlaceOrder").IPlaceOrderResponse>;
    PreviewOrder: ({ accountIdKey, ...PreviewOrderRequest }: import("@src/order/PreviewOrder").IPreviewOrderRequest) => Promise<import("@src/order/PreviewOrder").IPreviewOrderResponse>;
};
