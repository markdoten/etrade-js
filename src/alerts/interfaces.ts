/**
 * @file Alerts interface.
 */
import type {AlertStatus} from '@src/alerts/enums';

export {IDeleteAlertRequest, IDeleteAlertResponse} from '@src/alerts/DeleteAlert';
export {IFetchResponse} from '@src/interfaces';
export {IListAlertDetailsRequest, IListAlertDetailsResponse} from '@src/alerts/ListAlertDetails';
export {IListAlertsRequest, IListAlertsResponse} from '@src/alerts/ListAlerts';

export interface IAlert {
  /** The date and time the alert was issued, in Epoch time. */
  createTime: number;
  /** The numeric alert ID. */
  id: number;
  /** The current status of the alert. */
  status: AlertStatus;
  /** The subject of the alert. */
  subject: string;
}

export interface IFailedAlerts {
  /** The array of failed alert IDs. */
  alertId: number[];
}
