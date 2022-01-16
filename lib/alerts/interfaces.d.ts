/**
 * @file Alerts interface.
 */
import type { AlertStatus } from '../../alerts/enums';
export { IDeleteAlertRequest, IDeleteAlertResponse } from '../../alerts/DeleteAlert';
export { IFetchResponse } from '../../interfaces';
export { IListAlertDetailsRequest, IListAlertDetailsResponse } from '../../alerts/ListAlertDetails';
export { IListAlertsRequest, IListAlertsResponse } from '../../alerts/ListAlerts';
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
