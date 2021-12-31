/**
 * @file ListTransactions tests.
 */
import {testApi} from '../__utils__/test.api';
import {ListTransactions as TestFn} from '../../src/accounts/ListTransactions';
import fixture from '../__fixtures__/accounts/ListTransactions.json';

/* eslint-disable max-len */

describe('ListTransactions', () => testApi({fixture, fn: TestFn, method: 'GET', tests: [
  {
    args: {
      accountIdKey: 'key',
      count: 20,
      endDate: '2020-01-01',
      marker: 'marker',
      sortOrder: 'DESC',
      startDate: '2020-01-02'
    },
    path: '/accounts/key/transactions.json?count=20&endDate=2020-01-01&marker=marker&sortOrder=DESC&startDate=2020-01-02',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key'},
    path: '/accounts/key/transactions.json',
    title: 'calls correct endpoint with no query params'
  },
  {
    args: {accountIdKey: 'key'},
    error: 'some error',
    path: '/accounts/key/transactions.json',
    title: 'throws if invalid data'
  }
]}));
