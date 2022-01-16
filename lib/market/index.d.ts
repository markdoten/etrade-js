export * as enums from '@src/market/enums';
export * as interfaces from '@src/market/interfaces';
export declare const functions: {
    GetOptionChains: (query: import("@src/market/GetOptionChains").IGetOptionChainsRequest) => Promise<import("@src/market/GetOptionChains").IGetOptionChainsResponse>;
    GetOptionExpireDates: (query: import("@src/market/GetOptionExpireDates").IGetOptionExpireDatesRequest) => Promise<import("@src/market/GetOptionExpireDates").IGetOptionExpireDatesResponse>;
    GetQuotes: ({ symbols, ...query }: import("@src/market/GetQuotes").IGetQuotesRequest) => Promise<import("@src/market/GetQuotes").IGetQuotesResponse>;
    LookUpProduct: ({ search }: import("@src/market/LookUpProduct").ILookUpProductRequest) => Promise<import("@src/market/LookUpProduct").ILookUpProductResponse>;
};
