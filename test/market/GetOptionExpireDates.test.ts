/**
 * @file GetOptionExpireDates tests.
 */
import {ExpiryType} from '../../src/market/enums';
import {testApi} from '../__utils__/test.api';
import {GetOptionExpireDates as TestFn} from '../../src/market/GetOptionExpireDates';
import fixture from '../__fixtures__/market/GetOptionExpireDates.json';

/* eslint-disable max-len */

describe('GetOptionExpireDates', () => testApi({fixture, fn: TestFn, tests: [
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
