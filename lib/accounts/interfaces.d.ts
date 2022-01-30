/**
 * @file Account interface.
 */
import type { AccountStatus, AccountType, PositionIndicator } from './enums';
import type { IPortfolioMargin, IProduct } from '../interfaces';
import type { QuoteStatus } from '../enums';
export { IGetAccountBalancesRequest, IGetAccountBalancesResponse } from './GetAccountBalances';
export { IListAccountsResponse } from './ListAccounts';
export { IListTransactionDetailsRequest, IListTransactionDetailsResponse } from './ListTransactionDetails';
export { IListTransactionsRequest, IListTransactionsResponse } from './ListTransactions';
export { IViewPortfolioRequest, IViewPortfolioResponse } from './ViewPortfolio';
export interface IAccount {
    /** Description of account. */
    accountDesc: string;
    /** The user's account ID. */
    accountId: string;
    /** The unique account key. */
    accountIdKey: string;
    /** The account mode. */
    accountMode: string;
    /** The nickname for the account. */
    accountName: string;
    /** The status of the account. */
    accountStatus: AccountStatus;
    /** The account type. */
    accountType: AccountType;
    /** The date when the account was closed. */
    closedDate: number;
    /** The institution type of the account. */
    institutionType: string;
    /** Institution ID. */
    instNo: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/AccountPortfolio|AccountPortfolio Docs}
 */
