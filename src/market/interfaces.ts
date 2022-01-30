/**
 * @file Market interface.
 */
import type {ExpiryType, OptionCategory} from './enums';
import type {IProduct} from '../interfaces';
import type {QuoteStatus} from '../enums';

export {IGetOptionChainsRequest, IGetOptionChainsResponse} from './GetOptionChains';
export {IGetOptionExpireDatesRequest, IGetOptionExpireDatesResponse} from './GetOptionExpireDates';
export {IGetQuotesRequest, IGetQuotesResponse} from './GetQuotes';
export {ILookUpProductRequest, ILookUpProductResponse} from './LookUpProduct';

/* eslint-disable max-len */

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/AllQuoteDetails|AllQuoteDetails Docs}
 */
export interface IAllQuoteDetails {
  /** Indicates whether an option has been adjusted due to a corporate action (for example, a dividend or stock split). */
  adjustedFlag: boolean;
  /** The current ask price for a security. */
  ask: number;
  /** Number shares or contracts offered by broker or dealer at the ask price. */
  askSize: number;
  /** The time of the ask; for example, '15:15:43 PDT 03-21-2018'. */
  askTime: string;
  /** Average volume value corresponding to the symbol. */
  averageVolume: number;
  /** A measure of a stock's volatility relative to the primary market index. */
  beta: number;
  /** Current bid price for a security. */
  bid: number;
  /** Code for the exchange reporting the bid price. */
  bidExchange: string;
  /** Number of shares or contracts offered at the bid price. */
  bidSize: number;
  /** Time of the bid; for example '15:15:43 PDT 03-21-2018'. */
  bidTime: string;
  /** The cash deliverables in case of multiple deliverables. */
  cashDeliverable: number;
  /** Dollar change of the last price from the previous close. */
  changeClose: number;
  /** Percentage change of the last price from the previous close. */
  changeClosePercentage: number;
  /** Name of the company or mutual fund (shows up to 40 characters). */
  companyName: string;
  /** The contract size of the option. */
  contractSize: number;
  /** Number of days before the option expires. */
  daysToExpiration: number;
  /** The declared dividend. */
  declaredDividend: number;
  /** Direction of movement; that is, whether the current price is higher or lower than the price of the most recent trade. */
  dirLast: string;
  /** Cash amount per share of the latest dividend. */
  dividend: number;
  /** The dividend payable date. */
  dividendPayableDate: number;
  /** QuoteDetails when market is in extended hours; appears only for after-hours market and when detailFlag is ALL or all. */
  ehQuote: IExtendedHourQuoteDetail;
  /** Earnings per share on rolling basis (stocks only). */
  eps: number;
  /** Projected Earnings per share for the next fiscal year (stocks only). */
  estEarnings: number;
  /** Date (in Epoch time) on which shareholders were entitled to receive the latest dividend. */
  exDividendDate: number;
  /** The expiration date of the option. */
  expirationDate: number;
  /** Highest price at which a security has traded during the current day. */
  high: number;
  /** Highest price at which a security has traded during the past year (52 weeks). For options, this value is the lifetime high. */
  high52: number;
  /** The intrinsic value of the share. */
  intrinsicValue: number;
  /** Price of the most recent trade of a security. */
  lastTrade: number;
  /** Lowest price at which a security has traded during the current day. */
  low: number;
  /** Lowest price at which security has traded during the past year (52 weeks). For options, this value is the lifetime low. */
  low52: number;
  /** The value market capitalization. */
  marketCap: number;
  /** If requireEarningsDate is true, the next earning date value in mm/dd/yyyy format. */
  nextEarningDate: string;
  /** Price of a security at the current day's market open. */
  open: number;
  /** Total number of options or futures contracts that are not closed or delivered on a particular day. */
  openInterest: number;
  /** List of mulitple deliverables. */
  optionDeliverableList: IOptionDeliverable[];
  /** The option multiplier value. */
  optionMultiplier: number;
  /** The option previous ask price. */
  optionPreviousAskPrice: number;
  /** The option previous bid price. */
  optionPreviousBidPrice: number;
  /** Specifies how the contract treats the expiration date. Possible values are "European" (options can be exercised only on the expiration date) or "American" (options can be exercised any time before they expire). */
  optionStyle: string;
  /** Symbol for the underlier (options only). */
  optionUnderlier: string;
  /** Exchange code for option underlier symbol; applicable only for options. */
  optionUnderlierExchange: string;
  /** The Options Symbology Initiative (OSI) representation of the option symbol. */
  osiKey: string;
  /** The option multiplier. */
  pe: number;
  /** Official price at the close of the previous trading day. */
  previousClose: number;
  /** Final volume from the previous market session. */
  previousDayVolume: number;
  /** Exchange code of the primary listing exchange for this instrument. */
  primaryExchange: string;
  /** The number of outstanding shares. */
  sharesOutstanding: number;
  /** Description of the security; for example, the company name or the option description. */
  symbolDescription: string;
  /** The time when the last trade was placed. */
  timeOfLastTrade: number;
  /** The value of the time premium. */
  timePremium: number;
  /** Total number of shares or contracts exchanging hands. */
  totalVolume: number;
  /** Uniform Practice Code identifies specific FINRA advisories detailing unusual circumstances; for example, extremely large dividends, when-issued settlement dates, and worthless securities. */
  upc: number;
  /** The date at which the price was highest in the last 52 weeks; applicable for stocks and mutual funds. */
  week52HiDate: number;
  /** The date at which the price was the lowest in the last 52 weeks; applicable for stocks and mutual funds. */
  week52LowDate: number;
  /** The dividend yield. */
  yield: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definitions/Data|Data Docs}
 */
