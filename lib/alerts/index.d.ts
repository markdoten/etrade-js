export * as enums from '../../alerts/enums';
export * as interfaces from '../../alerts/interfaces';
export declare const functions: {
    DeleteAlert: ({ alertIds }: import("../../alerts/DeleteAlert").IDeleteAlertRequest) => Promise<import("../../alerts/DeleteAlert").IDeleteAlertResponse>;
    ListAlertDetails: ({ id, ...query }: import("../../alerts/ListAlertDetails").IListAlertDetailsRequest) => Promise<import("../../alerts/ListAlertDetails").IListAlertDetailsResponse>;
    ListAlerts: (query: import("../../alerts/ListAlerts").IListAlertsRequest) => Promise<import("../../alerts/ListAlerts").IListAlertsResponse>;
};
