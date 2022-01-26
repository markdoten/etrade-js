declare const _default: {
    DeleteAlert: ({ alertIds }: import("./DeleteAlert").IDeleteAlertRequest) => Promise<import("./DeleteAlert").IDeleteAlertResponse>;
    ListAlertDetails: ({ id, ...query }: import("./ListAlertDetails").IListAlertDetailsRequest) => Promise<import("./ListAlertDetails").IListAlertDetailsResponse>;
    ListAlerts: (query: import("./ListAlerts").IListAlertsRequest) => Promise<import("./ListAlerts").IListAlertsResponse>;
};
export default _default;
