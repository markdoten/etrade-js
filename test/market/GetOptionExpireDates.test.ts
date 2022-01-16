/**
 * @file GetOptionExpireDates tests.
 */
import {ExpiryType} from '../../src/market/enums';
import {testApi} from '../__utils__/test.api';
import fixture from '../__fixtures__/market/GetOptionExpireDates.json';
import GetOptionExpireDates from '../../src/market/GetOptionExpireDates';

/* eslint-disable max-len */

describe('GetOptionExpireDates', () => testApi({fixture, fn: GetOptionExpireDates, tests: [
  {
    args: {expiryType: ExpiryType.DAILY, symbol: 'ADBE'},
    path: '/market/optionexpiredate.json?expiryType=DAILY&symbol=ADBE',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {symbol: 'ADBE'},
    error: 'some error',
    path: '/market/optionexpiredate.json?symbol=ADBE',
    title: 'throws if invalid data'
  }
]}));
