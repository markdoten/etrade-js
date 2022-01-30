/**
 * @file Alerts interface.
 */
import type {AlertStatus} from './enums';

export {IDeleteAlertRequest, IDeleteAlertResponse} from './DeleteAlert';
export {IListAlertDetailsRequest, IListAlertDetailsResponse} from './ListAlertDetails';
export {IListAlertsRequest, IListAlertsResponse} from './ListAlerts';

/**
 * @see {@link https://apisb.etrade.com/docs/api/user/api-alert-v1.html#/definitions/Alert|Alert Docs}
 */
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

/**
 * @see {@link https://apisb.etrade.com/docs/api/user/api-alert-v1.html#/definitions/FailedAlerts|FailedAlerts Docs}
 */
export interface IFailedAlerts {
  /** The array of failed alert IDs. */
  alertId: number[];
}
