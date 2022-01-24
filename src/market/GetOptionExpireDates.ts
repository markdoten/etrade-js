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

export interface IGetOptionExpireDatesResponse extends IFetchResponse {
  /** The expiration dates for the options. */
  expirationDates: IExpirationDate[];
}

/**
 * Returns a list of dates suitable for structuring an option table display.
 * @async
 * @param query - The request query object.
 * @returns {Promise<IGetOptionExpireDatesResponse>} - List of dates suitable for structuring an option table display.
 */
export default (query: IGetOptionExpireDatesRequest): Promise<IGetOptionExpireDatesResponse> =>
  session.request<IGetOptionExpireDatesResponse>({
    path: '/market/optionexpiredate',
    query
  });
