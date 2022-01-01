/**
 * @file GetOptionChains tests.
 */
import {ChainType, OptionCategory, PriceType} from '../../src/market/enums';
import {testApi} from '../__utils__/test.api';
import {GetOptionChains as TestFn} from '../../src/market/GetOptionChains';
import fixture from '../__fixtures__/market/GetOptionChains.json';

/* eslint-disable max-len */

describe('GetOptionChains', () => testApi({fixture, fn: TestFn, tests: [
  {
    args: {
      chainType: ChainType.CALLPUT,
      expiryDay: 4,
      expiryMonth: 11,
      expiryYear: 2022,
      includeWeekly: false,
      noOfStrikes: 3,
      optionCategory: OptionCategory.MINI,
      priceType: PriceType.ATNM,
      skipAdjusted: true,
      strikePriceNear: 666.0,
      symbol: 'ADBE'
    },
    path: '/market/optionchains.json?chainType=CALLPUT&expiryDay=4&expiryMonth=11&expiryYear=2022&includeWeekly=false&noOfStrikes=3&optionCategory=MINI&priceType=ATNM&skipAdjusted=true&strikePriceNear=666&symbol=ADBE',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {symbol: 'ADBE'},
    path: '/market/optionchains.json?symbol=ADBE',
    title: 'calls correct endpoint with required arguments'
  },
  {
    args: {symbol: 'ADBE'},
    error: 'some error',
    path: '/market/optionchains.json?symbol=ADBE',
    title: 'throws if invalid data'
  }
]}));
