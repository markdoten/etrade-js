export declare const enums: {};
export * as interfaces from '../../auth/interfaces';
export declare const functions: {
    RenewAccessToken: () => Promise<import("../../auth/RenewAccessToken").IRenewAccessTokenResponse>;
    RevokeAccessToken: () => Promise<import("../../auth/RevokeAccessToken").IRevokeAccessTokenResponse>;
};
