export * as enums from '../../order/enums';
export * as interfaces from '../../order/interfaces';
export declare const functions: {
    BuildOrder: ({ accountId, allOrNone, orderAction, orderTerm, override, priceType, quantity, securityType, symbol }: import("../../order/interfaces").IOrderParams) => import("../../order/interfaces").IOrderDetail;
    CancelOrder: ({ accountIdKey, orderId }: import("../../order/CancelOrder").ICancelOrderRequest) => Promise<import("../../order/CancelOrder").ICancelOrderResponse>;
    ChangePreviewedOrder: ({ accountIdKey, orderId, ...PreviewOrderRequest }: import("../../order/ChangePreviewedOrder").IChangePreviewedOrderRequest) => Promise<import("../../order/ChangePreviewedOrder").IChangePreviewedOrderResponse>;
    ListOrders: ({ accountIdKey, ...query }: import("../../order/ListOrders").IListOrdersRequest) => Promise<import("../../order/ListOrders").IListOrdersResponse>;
    PlaceChangedOrder: ({ accountIdKey, orderId, ...PlaceOrderRequest }: import("../../order/PlaceChangedOrder").IPlaceChangedOrderRequest) => Promise<import("../../order/PlaceChangedOrder").IPlaceChangedOrderResponse>;
    PlaceOrder: ({ accountIdKey, ...PlaceOrderRequest }: import("../../order/PlaceOrder").IPlaceOrderRequest) => Promise<import("../../order/PlaceOrder").IPlaceOrderResponse>;
    PreviewOrder: ({ accountIdKey, ...PreviewOrderRequest }: import("../../order/PreviewOrder").IPreviewOrderRequest) => Promise<import("../../order/PreviewOrder").IPreviewOrderResponse>;
};
