/**
 * @file Place Order.
 */
import session from '../session';
import type {IDisclosure, IOrderDetail, IOrderId, IPreviewId} from './interface';
import type {IFetchResponse, IMessages, IPortfolioMargin} from '../interface';
import type {MarginLevel, OrderType} from './enums';

/* eslint-disable max-len */

export interface IPlaceOrderRequest {
  /** The unique account key. Retrievable by calling the List Accounts API. */
  accountIdKey: string;
  /** A reference ID generated by the developer that is used to ensure that a duplicate order is not being submitted. This reference ID may be any value of 20 or less alphanumeric characters but must be unique within the account. This field does not appear in any API responses. */
  clientOrderId: string;
  /** The details of the order. */
  order: IOrderDetail[];
  /** The type of order being placed. */
  orderType: OrderType;
  /** This parameter is required and must specify the numeric preview ID from the preview and the other parameters of this request must match the parameters of the preview. */
  previewIds: IPreviewId[];
}

export interface IPlaceOrderResponse extends IFetchResponse {
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

/**
 * Submit an order after it has been successfully previewed.
 * @async
 * @param {IPlaceOrderRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<IPlaceOrderResponse>} - Status of the order.
 */
export const PlaceOrder = ({
  accountIdKey,
  ...body
}: IPlaceOrderRequest): Promise<IPlaceOrderResponse> =>
  session.request<IPlaceOrderResponse>({
    body,
    method: 'POST',
    path: `/accounts/${accountIdKey}/orders/place`
  });