export interface IData {
  /** The text description of the security. */
  description: string;
  /** The market symbol for the security. */
  symbol: string;
  /** The symbol type. */
  type: string;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definitions/ExpirationDate|ExpirationDate Docs}
 */
export interface IExpirationDate {
  /** The day (1-31) the option will expire. */
  day: number;
  /** Expiration type of the option. */
  expiryType: ExpiryType;
  /** The month (1-12) the option will expire. */
  month: number;
  /** The four-digit year the option will expire. */
  year: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/ExtendedHourQuoteDetail|ExtendedHourQuoteDetail Docs}
 */
export interface IExtendedHourQuoteDetail {
  /** The ask price of the symbol. */
  ask: number;
  /** The number of shares or contracts offered by a broker or dealer at the ask price. */
  askSize: number;
  /** The bid price of the symbol. */
  bid: number;
  /** The number of shares or contracts offered by a broker or dealer at the bid price. */
  bidSize: number;
  /** The dollar value of the difference between the previous and the present executed price. */
  change: number;
  /** The price of the most recent trade of a security. */
  lastPrice: number;
  /** The percentage value of difference between the previous and the present executed price. */
  percentChange: number;
  /** The status of the quote, either delayed or real time. */
  quoteStatus: string;
  /** The time when the last trade was carried out for the symbol. */
  timeOfLastTrade: number;
  /** The time zone corresponding to the timestamp provided in the quote response. */
  timeZone: string;
  /** The number of shares or contracts. */
  volume: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/FundamentalQuoteDetails|FundamentalQuoteDetails Docs}
 */
export interface IFundamentalQuoteDetails {
  /** The name of the company associated with the equity, option, or index. */
  companyName: string;
  /** The earnings per share on a rolling basis (Applies to stocks only). */
  eps: number;
  /** The estimated earnings. */
  estEarnings: number;
  /** The highest price at which a security has traded during the past year (52 weeks). For options, this value is the lifetime high. */
  high52: number;
  /** The most recent trade price for a security. */
  lastTrade: number;
  /** The lowest price at which a security has traded during the past year (52 weeks). For options, this value is the lifetime low. */
  low52: number;
  /** A description of the security, such as company name or option description. */
  symbolDescription: string;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/IntradayQuoteDetails|IntradayQuoteDetails Docs}
 */
