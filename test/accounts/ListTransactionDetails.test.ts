/**
 * @file ListTransactionDetails tests.
 */
import {testApi} from '../__utils__/test.api';
import {ListTransactionDetails as TestFn} from '../../src/accounts/ListTransactionDetails';
import fixture from '../__fixtures__/accounts/ListTransactionDetails.json';

describe('ListTransactionDetails', () => testApi({fixture, fn: TestFn, method: 'GET', tests: [
  {
    args: {accountIdKey: 'key', storeId: 'storeId', transactionId: 'tranId'},
    path: '/accounts/key/transactions/tranId.json?storeId=storeId',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key', transactionId: 'tranId'},
    path: '/accounts/key/transactions/tranId.json',
    title: `doesn't include storeId as query param if not provided`
  },
  {
    args: {accountIdKey: 'key', transactionId: 'tranId'},
    error: 'some error',
    path: '/accounts/key/transactions/tranId.json',
    title: 'throws if invalid data'
  }
]}));
