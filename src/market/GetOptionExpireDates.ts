/**
 * @file Get Option Expire Dates.
 */
import session from '@src/session';
import type {ExpiryType} from '@src/market/enums';
import type {IExpirationDate} from '@src/market/interfaces';
import type {IFetchResponse} from '@src/interfaces';

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
 * @param {IGetOptionExpireDatesRequest} query - The request query object.
 * @returns {Promise<IGetOptionExpireDatesResponse>} - List of dates suitable for structuring an option table display.
 */
export default (query: IGetOptionExpireDatesRequest): Promise<IGetOptionExpireDatesResponse> =>
  session.request<IGetOptionExpireDatesResponse>({
    path: '/market/optionexpiredate',
    query
  });
