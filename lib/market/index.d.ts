export * as enums from '../../market/enums';
export * as interfaces from '../../market/interfaces';
export declare const functions: {
    GetOptionChains: (query: import("../../market/GetOptionChains").IGetOptionChainsRequest) => Promise<import("../../market/GetOptionChains").IGetOptionChainsResponse>;
    GetOptionExpireDates: (query: import("../../market/GetOptionExpireDates").IGetOptionExpireDatesRequest) => Promise<import("../../market/GetOptionExpireDates").IGetOptionExpireDatesResponse>;
    GetQuotes: ({ symbols, ...query }: import("../../market/GetQuotes").IGetQuotesRequest) => Promise<import("../../market/GetQuotes").IGetQuotesResponse>;
    LookUpProduct: ({ search }: import("../../market/LookUpProduct").ILookUpProductRequest) => Promise<import("../../market/LookUpProduct").ILookUpProductResponse>;
};
