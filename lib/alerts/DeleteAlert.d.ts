import type { AlertResult } from './enums';
import type { IFailedAlerts } from './interfaces';
import type { IFetchResponse } from '../interfaces';
declare type TAlertId = number | string;
export interface IDeleteAlertRequest {
    /** List of alert IDs. */
    alertIds: TAlertId[];
}
export interface IDeleteAlertResponse extends IFetchResponse {
    /** The failed alerts response. */
    failedAlerts: IFailedAlerts;
    /** The result status of the alert. */
    result: AlertResult;
}
declare const _default: ({ alertIds }: IDeleteAlertRequest) => Promise<IDeleteAlertResponse>;
/**
 * Returns the details for an alert.
 * @async
 * @param {IDeleteAlertRequest} request - The request object.
 * @param {string} [request.id] - The alert ID value. Alert id whose details are needed.
 * @returns {Promise<IDeleteAlertResponse>} - Details for an alert.
 */
export default _default;
