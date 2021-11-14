/**
 * @file Alerts interface.
 */
import type {AlertStatus} from './enums';

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
