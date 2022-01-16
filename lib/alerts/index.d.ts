export * as enums from '@src/alerts/enums';
export * as interfaces from '@src/alerts/interfaces';
export declare const functions: {
    DeleteAlert: ({ alertIds }: import("@src/alerts/DeleteAlert").IDeleteAlertRequest) => Promise<import("@src/alerts/DeleteAlert").IDeleteAlertResponse>;
    ListAlertDetails: ({ id, ...query }: import("@src/alerts/ListAlertDetails").IListAlertDetailsRequest) => Promise<import("@src/alerts/ListAlertDetails").IListAlertDetailsResponse>;
    ListAlerts: (query: import("@src/alerts/ListAlerts").IListAlertsRequest) => Promise<import("@src/alerts/ListAlerts").IListAlertsResponse>;
};
