/**
 * @file Alerts enums.
 */
export {SortOrder} from '../enums';

export enum AlertCategory {
  ACCOUNT = 'ACCOUNT',
  STOCK = 'STOCK'
}

export enum AlertResult {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export enum AlertStatus {
  DELETED = 'DELETED',
  READ = 'READ',
  UNREAD = 'UNREAD'
}
