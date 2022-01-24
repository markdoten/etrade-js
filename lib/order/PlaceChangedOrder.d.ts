import type { IDisclosure, IOrderDetail, IOrderId, IPreviewId } from './interfaces';
import type { IFetchResponse, IMessages, IPortfolioMargin } from '../interfaces';
import type { MarginLevel, OrderType } from './enums';
export interface IPlaceChangedOrderRequest {
    /** The unique account key. Retrievable by calling the List Accounts API. */
    accountIdKey: string;
    /** A reference number generated by the developer used to ensure that a duplicate order is not being submitted. This ID may be any value of 20 or less alphanumeric characters, but it must be unique within this account. This field does not appear in any API responses. */
    clientOrderId: string;
    /** The order details for the preview order request. */
    order: IOrderDetail[];
    /** The order Id. */
    orderId: string;
    /** The type of order being placed. */
    orderType: OrderType;
    /** This parameter is required and must specify the numeric preview ID from the preview and the other parameters of this request must match the parameters of the preview. */
    previewIds: IPreviewId[];
}
export interface IPlaceChangedOrderResponse extends IFetchResponse {
    /** The numeric account ID. */
    accountId: string;
    /** A reference number generated by the developer used to ensure that a duplicate order is not being submitted. This ID may be any value of 20 or less alphanumeric characters, but it must be unique within this account. This field does not appear in any API responses. */
    clientOrderId: string;
    /** The commission message. */
    commissionMsg: string;
    /** The disclosure designation. */
    disclosure: IDisclosure;
    /** Indicator flag identifying whether daylight savings time is applicable or not. */
    dstFlag: boolean;
    /** Indicator flag identifying whether user is an E*TRADE employee. */
    isEmployee: boolean;
    /** The code that designates the applicable margin level. */
    marginLevelCd: MarginLevel;
    /** The object for the message list. */
    messageList: IMessages;
    /** The code that designates the applicable options level. */
    optionLevelCd: number;
    /** The details for the order. */
    order: IOrderDetail[];
    /** ID number assigned to this order. */
    orderId: number;
    /** The confirmation number of the particular order placed. */
    orderIds: IOrderId[];
    /** The type of order being placed. */
    orderType: OrderType;
    /** The time the order was previewed. */
    placedTime: number;
    /** The portfolio margin details for the user. */
    portfolioMargin: IPortfolioMargin;
    /** The total commission. */
    totalCommission: number;
    /** The total order value. */
    totalOrderValue: number;
}
declare const _default: ({ accountIdKey, orderId, ...PlaceOrderRequest }: IPlaceChangedOrderRequest) => Promise<IPlaceChangedOrderResponse>;
/**
 * Submit an order after it has been successfully modified.
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @param [request.orderId] - The order Id.
 * @returns {Promise<IPlaceChangedOrderResponse>} - Status of the order.
 */
export default _default;
