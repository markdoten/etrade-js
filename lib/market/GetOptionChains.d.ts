import type { ChainType, OptionCategory, PriceType } from './enums';
import type { IFetchResponse } from '../interfaces';
import type { IOptionChainPair, ISelectedED } from './interfaces';
export interface IGetOptionChainsRequest {
    /** The type of option chain. Default: CALLPUT. */
    chainType?: ChainType;
    /** Indicates the expiry day corresponding to which the optionchain needs to be fetched. */
    expiryDay?: number;
    /** Indicates the expiry month corresponding to which the optionchain needs to be fetched. */
    expiryMonth?: number;
    /** Indicates the expiry year corresponding to which the optionchain needs to be fetched. */
    expiryYear?: number;
    /** The include weekly options request. Default: false. */
    includeWeekly?: boolean;
    /** Indicates number of strikes for which the optionchain needs to be fetched. */
    noOfStrikes?: number;
    /** The option category. Default: STANDARD. */
    optionCategory?: OptionCategory;
    /** The price type. Default: ATNM. */
    priceType?: PriceType;
    /** The skip adjusted request. Default: true. */
    skipAdjusted?: boolean;
    /** The optionchians fetched will have strike price nearer to this value. */
    strikePriceNear?: number;
    /** The market symbol for the instrument; for example, GOOG. */
    symbol: string;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definitions/OptionChainResponse|OptionChainResponse Docs}
 */
export interface IGetOptionChainsResponse extends IFetchResponse {
    /** The near price in the option chain. */
    nearPrice: number;
    /** Container for an option pair; each option pair in the response has a container. */
    optionPairs: IOptionChainPair[];
    /** The option chain response quote type. */
    quoteType: string;
    /** The selected option chain. */
    selected: ISelectedED;
    /** The option chain response timestamp. */
    timeStamp: number;
}
declare const _default: (query: IGetOptionChainsRequest) => Promise<IGetOptionChainsResponse>;
/**
 * Returns a list of option chains for a specific underlying instrument.
 * @async
 * @param query - The request object.
 * @returns {Promise<IGetOptionChainsResponse>} - List of option chains for a specific underlying instrument.
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definition/getOptionChains|Get Option Chains Docs}
 */
export default _default;