export interface IIntradayQuoteDetails {
  /** The current ask price for a security. */
  ask: number;
  /** The current bid price for a security. */
  bid: number;
  /** The dollar change of the last price from the previous close. */
  changeClose: number;
  /** The percentage change of the last price from the previous close. */
  changeClosePercentage: number;
  /** The name of the company associated with the equity, option, or index. */
  companyName: string;
  /** The highest price at which a security has traded during the current day. */
  high: number;
  /** The price of the last trade. */
  lastTrade: number;
  /** The lowest price at which a security has traded during the current day. */
  low: number;
  /** Total number of shares or contracts exchanging hands. */
  totalVolume: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/MutualFund|MutualFund Docs}
 */
export interface IMutualFund {
  /** The annual marketing or distribution fee on the mutual fund. */
  actual12B1Fee: number;
  /** The annual total return. */
  annualTotalReturn: number;
  /** An indicator to inform if the mutual fund is available for new buy and sell orders. */
  availability: string;
  /** The average annual return for ten years. */
  averageAnnualReturn10Yr: number;
  /** The average annual return for one year. */
  averageAnnualReturn1Yr: number;
  /** The average annual return for three years. */
  averageAnnualReturn3Yr: number;
  /** The average annual return for five years. */
  averageAnnualReturn5Yr: number;
  /** The average annual return at the end of the quarter; this is available if fund has been active for more than 10 years. */
  averageAnnualReturns: number;
  /** The dollar change of the last price from the previous close. */
  changeClose: number;
  /** The percentage change of the last price from the previous close. */
  changeClosePercentage: number;
  /** The identifier for the security. */
  cusip: string;
  /** The deferred sales charge. */
  deferredSalesCharges: ISaleChargeValues[];
  /** The redemption fee applicable for the security transaction. */
  earlyRedemptionFee: string;
  /** The E*TRADE early redemption fee. */
  etradeEarlyRedemptionFee: string;
  /** The code of the exchange. */
  exchangeCode: string;
  /** The exchange name of the fund. */
  exchangeName: string;
  /** The front-end sales charge. */
  frontEndSalesCharges: ISaleChargeValues[];
  /** The type of fund family the mutual fund belongs to. */
  fundFamily: string;
  /** The date when the fund started. */
  fundInceptionDate: number;
  /** The name of the mutual fund. */
  fundName: string;
  /** The fund's total annual operating expense ratio gross of any fee waivers or expense reimbursements. */
  grossExpenseRatio: number;
  /** The highest price at which a security has traded during the past year. */
  high52: number;
  /** The minimum initial investment required to purchase the fund. */
  initialInvestment: number;
  /** The initial amount needed to purchase mutual fund shares in an IRA account. */
  initialIraInvestment: number;
  /** The price of the most recent trade of the security. */
  lastTrade: number;
  /** The lowest price at which a security has traded during the past year. */
  low52: number;
  /** The maximum sales charge. */
  maxSalesLoad: number;
  /** The ten-year monthly trailing return value. */
  monthlyTrailingReturn10Y: number;
  /** The one-month monthly trailing return value. */
  monthlyTrailingReturn1M: number;
  /** The one-year monthly trailing return value. */
  monthlyTrailingReturn1Y: number;
  /** The three-month monthly trailing return value. */
  monthlyTrailingReturn3M: number;
  /** The three-year monthly trailing return value. */
  monthlyTrailingReturn3Y: number;
  /** The five-year monthly trailing return value. */
  monthlyTrailingReturn5Y: number;
  /** The six-month monthly trailing return value. */
  monthlyTrailingReturn6M: number;
  /** The year-to-date monthly trailing return value. */
  monthlyTrailingReturnYTD: number;
  /** The Morningstar category for the fund. */
  morningStarCategory: string;
  /** The Total Net Asset Value (NAV). */
  netAssets: INetAsset;
  /** The Net Access Value (NAV) is the fund's per share market value; that is, the bid price investors pay to purchase fund shares. */
  netAssetValue: number;
  /** The expense ratio of the fund after application of expense waivers and reimbursements. */
  netExpenseRatio: number;
  /** The cut-off time for the purchase and redemption of mutual fund shares. */
  orderCutoffTime: number;
  /** The start date the performance is measured from. */
  performanceAsOfDate: string;
  /** The official price at the close of the previous trading day. */
  previousClose: number;
  /** The Public Offering Price (POP) is the price at which shares are sold to public; for funds without sales commission (that is, load), POP is equal to NAV. */
  publicOfferPrice: number;
  /** The start date of the quarter that the performance is measured from. */
  qtrlyPerformanceAsOfDate: string;
  /** The one-month quarterly trailing return value. */
  qtrlyTrailingReturn1M: number;
  /** The three-month quarterly trailing return value. */
  qtrlyTrailingReturn3M: number;
  /** The six-month quarterly trailing return value. */
  qtrlyTrailingReturn6M: number;
  /** The year-to-date quarterly trailing return value. */
  qtrlyTrailingReturnYTD: number;
  /** The quarterly average value of the fund since the beginning of fund. */
  quarterlySinceInception: number;
  /** The mutual fund shares redemption properties. */
  redemption: IRedemption;
  /** The sales charge for the purchase and redemption of mutual fund shares. */
  salesCharge: number;
  /** The seven-day current yield. */
  sevenDayCurrentYield: number;
  /** The value of the fund since its beginning. */
  sinceInception: number;
  /** The minimum subsequent investment amount. */
  subsequentInvestment: number;
  /** The minimum amount needed to purchase subsequent mutual fund shares in an IRA account. */
  subsequentIraInvestment: number;
  /** The description of the security; for example, company name. */
  symbolDescription: string;
  /** The time the last trade was placed. */
  timeOfLastTrade: number;
  /** An indicator (yes or no) whether or not there is a fee applicable for the security transaction. */
  transactionFee: string;
  /** The date when the price was the highest in the last 52 weeks. */
  week52HiDate: number;
  /** The date when the price was the lowest in the last 52 weeks. */
  week52LowDate: number;
  /** The weighted average of maturity. */
  weightedAverageMaturity: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/NetAsset|NetAsset Docs}
 */
