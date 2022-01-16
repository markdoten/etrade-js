import type { ExpiryType } from '@src/market/enums';
import type { IExpirationDate } from '@src/market/interfaces';
import type { IFetchResponse } from '@src/interfaces';
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
declare const _default: (query: IGetOptionExpireDatesRequest) => Promise<IGetOptionExpireDatesResponse>;
/**
 * Returns a list of dates suitable for structuring an option table display.
 * @async
 * @param {IGetOptionExpireDatesRequest} query - The request query object.
 * @returns {Promise<IGetOptionExpireDatesResponse>} - List of dates suitable for structuring an option table display.
 */
export default _default;
