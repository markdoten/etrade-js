export declare const enums: {};
export * as interfaces from '@src/auth/interfaces';
export declare const functions: {
    RenewAccessToken: () => Promise<import("@src/auth/RenewAccessToken").IRenewAccessTokenResponse>;
    RevokeAccessToken: () => Promise<import("@src/auth/RevokeAccessToken").IRevokeAccessTokenResponse>;
};
