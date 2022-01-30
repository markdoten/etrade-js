declare const _default: {
    BuildOrder: ({ accountId, allOrNone, orderAction, orderTerm, override, priceType, quantity, securityType, symbol }: import("./utils/create").IOrderParams) => import("./interfaces").IOrderDetailReq;
    CancelOrder: ({ accountIdKey, orderId }: import("./CancelOrder").ICancelOrderRequest) => Promise<import("./CancelOrder").ICancelOrderResponse>;
    ChangePreviewedOrder: ({ accountIdKey, orderId, ...PreviewOrderRequest }: import("./ChangePreviewedOrder").IChangePreviewedOrderRequest) => Promise<import("./ChangePreviewedOrder").IChangePreviewedOrderResponse>;
    ListOrders: ({ accountIdKey, ...query }: import("./ListOrders").IListOrdersRequest) => Promise<import("./ListOrders").IListOrdersResponse>;
    PlaceChangedOrder: ({ accountIdKey, orderId, ...PlaceOrderRequest }: import("./PlaceChangedOrder").IPlaceChangedOrderRequest) => Promise<import("./PlaceChangedOrder").IPlaceChangedOrderResponse>;
    PlaceOrder: ({ accountIdKey, ...PlaceOrderRequest }: import("./PlaceOrder").IPlaceOrderRequest) => Promise<import("./PlaceOrder").IPlaceOrderResponse>;
    PreviewOrder: ({ accountIdKey, ...PreviewOrderRequest }: import("./PreviewOrder").IPreviewOrderRequest) => Promise<import("./PreviewOrder").IPreviewOrderResponse>;
};
export default _default;