export interface IAccountPortfolio {
    /** Numeric account ID. */
    accountId: string;
    /** The next account portfolio item. */
    next: string;
    /** The next page number. */
    nextPageNo: string;
    /** Container for one or more account position elements. */
    position: IPosition[];
    /** The total number of pages. */
    totalNoOfPages: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-account-v1.html#/definitions/Accounts|Accounts Docs}
 */
export interface IAccounts {
    /** Display the type, description for each of the user's accounts as well as a detail display for each account. */
    account: IAccount[];
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-transaction-v1.html#/definitions/Brokerage|Brokerage Docs}
 */
export interface IBrokerage {
    /** The check number. */
    checkNo: string;
    /** The brokerage fee. */
    fee: number;
    /** The memo field. */
    memo: string;
    /** The order number. */
    orderNo: string;
    /** Payment currency. */
    paymentCurrency: string;
    /** Price per item if applicable; for example, price per share. */
    price: number;
    /** The specific brokerage product. */
    product: IProduct;
    /** Item count; for example, share count. */
    quantity: number;
    /** Settlement currency. */
    settlementCurrency: string;
    /** Type of transaction (deposit, dividend, and so on). Possible values are listed in the Transaction types table below. */
    transactionType: string;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definitions/Cash|Cash Docs}
 */
export interface ICash {
    /** The funds reserved for open orders. */
    fundsForOpenOrdersCash: number;
    /** The current cash balance of the money market or sweep deposit account. */
    moneyMktBalance: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-transaction-v1.html#/definitions/Category|Category Docs}
 */
export interface ICategory {
    /** The category ID. */
    categoryId: string;
    /** The category name. */
    categoryName: string;
    /** The parent ID. */
    parentId: string;
    /** The parent category name. */
    parentName: string;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/CompleteView|CompleteView Docs}
 */
export interface ICompleteView {
    /** The adjusted last trade. */
    adjLastTrade: number;
    /** The adjusted previous close. */
    adjPrevClose: number;
    /** The adjusted price. */
    adjPrice: number;
    /** The annual dividend. */
    annualDividend: number;
    /** The ask. */
    ask: number;
    /** The size of the ask. */
    askSize: number;
    /** The price of the underlying or base symbol. */
    baseSymbolAndPrice: string;
    /** The beta. */
    beta: number;
    /** The bid. */
    bid: number;
    /** The bid ask spread. */
    bidAskSpread: number;
    /** The size of the bid. */
    bidSize: number;
    /** The change. */
    change: number;
    /** The change percentage. */
    changePct: number;
    /** The currency. */
    currency: string;
    /** The CUSIP number. */
    cusip: string;
    /** The day's range. */
    daysRange: string;
    /** The days remaining until expiration. */
    daysToExpiration: number;
    /** The deliverables. */
    deliverablesStr: string;
    /** The delta. */
    delta: number;
    /** The high for the 52 week high/low delta calculation. */
    delta52WkHigh: number;
    /** The low for the 52 week high/low delta calculation. */
    delta52WkLow: number;
    /** The dividend. */
    dividend: number;
    /** The date of the dividend pay. */
    divPayDate: number;
    /** The dividend yield. */
    divYield: number;
    /** The earnings per share. */
    eps: number;
    /** The estimated earnings. */
    estEarnings: number;
    /** The exchange. */
    exchange: string;
    /** The extended dividend date. */
    exDividendDate: number;
    /** The gamma. */
    gamma: number;
    /** The intrinsic value. */
    intrinsicValue: number;
    /** The Implied Volatility (IV) percentage. */
    ivPct: number;
    /** The last trade. */
    lastTrade: number;
    /** The time of the last trade. */
    lastTradeTime: number;
    /** The sum available for margin. */
    marginable: boolean;
    /** The market cap. */
    marketCap: number;
    /** The open. */
    open: number;
    /** The open interest. */
    openInterest: number;
    /** The option multiplier. */
    optionMultiplier: number;
    /** The options adjusted flag. */
    optionsAdjustedFlag: boolean;
    /** The Price to Earnings (P/E) ratio. */
    peRatio: number;
    /** The 12-month performance. */
    perform12Month: number;
    /** The one-month performance. */
    perform1Month: number;
    /** The three-month performance. */
    perform3Month: number;
    /** The six-month performance. */
    perform6Month: number;
    /** The premium. */
    premium: number;
    /** The previous close. */
    prevClose: number;
    /** The previous day's volume. */
    prevDayVolume: number;
    /** The current market price. */
    price: number;
    /** The price adjusted flag. */
    priceAdjustedFlag: boolean;
    /** The quote type. */
    quoteStatus: QuoteStatus;
    /** The rho. */
    rho: number;
    /** The 10 day average stochastic volatility. */
    sv10DaysAvg: number;
    /** The one month average stochastic volatility. */
    sv1MonAvg: number;
    /** The 20 day average stochastic volatility. */
    sv20DaysAvg: number;
    /** The two month average stochastic volatility. */
    sv2MonAvg: number;
    /** The three month average stochastic volatility. */
    sv3MonAvg: number;
    /** The four month average stochastic volatility. */
    sv4MonAvg: number;
    /** The six month average stochastic volatility. */
    sv6MonAvg: number;
    /** The symbol description. */
    symbolDescription: string;
    /** The 10 day average volume. */
    tenDayVolume: number;
    /** The theta. */
    theta: number;
    /** The vega. */
    vega: number;
    /** The volume. */
    volume: number;
    /** The 52 week high. */
    week52High: number;
    /** The 52 week low. */
    week52Low: number;
    /** The 52 week range. */
    week52Range: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definitions/ComputedBalance|ComputedBalance Docs}
 */
export interface IComputedBalance {
    /** The current account balance. */
    accountBalance: number;
    /** The cash available for investments. */
    cashAvailableForInvestment: number;
    /** The cash available for withdrawal. */
    cashAvailableForWithdrawal: number;
    /** The current cash balance. */
    cashBalance: number;
    /** The cash account buying power. */
    cashBuyingPower: number;
    /** The day trader cash account buying power. */
    dtCashBuyingPower: number;
    /** The day trader margin account buying power. */
    dtMarginBuyingPower: number;
    /** The funds withheld from the purchasing power. */
    fundsWithheldFromPurchasePower: number;
    /** The funds withheld from withdrawal. */
    fundsWithheldFromWithdrawal: number;
    /** The margin account balance. */
    marginBalance: number;
    /** The margin account buying power. */
    marginBuyingPower: number;
    /** The net cash balance. */
    netCash: number;
    /** The open calls. */
    openCalls: IOpenCalls;
    /** The total margin for the portfolio. */
    portfolioMargin: IPortfolioMargin;
    /** The real time values. */
    realTimeValues: IRealTimeValues;
    /** The Regulation T equity. */
    regtEquity: number;
    /** The Regulation T equity percentage. */
    regtEquityPercent: number;
    /** The settled cash for investments. */
    settledCashForInvestment: number;
    /** The short adjusted balance. */
    shortAdjustBalance: number;
    /** The total amount available for withdrawal. */
    totalAvailableForWithdrawal: number;
    /** The unsettled cash for investments. */
    unSettledCashForInvestment: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/FundamentalView|FundamentalView Docs}
 */
export interface IFundamentalView {
    /** The change. */
    change: number;
    /** The change percentage. */
    changePct: number;
    /** The dividend. */
    dividend: number;
    /** The dividend yield. */
    divYield: number;
    /** The earnings per share. */
    eps: number;
    /** The last trade total. */
    lastTrade: number;
    /** The time of the last trade. */
    lastTradeTime: number;
    /** The market cap. */
    marketCap: number;
    /** The Price to Earnings (P/E) ratio. */
    peRatio: number;
    /** The quote type. */
    quoteStatus: QuoteStatus;
    /** The 52 week range. */
    week52Range: string;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definitions/Lending|Lending Docs}
 */
export interface ILending {
    /** The amount past due on the payback of the lent funds. */
    amountPastDue: number;
    /** The available credit on the lent funds. */
    availableCredit: number;
    /** The lent funds current credit line. */
    creditLine: number;
    /** The current balance on lent funds. */
    currentBalance: number;
    /** The date of last payment received on the lent funds. */
    lastPaymentReceivedDate: number;
    /** The last year-to-date interest paid on the lent funds. */
    lastYtdInterestPaid: number;
    /** The minimum balance due on the payback of the lent funds. */
    minPaymentDue: number;
    /** The outstanding balance on the lent funds. */
    outstandingBalance: number;
    /** The payment due date on the lent funds. */
    paymentDueDate: number;
    /** The month-to-date total of payments received on lent funds. */
    paymentReceivedMtd: number;
    /** The year-to-date interest paid on the lent funds. */
    ytdInterestPaid: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definitions/Margin|Margin Docs}
 */
export interface IMargin {
    /** The margin account cash open order reserve. */
    dtCashOpenOrderReserve: number;
    /** The margin account margin open order reserve. */
    dtMarginOpenOrderReserve: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definitions/OpenCalls|OpenCalls Docs}
 */
export interface IOpenCalls {
    /** The cash call. */
    cashCall: number;
    /** The federal call. */
    fedCall: number;
    /** The house call. */
    houseCall: number;
    /** The minimum equity call. */
    minEquityCall: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/OptionsWatchView|OptionsWatchView Docs}
 */
export interface IOptionsWatchView {
    /** The ask. */
    ask: number;
    /** The price of the underlying or base symbol of the option. */
    baseSymbolAndPrice: string;
    /** The bid. */
    bid: number;
    /** The last trade. */
    lastTrade: number;
    /** The time of the last trade. */
    lastTradeTime: number;
    /** The option premium. */
    premium: number;
    /** The quote type. */
    quoteStatus: QuoteStatus;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/PerformanceView|PerformanceView Docs}
 */
export interface IPerformanceView {
    /** The change. */
    change: number;
    /** The change percentage. */
    changePct: number;
    /** The gain over the day. */
    daysGain: number;
    /** The last trade. */
    lastTrade: number;
    /** The time of the last trade. */
    lastTradeTime: number;
    /** The market value. */
    marketValue: number;
    /** The quote type. */
    quoteStatus: QuoteStatus;
    /** The total gain. */
    totalGain: number;
    /** The total gain percentage. */
    totalGainPct: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/Position|Position Docs}
 */
export interface IPosition {
    /** Numeric account ID. */
    accountId: string;
    /** The previous adjusted close. */
    adjPrevClose: number;
    /** The change. */
    change: number;
    /** The percentage change. */
    changePct: number;
    /** The commissions paid for the position. */
    commissions: number;
    /** The complete view. */
    complete: ICompleteView;
    /** The cost per share. */
    costPerShare: number;
    /** The date the position was acquired. */
    dateAcquired: number;
    /** The date and time in UTC. */
    dateTimeUTC: number;
    /** The day's gain. */
    daysGain: number;
    /** The percentage day's gain. */
    daysGainPct: number;
    /** The fundamental view. */
    fundamental: IFundamentalView;
    /** The lots details. */
    lotsDetails: string;
    /** The market value. */
    marketValue: number;
    /** The options watch view. */
    optionsWatch: IOptionsWatchView;
    /** The Options Symbology Initiative (OSI) key containing the option root symbol, expiration date, call/put indicator, and strike price. */
    osiKey: string;
    /** The other fees paid to acquire the position. */
    otherFees: number;
    /** The percentage of the portfolio. */
    pctOfPortfolio: number;
    /** The performance view. */
    performance: IPerformanceView;
    /** The position ID. */
    positionId: number;
    /** The position indicator. */
    positionIndicator: PositionIndicator;
    /** The position lot. */
    positionLot: IPositionLot[];
    /** The position type. */
    positionType: string;
    /** The price of the position. */
    price: number;
    /** The price paid for the position. */
    pricePaid: number;
    /** The product. */
    product: IProduct;
    /** The quantity. */
    quantity: number;
    /** The quick view. */
    quick: IQuickView;
    /** The quote details. */
    quoteDetails: string;
    /** The quote type. */
    quotestatus: string;
    /** The symbol description. */
    symbolDescription: string;
    /** Today's total commissions. */
    todayCommissions: number;
    /** Today's total fees. */
    todayFees: number;
    /** Today's total price paid. */
    todayPricePaid: number;
    /** Today's total quantity. */
    todayQuantity: number;
    /** The total cost. */
    totalCost: number;
    /** The total gain. */
    totalGain: number;
    /** The total gain percentage. */
    totalGainPct: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/PositionLot|PositionLot Docs}
 */
export interface IPositionLot {
    /** The date acquired. */
    acquiredDate: number;
    /** The adjusted price. */
    adjPrice: number;
    /** The available quantity. */
    availableQty: number;
    /** The commissions per share. */
    commPerShare: number;
    /** The days gain. */
    daysGain: number;
    /** The days gain percentage. */
    daysGainPct: number;
    /** The exchange rate. */
    exchangeRate: number;
    /** The fees per share. */
    feesPerShare: number;
    /** The leg number. */
    legNo: number;
    /** The location code. */
    locationCode: number;
    /** The lot source code. */
    lotSourceCode: number;
    /** The market value. */
    marketValue: number;
    /** The order number. */
    orderNo: number;
    /** The original quantity. */
    originalQty: number;
    /** The payment currency. */
    paymentCurrency: string;
    /** The position ID. */
    positionId: number;
    /** The position lot ID. */
    positionLotId: number;
    /** The adjusted premium. */
    premiumAdj: number;
    /** The position lot price. */
    price: number;
    /** The remaining quantity. */
    remainingQty: number;
    /** The settlement currency. */
    settlementCurrency: string;
    /** The short type. */
    shortType: number;
    /** The term code. */
    termCode: number;
    /** The total cost. */
    totalCost: number;
    /** The total cost for the percentage gain. */
    totalCostForGainPct: number;
    /** The total gain. */
    totalGain: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/QuickView|QuickView Docs}
 */
export interface IQuickView {
    /** The total annual return. */
    annualTotalReturn: number;
    /** The change. */
    change: number;
    /** The change percentage. */
    changePct: number;
    /** The last trade. */
    lastTrade: number;
    /** The time of the last trade. */
    lastTradeTime: number;
    /** The quote type. */
    quoteStatus: QuoteStatus;
    /** The seven day current yield. */
    sevenDayCurrentYield: number;
    /** The total volume. */
    volume: number;
    /** The weighted average maturity. */
    weightedAverageMaturity: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definitions/RealTimeValues|RealTimeValues Docs}
 */
export interface IRealTimeValues {
    /** The net market value. */
    netMv: number;
    /** The long net market value. */
    netMvLong: number;
    /** The short net market value. */
    netMvShort: number;
    /** The total account value. */
    totalAccountValue: number;
    /** The total long value. */
    totalLongValue: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/Totals|Totals Docs}
 */
export interface ITotals {
    /** The cash balance. */
    cashBalance: number;
    /** Today's gain or loss. */
    todaysGainLoss: number;
    /** Today's gain or loss percentage. */
    todaysGainLossPct: number;
    /** The total gain or loss. */
    totalGainLoss: number;
    /** The total gain loss percentage. */
    totalGainLossPct: number;
    /** Today's market value. */
    totalMarketValue: number;
    /** The total price paid. */
    totalPricePaid: number;
}
