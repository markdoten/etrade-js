export declare const enums: {};
export * as interfaces from './interfaces';
export declare const functions: {
    RenewAccessToken: () => Promise<import("./RenewAccessToken").IRenewAccessTokenResponse>;
    RevokeAccessToken: () => Promise<import("./RevokeAccessToken").IRevokeAccessTokenResponse>;
};
