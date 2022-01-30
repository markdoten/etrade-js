/**
 * @file Cancel Order.
 */
import session from '../session';
import type {IFetchResponse, IMessages} from '../interfaces';

/* eslint-disable max-len */

export interface ICancelOrderRequest {
  /** The unique account key. Retrievable by calling the List Accounts API. */
  accountIdKey: string;
  /** Order confirmation Id for the order placed. */
  orderId: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/CancelOrderResponse|CancelOrderResponse Docs}
 */
export interface ICancelOrderResponse extends IFetchResponse {
  /** The numeric account ID for the cancelled order. */
  accountId: string;
  /** The time, in Epoch time, that the cancel request was submitted. */
  cancelTime: number;
  /** The messages relating to the order cancellation. */
  messages: IMessages;
  /** The order ID. */
  orderId: number;
}

/**
 * Cancel an existing order.
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @param [request.orderId] - Order confirmation Id for the order placed.
 * @returns {Promise<ICancelOrderResponse>} - Order status.
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definition/cancelOrder|Cancel Order Docs}
 */
export default ({accountIdKey, orderId}: ICancelOrderRequest): Promise<ICancelOrderResponse> =>
  session.request<ICancelOrderResponse>({
    body: {CancelOrderRequest: {orderId}},
    method: 'PUT',
    path: `/accounts/${accountIdKey}/orders/cancel`
  });