export interface INetAsset {
  /** The net asset as of date. */
  asOfDate: number;
  /** The value of the net asset. */
  value: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definitions/OptionChainPair|OptionChainPair Docs}
 */
export interface IOptionChainPair {
  /** The option call in the option chain pair. */
  optioncall: IOptionDetails;
  /** The option put in the option chain pair. */
  optionPut: IOptionDetails;
  /** Determines whether the response will contain calls(CALLONLY), puts(PUTONLY), or both(CALLPUT). */
  pairType: string;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/OptionDeliverable|OptionDeliverable Docs}
 */
export interface IOptionDeliverable {
  /** Number of CIL shares to be delivered. */
  deliverableCILShares: number;
  /** Exchange code of share to be delivered. */
  deliverableExchangeCode: string;
  /** Strike percent of delivered product. */
  deliverableStrikePercent: number;
  /** Symbol of share to be delivered. */
  deliverableSymbol: string;
  /** Type code of share to be delivered. */
  deliverableTypeCode: string;
  /** Number of whole shares to be distributed. */
  deliverableWholeShares: number;
  /** Root symbol of option multiplier. */
  rootSymbol: string;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definitions/OptionDetails|OptionDetails Docs}
 */
export interface IOptionDetails {
  /** Indicator signifying whether option is adjusted. */
  adjustedFlag: boolean;
  /** The ask. */
  ask: number;
  /** The ask size. */
  askSize: number;
  /** The bid. */
  bid: number;
  /** The bid size. */
  bidSize: number;
  /** The display symbol. */
  displaySymbol: string;
  /** The "in the money" value; a put option is "in the money" when the strike price of the put is above the current market price of the stock. */
  inTheMoney: string;
  /** The last price. */
  lastPrice: number;
  /** The net change value. */
  netChange: number;
  /** The open interest value. */
  openInterest: number;
  /** The option category. */
  optionCategory: OptionCategory;
  /** The Greeks on the option; Greeks are a collection of statistical values that measure the risk involved in an options contract in relation to certain underlying variables. */
  optionGreek: IOptionGreeks;
  /** The root or underlying symbol of the option. */
  optionRootSymbol: string;
  /** The option type. */
  optionType: string;
  /** The Options Symbology Initiative (OSI) key containing the option root symbol, expiration date, call/put indicator, and strike price. */
  osiKey: string;
  /** The option quote detail. */
  quoteDetail: string;
  /** The agreed strike price for the option as stated in the contract. */
  strikePrice: number;
  /** The market symbol for the option. */
  symbol: string;
  /** The timestamp of the option. */
  timeStamp: number;
  /** The option volume. */
  volume: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definitions/OptionGreeks|OptionGreeks Docs}
 */
