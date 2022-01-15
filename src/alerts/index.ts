/**
 * @file Alerts.
 */
import DeleteAlert, * as DeleteAlertInterfaces from './DeleteAlert';
import ListAlertDetails, * as ListAlertDetailsInterfaces from './ListAlertDetails';
import ListAlerts, * as ListAlertsInterfaces from './ListAlerts';
import * as alertsEnums from './enums';
import * as alertsInterfaces from './interfaces';

export const enums = {
  ...alertsEnums
};

export const functions = {
  DeleteAlert,
  ListAlertDetails,
  ListAlerts
};

export const interfaces = {
  ...DeleteAlertInterfaces,
  ...ListAlertDetailsInterfaces,
  ...ListAlertsInterfaces,
  ...alertsInterfaces
};
