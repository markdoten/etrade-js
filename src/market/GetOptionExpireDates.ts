/**
 * @file Get Option Expire Dates.
 */
import session from '../session';
import type {ExpiryType} from './enums';
import type {IExpirationDate} from './interfaces';
import type {IFetchResponse} from '../interfaces';

/* eslint-disable max-len */

export interface IGetOptionExpireDatesRequest {
  /** Expiration type of the option. */
  expiryType?: ExpiryType;
  /** The symbol in the request. */
  symbol: string;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definitions/OptionExpireDateResponse|OptionExpireDateResponse Docs}
 */
export interface IGetOptionExpireDatesResponse extends IFetchResponse {
  /** The expiration dates for the options. */
  expirationDates: IExpirationDate[];
}

/**
 * Returns a list of dates suitable for structuring an option table display.
 * @async
 * @param query - The request query object.
 * @returns {Promise<IGetOptionExpireDatesResponse>} - List of dates suitable for structuring an option table display.
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definition/getOptionExpireDates|Get Option Expire Dates Docs}
 */
export default (query: IGetOptionExpireDatesRequest): Promise<IGetOptionExpireDatesResponse> =>
  session.request<IGetOptionExpireDatesResponse>({
    path: '/market/optionexpiredate',
    query
  });
