/**
 * @file Account interface.
 */
import type { AccountType } from '@src/accounts/enums';
import type { IPortfolioMargin, IProduct } from '@src/interfaces';
import type { QuoteStatus } from '@src/enums';
export { IFetchResponse, IPortfolioMargin, IProduct } from '@src/interfaces';
export { IGetAccountBalancesRequest, IGetAccountBalancesResponse } from '@src/accounts/GetAccountBalances';
export { IListAccountsResponse } from '@src/accounts/ListAccounts';
export { IListTransactionDetailsRequest, IListTransactionDetailsResponse } from '@src/accounts/ListTransactionDetails';
export { IListTransactionsRequest, IListTransactionsResponse } from '@src/accounts/ListTransactions';
export { IViewPortfolioRequest, IViewPortfolioResponse } from '@src/accounts/ViewPortfolio';
export interface IAccount {
    accountDesc: string;
    accountId: string;
    accountIdKey: string;
    accountMode: string;
    accountName: string;
    accountStatus: 'ACTIVE' | 'CLOSED';
    accountType: AccountType;
    closedDate: number;
    institutionType: string;
    instNo: number;
}
export interface IAccountPortfolio {
    accountId: string;
    next: string;
    nextPageNo: string;
    position: IPosition[];
    totalNoOfPages: number;
}
export interface IAccounts {
    account: IAccount[];
}
export interface IBrokerage {
    checkNo: string;
    fee: number;
    memo: string;
    paymentCurrency: string;
    price: number;
    product: IProduct;
    quantity: number;
    settlementCurrency: string;
    transactionType: string;
    orderNo: string;
}
export interface ICash {
    fundsForOpenOrdersCash: number;
    moneyMktBalance: number;
}
export interface ICategory {
    categoryId: string;
    categoryName: string;
    parentId: string;
    parentName: string;
}
export interface ICompleteView {
    adjLastTrade: number;
    adjPrevClose: number;
    adjPrice: number;
    annualDividend: number;
    ask: number;
    askSize: number;
    baseSymbolAndPrice: string;
    beta: number;
    bid: number;
    bidAskSpread: number;
    bidSize: number;
    change: number;
    changePct: number;
    currency: string;
    cusip: string;
    daysRange: string;
    daysToExpiration: number;
    deliverablesStr: string;
    delta: number;
    delta52WkHigh: number;
    delta52WkLow: number;
    dividend: number;
    divPayDate: number;
    divYield: number;
    eps: number;
    estEarnings: number;
    exchange: string;
    exDividendDate: number;
    gamma: number;
    intrinsicValue: number;
    ivPct: number;
    lastTrade: number;
    lastTradeTime: number;
    marginable: boolean;
    marketCap: number;
    open: number;
    openInterest: number;
    optionMultiplier: number;
    optionsAdjustedFlag: boolean;
    peRatio: number;
    perform12Month: number;
    perform1Month: number;
    perform3Month: number;
    perform6Month: number;
    premium: number;
    prevClose: number;
    prevDayVolume: number;
    price: number;
    priceAdjustedFlag: boolean;
    quoteStatus: QuoteStatus;
    rho: number;
    sv10DaysAvg: number;
    sv1MonAvg: number;
    sv20DaysAvg: number;
    sv2MonAvg: number;
    sv3MonAvg: number;
    sv4MonAvg: number;
    sv6MonAvg: number;
    symbolDescription: string;
    tenDayVolume: number;
    theta: number;
    vega: number;
    volume: number;
    week52High: number;
    week52Low: number;
    week52Range: number;
}
export interface IComputedBalance {
    cashAvailableForInvestment: number;
    cashAvailableForWithdrawal: number;
    totalAvailableForWithdrawal: number;
    netCash: number;
    cashBalance: number;
    settledCashForInvestment: number;
    unSettledCashForInvestment: number;
    fundsWithheldFromPurchasePower: number;
    fundsWithheldFromWithdrawal: number;
    marginBuyingPower: number;
    cashBuyingPower: number;
    dtMarginBuyingPower: number;
    dtCashBuyingPower: number;
    marginBalance: number;
    shortAdjustBalance: number;
    regtEquity: number;
    regtEquityPercent: number;
    accountBalance: number;
    openCalls: IOpenCalls;
    realTimeValues: IRealTimeValues;
    portfolioMargin: IPortfolioMargin;
}
export interface IFundamentalView {
    change: number;
    changePct: number;
    dividend: number;
    divYield: number;
    eps: number;
    lastTrade: number;
    lastTradeTime: number;
    marketCap: number;
    peRatio: number;
    quoteStatus: QuoteStatus;
    week52Range: string;
}
export interface ILending {
    amountPastDue: number;
    availableCredit: number;
    creditLine: number;
    currentBalance: number;
    lastPaymentReceivedDate: number;
    lastYtdInterestPaid: number;
    minPaymentDue: number;
    outstandingBalance: number;
    paymentDueDate: number;
    paymentReceivedMtd: number;
    ytdInterestPaid: number;
}
export interface IMargin {
    dtCashOpenOrderReserve: number;
    dtMarginOpenOrderReserve: number;
}
export interface IOpenCalls {
    cashCall: number;
    fedCall: number;
    houseCall: number;
    minEquityCall: number;
}
export interface IOptionsWatchView {
    ask: number;
    baseSymbolAndPrice: string;
    bid: number;
    lastTrade: number;
    lastTradeTime: number;
    premium: number;
    quoteStatus: QuoteStatus;
}
export interface IPerformanceView {
    change: number;
    changePct: number;
    daysGain: number;
    lastTrade: number;
    lastTradeTime: number;
    marketValue: number;
    quoteStatus: QuoteStatus;
    totalGain: number;
    totalGainPct: number;
}
export interface IPosition {
    accountId: string;
    adjPrevClose: number;
    change: number;
    changePct: number;
    commissions: number;
    complete: ICompleteView;
    costPerShare: number;
    dateAcquired: number;
    dateTimeUTC: number;
    daysGain: number;
    daysGainPct: number;
    fundamental: IFundamentalView;
    lotsDetails: string;
    marketValue: number;
    optionsWatch: IOptionsWatchView;
    osiKey: string;
    otherFees: number;
    pctOfPortfolio: number;
    performance: IPerformanceView;
    positionId: number;
    positionIndicator: 'TYPE1' | 'TYPE2' | 'TYPE5' | 'UNDEFINED';
    positionLot: IPositionLot[];
    positionType: string;
    price: number;
    pricePaid: number;
    product: IProduct;
    quantity: number;
    quick: IQuickView;
    quoteDetails: string;
    quotestatus: string;
    symbolDescription: string;
    todayCommissions: number;
    todayFees: number;
    todayPricePaid: number;
    todayQuantity: number;
    totalCost: number;
    totalGain: number;
    totalGainPct: number;
}
export interface IPositionLot {
    acquiredDate: number;
    adjPrice: number;
    availableQty: number;
    commPerShare: number;
    daysGain: number;
    daysGainPct: number;
    exchangeRate: number;
    feesPerShare: number;
    legNo: number;
    locationCode: number;
    lotSourceCode: number;
    marketValue: number;
    orderNo: number;
    originalQty: number;
    paymentCurrency: string;
    positionId: number;
    positionLotId: number;
    premiumAdj: number;
    price: number;
    remainingQty: number;
    settlementCurrency: string;
    shortType: number;
    termCode: number;
    totalCost: number;
    totalCostForGainPct: number;
    totalGain: number;
}
export interface IQuickView {
    annualTotalReturn: number;
    change: number;
    changePct: number;
    lastTrade: number;
    lastTradeTime: number;
    quoteStatus: QuoteStatus;
    sevenDayCurrentYield: number;
    volume: number;
    weightedAverageMaturity: number;
}
export interface IRealTimeValues {
    netMv: number;
    netMvLong: number;
    netMvShort: number;
    totalAccountValue: number;
    totalLongValue: number;
}
export interface ITotals {
    cashBalance: number;
    todaysGainLoss: number;
    todaysGainLossPct: number;
    totalGainLoss: number;
    totalGainLossPct: number;
    totalMarketValue: number;
    totalPricePaid: number;
}
