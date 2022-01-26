/**
 * @file Market interface.
 */
import type { ExpiryType, OptionCategory } from './enums';
import type { IProduct } from '../interfaces';
import type { QuoteStatus } from '../enums';
export { IGetOptionChainsRequest, IGetOptionChainsResponse } from './GetOptionChains';
export { IGetOptionExpireDatesRequest, IGetOptionExpireDatesResponse } from './GetOptionExpireDates';
export { IGetQuotesRequest, IGetQuotesResponse } from './GetQuotes';
export { ILookUpProductRequest, ILookUpProductResponse } from './LookUpProduct';
export interface IAllQuoteDetails {
    adjustedFlag: boolean;
    ask: number;
    askSize: number;
    askTime: string;
    averageVolume: number;
    beta: number;
    bid: number;
    bidExchange: string;
    bidSize: number;
    bidTime: string;
    cashDeliverable: number;
    changeClose: number;
    changeClosePercentage: number;
    companyName: string;
    contractSize: number;
    daysToExpiration: number;
    declaredDividend: number;
    dirLast: string;
    dividend: number;
    dividendPayableDate: number;
    ehQuote: IExtendedHourQuoteDetail;
    eps: number;
    estEarnings: number;
    exDividendDate: number;
    expirationDate: number;
    high: number;
    high52: number;
    intrinsicValue: number;
    lastTrade: number;
    low: number;
    low52: number;
    marketCap: number;
    nextEarningDate: string;
    open: number;
    openInterest: number;
    optionDeliverableList: IOptionDeliverable[];
    optionMultiplier: number;
    optionPreviousAskPrice: number;
    optionPreviousBidPrice: number;
    optionStyle: string;
    optionUnderlier: string;
    optionUnderlierExchange: string;
    osiKey: string;
    pe: number;
    previousClose: number;
    previousDayVolume: number;
    primaryExchange: string;
    sharesOutstanding: number;
    symbolDescription: string;
    timeOfLastTrade: number;
    timePremium: number;
    totalVolume: number;
    upc: number;
    week52HiDate: number;
    week52LowDate: number;
    yield: number;
}
export interface IData {
    description: string;
    symbol: string;
    type: string;
}
export interface IExpirationDate {
    day: number;
    expiryType: ExpiryType;
    month: number;
    year: number;
}
export interface IExtendedHourQuoteDetail {
    ask: number;
    askSize: number;
    bid: number;
    bidSize: number;
    change: number;
    lastPrice: number;
    percentChange: number;
    quoteStatus: string;
    timeOfLastTrade: number;
    timeZone: string;
    volume: number;
}
export interface IFundamentalQuoteDetails {
    companyName: string;
    eps: number;
    estEarnings: number;
    high52: number;
    lastTrade: number;
    low52: number;
    symbolDescription: string;
}
export interface IIntradayQuoteDetails {
    ask: number;
    bid: number;
    changeClose: number;
    changeClosePercentage: number;
    companyName: string;
    high: number;
    lastTrade: number;
    low: number;
    totalVolume: number;
}
export interface IMutualFund {
    actual12B1Fee: number;
    annualTotalReturn: number;
    availability: string;
    averageAnnualReturn10Yr: number;
    averageAnnualReturn1Yr: number;
    averageAnnualReturn3Yr: number;
    averageAnnualReturn5Yr: number;
    averageAnnualReturns: number;
    changeClose: number;
    changeClosePercentage: number;
    cusip: string;
    deferredSalesCharges: ISaleChargeValues[];
    earlyRedemptionFee: string;
    etradeEarlyRedemptionFee: string;
    exchangeCode: string;
    exchangeName: string;
    frontEndSalesCharges: ISaleChargeValues[];
    fundFamily: string;
    fundInceptionDate: number;
    fundName: string;
    grossExpenseRatio: number;
    high52: number;
    initialInvestment: number;
    initialIraInvestment: number;
    lastTrade: number;
    low52: number;
    maxSalesLoad: number;
    monthlyTrailingReturn10Y: number;
    monthlyTrailingReturn1M: number;
    monthlyTrailingReturn1Y: number;
    monthlyTrailingReturn3M: number;
    monthlyTrailingReturn3Y: number;
    monthlyTrailingReturn5Y: number;
    monthlyTrailingReturn6M: number;
    monthlyTrailingReturnYTD: number;
    morningStarCategory: string;
    netAssets: INetAsset;
    netAssetValue: number;
    netExpenseRatio: number;
    orderCutoffTime: number;
    performanceAsOfDate: string;
    previousClose: number;
    publicOfferPrice: number;
    qtrlyPerformanceAsOfDate: string;
    qtrlyTrailingReturn1M: number;
    qtrlyTrailingReturn3M: number;
    qtrlyTrailingReturn6M: number;
    qtrlyTrailingReturnYTD: number;
    quarterlySinceInception: number;
    redemption: IRedemption;
    salesCharge: number;
    sevenDayCurrentYield: number;
    sinceInception: number;
    subsequentInvestment: number;
    subsequentIraInvestment: number;
    symbolDescription: string;
    timeOfLastTrade: number;
    transactionFee: string;
    week52HiDate: number;
    week52LowDate: number;
    weightedAverageMaturity: number;
}
export interface INetAsset {
    asOfDate: number;
    value: number;
}
export interface IOptionChainPair {
    optioncall: IOptionDetails;
    optionPut: IOptionDetails;
    pairType: string;
}
export interface IOptionDeliverable {
    deliverableCILShares: number;
    deliverableExchangeCode: string;
    deliverableStrikePercent: number;
    deliverableSymbol: string;
    deliverableTypeCode: string;
    deliverableWholeShares: number;
    rootSymbol: string;
}
export interface IOptionDetails {
    adjustedFlag: boolean;
    ask: number;
    askSize: number;
    bid: number;
    bidSize: number;
    displaySymbol: string;
    inTheMoney: string;
    lastPrice: number;
    netChange: number;
    openInterest: number;
    optionCategory: OptionCategory;
    optionGreek: IOptionGreeks;
    optionRootSymbol: string;
    optionType: string;
    osiKey: string;
    quoteDetail: string;
    strikePrice: number;
    symbol: string;
    timeStamp: number;
    volume: number;
}
export interface IOptionGreeks {
    currentValue: boolean;
    delta: number;
    gamma: number;
    iv: number;
    rho: number;
    theta: number;
    vega: number;
}
export interface IOptionQuoteDetails {
    ask: number;
    askSize: number;
    bid: number;
    bidSize: number;
    companyName: string;
    contractSize: number;
    daysToExpiration: number;
    intrinsicValue: number;
    lastTrade: number;
    openInterest: number;
    optionGreeks: IOptionGreeks;
    optionMultiplier: number;
    optionPreviousAskPrice: number;
    optionPreviousBidPrice: number;
    osiKey: string;
    symbolDescription: string;
    timePremium: number;
}
export interface IQuoteData {
    ahFlag: string;
    all: IAllQuoteDetails;
    dateTime: string;
    dateTimeUTC: number;
    dstFlag: boolean;
    errorMessage: string;
    fundamental: IFundamentalQuoteDetails;
    hasMiniOptions: boolean;
    intraday: IIntradayQuoteDetails;
    mutualFund: IMutualFund;
    option: IOptionQuoteDetails;
    product: IProduct;
    quoteStatus: QuoteStatus;
    timeZone: string;
    week52: IWeek52QuoteDetails;
}
export interface IRedemption {
    feePercent: string;
    frontEndValues: IValues[];
    isFrontEnd: string;
    isSales: string;
    minMonth: string;
    redemptionDurationType: string;
    salesDurationType: string;
    salesValues: IValues[];
}
export interface ISaleChargeValues {
    lowhigh: string;
    percent: string;
}
export interface ISelectedED {
    day: number;
    month: number;
    year: number;
}
export interface IValues {
    high: string;
    low: string;
    percent: string;
}
export interface IWeek52QuoteDetails {
    companyName: string;
    high52: number;
    lastTrade: number;
    low52: number;
    perf12Months: number;
    previousClose: number;
    symbolDescription: string;
    totalVolume: number;
}
