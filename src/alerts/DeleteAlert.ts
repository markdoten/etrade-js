/**
 * @file Delete Alert.
 */
import session from '@src/session';
import type {AlertResult} from '@src/alerts/enums';
import type {IFailedAlerts} from '@src/alerts/interfaces';
import type {IFetchResponse} from '@src/interfaces';

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
 * @param {IDeleteAlertRequest} request - The request object.
 * @param {string} [request.id] - The alert ID value. Alert id whose details are needed.
 * @returns {Promise<IDeleteAlertResponse>} - Details for an alert.
 */
export default ({alertIds}: IDeleteAlertRequest): Promise<IDeleteAlertResponse> =>
  session.request<IDeleteAlertResponse>({
    method: 'DELETE',
    path: `/user/alerts/${alertIds.join(',')}`
  });
