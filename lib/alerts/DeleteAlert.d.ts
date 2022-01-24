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
 * @param request - The request object.
 * @param [request.alertIds] - List of alert IDs.
 * @returns {Promise<IDeleteAlertResponse>} - Details for an alert.
 */
export default _default;