export interface IOptionGreeks {
  /** The current value. */
  currentValue: boolean;
  /** The delta value. */
  delta: number;
  /** The gamma value. */
  gamma: number;
  /** The Implied Volatility (IV). */
  iv: number;
  /** The rho value. */
  rho: number;
  /** The theta value. */
  theta: number;
  /** The vega value. */
  vega: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/OptionQuoteDetails|OptionQuoteDetails Docs}
 */
export interface IOptionQuoteDetails {
  /** The current ask price for a security. */
  ask: number;
  /** The number of shares or contracts offered by a broker/dealer at the ask price. */
  askSize: number;
  /** The current bid price for a security. */
  bid: number;
  /** The number of shares or contracts offered at the bid price. */
  bidSize: number;
  /** The name of the company associated with the equity, option, or index. */
  companyName: string;
  /** The contract size of the option. */
  contractSize: number;
  /** Number of days before the option expires. */
  daysToExpiration: number;
  /** The intrinsic value of the share. */
  intrinsicValue: number;
  /** The price of the most recent trade in a security. */
  lastTrade: number;
  /** The total number of options or futures contracts that are not closed or delivered on a particular day. */
  openInterest: number;
  /** The Greek values for the option. */
  optionGreeks: IOptionGreeks;
  /** The value of the option multiplier. */
  optionMultiplier: number;
  /** The previous ask price for the option. */
  optionPreviousAskPrice: number;
  /** The previous bid price for the option. */
  optionPreviousBidPrice: number;
  /** The Options Symbology Initiative (OSI) representation of the option symbol. */
  osiKey: string;
  /** The description of the security; for example, company name or option description. */
  symbolDescription: string;
  /** The value of the time premium. */
  timePremium: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/QuoteData|QuoteData Docs}
 */
export interface IQuoteData {
  /** Indicates whether the quote details are being displayed after hours or not. */
  ahFlag: string;
  /** The quote details to be displayed. This field depends on the detailFlag input parameter. For example, if detailFlag is ALL, AllQuoteDetails are displayed. If detailFlag is MF_DETAIL, the MutualFund structure gets displayed. */
  all: IAllQuoteDetails;
  /** The date and time of the quote. */
  dateTime: string;
  /** The date and time of the quote in Coordinated Universal Time (UTC). */
  dateTimeUTC: number;
  /** Indicates whether the daylight savings flag is set. This field is displayed only when detailFlag is MF_DETAIL. */
  dstFlag: boolean;
  /** The Quote API will not populate any value for an invalid symbol. When an invalid symbol is requested, the API returns the Messages structure as part of QuoteResponse instead of using the errorMessage string in QuoteData. For this reason, Quote API clients should refer to Messages in the QuoteResponse. */
  errorMessage: string;
  /** The quote details to be displayed. This field depends on the detailFlag input parameter. For example, if detailFlag is ALL, AllQuoteDetails are displayed. If detailFlag is MF_DETAIL, the MutualFund structure gets displayed. */
  fundamental: IFundamentalQuoteDetails;
  /** Optional field. Value is true if mini options exist for the symbol; otherwise, value is false. This field will only be populated when the symbol is an equity or an index and the skipMiniOptionsCheck parameter is set to false or not provided in the request. */
  hasMiniOptions?: boolean;
  /** The quote details to be displayed. This field depends on the detailFlag input parameter. For example, if detailFlag is ALL, AllQuoteDetails are displayed. If detailFlag is MF_DETAIL, the MutualFund structure gets displayed. */
  intraday: IIntradayQuoteDetails;
  /** The quote details to be displayed. This field depends on the detailFlag input parameter. For example, if detailFlag is ALL, AllQuoteDetails are displayed. If detailFlag is MF_DETAIL, the MutualFund structure gets displayed. */
  mutualFund: IMutualFund;
  /** The quote details to be displayed. This field depends on the detailFlag input parameter. For example, if detailFlag is ALL, AllQuoteDetails are displayed. If detailFlag is MF_DETAIL, the MutualFund structure gets displayed. */
  option: IOptionQuoteDetails;
  /** The product details for the symbol the quote has been requested for. */
  product: IProduct;
  /** The status of the quote; possible values are: REALTIME, DELAYED, CLOSING, EH_REALTIME, EH_BEFORE_OPEN, or EH_CLOSED. */
  quoteStatus: QuoteStatus;
  /** Indicates whether the time zone is set. This field is displayed only when detailFlag is MF_DETAIL. */
  timeZone: string;
  /** The quote details to be displayed. This field depends on the detailFlag input parameter. For example, if detailFlag is ALL, AllQuoteDetails are displayed. If detailFlag is MF_DETAIL, the MutualFund structure gets displayed. */
  week52: IWeek52QuoteDetails;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/Redemption|Redemption Docs}
 */
