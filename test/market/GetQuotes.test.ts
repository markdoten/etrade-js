/**
 * @file GetQuotes tests.
 */
import {DetailFlag} from '../../src/market/enums';
import {testApi} from '../__utils__/test.api';
import {GetQuotes as TestFn} from '../../src/market/GetQuotes';
import fixture from '../__fixtures__/market/GetQuotes.json';

/* eslint-disable max-len */

describe('GetQuotes', () => testApi({fixture, fn: TestFn, tests: [
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
