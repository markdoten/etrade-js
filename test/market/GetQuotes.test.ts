/**
 * @file GetQuotes tests.
 */
import {DetailFlag} from '@src/market/enums';
import {testApi} from '@test/__utils__/test.api';
import fixture from '@test/__fixtures__/market/GetQuotes.json';
import GetQuotes from '@src/market/GetQuotes';

/* eslint-disable max-len */

describe('GetQuotes', () => testApi({fixture, fn: GetQuotes, tests: [
  {
    args: {
      detailFlag: DetailFlag.INTRADAY,
      overrideSymbolCount: 10,
      requireEarningsDate: true,
      skipMiniOptionsCheck: false,
      symbols: ['ADBE', 'MSFT']
    },
    path: '/market/quote/ADBE,MSFT.json?detailFlag=INTRADAY&overrideSymbolCount=10&requireEarningsDate=true&skipMiniOptionsCheck=false',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {symbols: ['ADBE', 'MSFT']},
    path: '/market/quote/ADBE,MSFT.json',
    title: 'calls correct endpoint with required arguments'
  },
  {
    args: {symbols: ['ADBE', 'MSFT']},
    error: 'some error',
    path: '/market/quote/ADBE,MSFT.json',
    title: 'throws if invalid data'
  }
]}));
