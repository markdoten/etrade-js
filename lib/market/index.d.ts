declare const _default: {
    GetOptionChains: (query: import("./GetOptionChains").IGetOptionChainsRequest) => Promise<import("./GetOptionChains").IGetOptionChainsResponse>;
    GetOptionExpireDates: (query: import("./GetOptionExpireDates").IGetOptionExpireDatesRequest) => Promise<import("./GetOptionExpireDates").IGetOptionExpireDatesResponse>;
    GetQuotes: ({ symbols, ...query }: import("./GetQuotes").IGetQuotesRequest) => Promise<import("./GetQuotes").IGetQuotesResponse>;
    LookUpProduct: ({ search }: import("./LookUpProduct").ILookUpProductRequest) => Promise<import("./LookUpProduct").ILookUpProductResponse>;
};
export default _default;
