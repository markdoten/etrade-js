/**
 * @file Get Option Chains.
 */
import session from '@src/session';
import type {ChainType, OptionCategory, PriceType} from '@src/market/enums';
import type {IFetchResponse} from '@src/interfaces';
import type {IOptionChainPair, ISelectedED} from '@src/market/interfaces';

/* eslint-disable max-len */

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

/**
 * Returns a list of option chains for a specific underlying instrument.
 * @async
 * @param {IGetOptionChainsRequest} query - The request object.
 * @returns {Promise<IGetOptionChainsResponse>} - List of option chains for a specific underlying instrument.
 */
export default (query: IGetOptionChainsRequest): Promise<IGetOptionChainsResponse> =>
  session.request<IGetOptionChainsResponse>({
    path: '/market/optionchains',
    query
  });
