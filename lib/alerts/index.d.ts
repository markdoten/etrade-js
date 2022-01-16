export * as enums from './enums';
export * as interfaces from './interfaces';
export declare const functions: {
    DeleteAlert: ({ alertIds }: import("./DeleteAlert").IDeleteAlertRequest) => Promise<import("./DeleteAlert").IDeleteAlertResponse>;
    ListAlertDetails: ({ id, ...query }: import("./ListAlertDetails").IListAlertDetailsRequest) => Promise<import("./ListAlertDetails").IListAlertDetailsResponse>;
    ListAlerts: (query: import("./ListAlerts").IListAlertsRequest) => Promise<import("./ListAlerts").IListAlertsResponse>;
};
