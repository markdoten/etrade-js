/**
 * @file Delete Alert.
 */
import session from '../session';
import type {AlertResult} from './enums';
import type {IFailedAlerts} from './interface';

/* eslint-disable max-len */

type TAlertId = number | string;

export interface IDeleteAlertRequest {
  /** List of alert IDs. */
  alertIds: TAlertId[];
}

export interface IDeleteAlertResponse {
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
export const DeleteAlert = ({
  alertIds
}: IDeleteAlertRequest): Promise<IDeleteAlertResponse> =>
  session.request<IDeleteAlertResponse>({method: 'DELETE', path: `/user/alerts/${alertIds.join(',')}`});
