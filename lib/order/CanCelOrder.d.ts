import type { IFetchResponse, IMessages } from '../interfaces';
export interface ICancelOrderRequest {
    /** The unique account key. Retrievable by calling the List Accounts API. */
    accountIdKey: string;
    /** Order confirmation Id for the order placed. */
    orderId: number;
}
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
declare const _default: ({ accountIdKey, orderId }: ICancelOrderRequest) => Promise<ICancelOrderResponse>;
/**
 * Cancel an existing order.
 * @async
 * @param {ICancelOrderRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<ICancelOrderResponse>} - Order status.
 */
export default _default;
