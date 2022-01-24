/**
 * @file Delete Alert.
 */
import session from '../session';
import type {AlertResult} from './enums';
import type {IFailedAlerts} from './interfaces';
import type {IFetchResponse} from '../interfaces';

/* eslint-disable max-len */

type TAlertId = number | string;

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

/**
 * Returns the details for an alert.
 * @async
 * @param request - The request object.
 * @param [request.alertIds] - List of alert IDs.
 * @returns {Promise<IDeleteAlertResponse>} - Details for an alert.
 */
export default ({alertIds}: IDeleteAlertRequest): Promise<IDeleteAlertResponse> =>
  session.request<IDeleteAlertResponse>({
    method: 'DELETE',
    path: `/user/alerts/${alertIds.join(',')}`
  });