export interface IRedemption {
  /** Fee percent charged to user by fund for redemption of mutual fund shares. */
  feePercent: string;
  /** Potential values are low, high, and percent.Low denotes the lower timeline for the particular period of the fund.High denotes the higher timeline for the particular period of the fund.Percent denotes the percent that will be charged between the lower and higher timeline for that particular period. */
  frontEndValues: IValues[];
  /** If the value is '1' it indicated that the fund is front end load. */
  isFrontEnd: string;
  /** This value indicates whether the fund is back end load function. */
  isSales: string;
  /** The minimum month for redemption of mutual fund shares. */
  minMonth: string;
  /** If the value is 4, time line is represented in years.If the value is 3, time line is represented in months.If the value is 10, time line is represented in days. */
  redemptionDurationType: string;
  /** If the value is 4, time line is represented in years. If the value is 3, time line is represented in months. If the value is 10, time line is represented in days. */
  salesDurationType: string;
  /** Potential values are low, high, and percent.Low denotes the lower timeline for the particular period of the fund.High denotes the higher timeline for the particular period of the fund.Percent denotes the percent that will be charged between the lower and higher timeline for that particular period. */
  salesValues: IValues[];
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/SaleChargeValues|SaleChargeValues Docs}
 */
export interface ISaleChargeValues {
  /** The sales charge for investing in the mutual fund expressed as a low-high range (usually the sales charge is between 3-6%). */
  lowhigh: string;
  /** The percentage of the investment spent on the sales charge. */
  percent: string;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definitions/SelectedED|SelectedED Docs}
 */
export interface ISelectedED {
  /** The selected day. */
  day: number;
  /** The selected month. */
  month: number;
  /** The selected year. */
  year: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/Values|Values Docs}
 */
export interface IValues {
  /** The maximum investment level at which the discount becomes available. */
  high: string;
  /** When the dollar amount of mutual fund purchases reaches a specified level, the sales load decreases. This field stores the minimum investment level at which the discount becomes available. */
  low: string;
  /** The sales load percentage for amounts between the low and high values. */
  percent: string;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/Week52QuoteDetails|Week52QuoteDetails Docs}
 */
export interface IWeek52QuoteDetails {
  /** The name of the company associated with the equity, option, or index. */
  companyName: string;
  /** The highest price at which a security has traded during the past year (52 weeks). For options, this value is the lifetime high. */
  high52: number;
  /** The price of the most recent trade in a security. */
  lastTrade: number;
  /** The lowest price at which a security has traded during the past year (52 weeks). For options, this value is the lifetime low. */
  low52: number;
  /** The performance value for the past 12 months. */
  perf12Months: number;
  /** The official price at the close on the previous trading day. */
  previousClose: number;
  /** A description of the security; for example, company name or option description. */
  symbolDescription: string;
  /** Total number of shares or contracts exchanging hands. */
  totalVolume: number;
}
