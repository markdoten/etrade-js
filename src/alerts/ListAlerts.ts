/**
 * @file List Alerts.
 */
import session from '../session';
import type {AlertCategory, AlertStatus} from './enums';
import type {IAlert} from './interface';
import type {SortOrder} from '../enums';

/* eslint-disable max-len */

export interface IListAlertsRequest {
  /** The alert category. */
  category?: AlertCategory;
  /** The alert count. By default it returns 25. Max values that can be returned: 300. */
  count?: number;
  /** Sorting is done based on the createDate. */
  direction?: SortOrder;
  /** The alert search. Search is done based on the subject. */
  search?: string;
  /** The alert status. */
  status?: AlertStatus;
}

export interface IListAlertsResponse {
  /** The array of alert responses. */
  alerts: IAlert[];
  /** The total number of alerts for the user including READ, UNREAD and DELETED. */
  totalAlerts: number;
}

/**
 * Returns a list of alerts.
 * @async
 * @param {IListAlertsRequest} query - The request object.
 * @returns {Promise<IListAlertsResponse>} - List of alerts.
 */
export const ListAlerts = (query: IListAlertsRequest): Promise<IListAlertsResponse> =>
  session.request<IListAlertsResponse>({path: '/user/alerts', query});
