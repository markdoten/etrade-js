/**
 * @file View Portfolio.
 */
import session from '../session';
import type {DetailFlag} from './enums';
import type {IFetchResponse, IMessages} from '../interfaces';
import type {IQuoteData} from './interfaces';

/* eslint-disable max-len */

export interface IGetQuotesRequest {
  /** Determines the market fields returned from a quote request. */
  detailFlag?: DetailFlag;
  /** If value is true, then symbolList may contain a maximum of 50 symbols; otherwise, symbolList can only contain 25 symbols. */
  overrideSymbolCount?: number;
  /** If value is true, then nextEarningDate will be provided in the output. If value is false or if the field is not passed, nextEarningDate will be returned with no value. */
  requireEarningsDate?: boolean;
  /** If value is true, no call is made to the service to check whether the symbol has mini options. If value is false or if the field is not specified, a service call is made to check if the symbol has mini options. */
  skipMiniOptionsCheck?: boolean;
  /** One or more (comma-separated) symbols for equities or options, up to a maximum of 25. Symbols for equities are simple, for example, GOOG. Symbols for options are more complex, consisting of six elements separated by colons, in this format: underlier:year:month:day:optionType:strikePrice. */
  symbols: string[];
}

export interface IGetQuotesResponse extends IFetchResponse {
  /** The Quote response Message. */
  messages: IMessages;
  /** The Quote Message Data. */
  quoteData: IQuoteData[];
}

/**
 * Returns the portfolio information for a selected brokerage account.
 * @async
 * @param {IGetQuotesRequest} request - The request object.
 * @param {string[]} [request.symbols] - One or more (comma-separated) symbols for equities or options, up to a maximum of 25. Symbols for equities are simple, for example, GOOG. Symbols for options are more complex, consisting of six elements separated by colons, in this format: underlier:year:month:day:optionType:strikePrice.
 * @returns {Promise<IGetQuotesResponse>} - Portfolio information for a selected brokerage account.
 */
export default ({symbols, ...query}: IGetQuotesRequest): Promise<IGetQuotesResponse> =>
  session.request<IGetQuotesResponse>({
    path: `/market/quote/${symbols.join(',')}`,
    query
  });
