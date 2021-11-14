/**
 * @file Get Option Expire Dates.
 */
import {fetchWithAuth} from '../session';
import type {IExpirationDate} from './interface';

/* eslint-disable max-len */

export interface IGetOptionExpireDatesRequest {
  /** Expiration type of the option. */
  expiryType?: string;
  /** The symbol in the request. */
  symbol: string;
}

export interface IGetOptionExpireDatesResponse {
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
  fetchWithAuth<IGetOptionExpireDatesResponse>({path: '/market/optionexpiredate', query});
