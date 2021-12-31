/**
 * @file ViewPortfolio tests.
 */
import {MarketSession, SortOrder} from '../../src/enums';
import {SortBy, View} from '../../src/accounts/enums';
import {testApi} from '../__utils__/test.api';
import {ViewPortfolio as TestFn} from '../../src/accounts/ViewPortfolio';
import fixture from '../__fixtures__/accounts/ViewPortfolio.json';

/* eslint-disable max-len */

describe('ViewPortfolio', () => testApi({fixture, fn: TestFn, method: 'GET', tests: [
  {
    args: {
      accountIdKey: 'key',
      count: 20,
      lotsRequired: true,
      marketSession: MarketSession.EXTENDED,
      sortBy: SortBy.SYMBOL,
      sortOrder: SortOrder.ASC,
      totalsRequired: true,
      view: View.COMPLETE
    },
    path: '/accounts/key/portfolio.json?count=20&lotsRequired=true&marketSession=EXTENDED&sortBy=SYMBOL&sortOrder=ASC&totalsRequired=true&view=COMPLETE',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key'},
    path: '/accounts/key/portfolio.json?lotsRequired=false&marketSession=REGULAR&sortOrder=DESC&totalsRequired=false&view=QUICK',
    title: 'calls correct endpoint with no query params'
  },
  {
    args: {accountIdKey: 'key'},
    error: 'some error',
    path: '/accounts/key/portfolio.json',
    title: 'throws if invalid data'
  }
]}));
