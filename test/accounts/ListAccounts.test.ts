/**
 * @file ListAccounts tests.
 */
import {testApi} from '../__utils__/test.api';
import {ListAccounts as TestFn} from '../../src/accounts/ListAccounts';
import fixture from '../__fixtures__/accounts/ListAccounts.json';

describe('ListAccounts', () => testApi({fixture, fn: TestFn, method: 'GET', tests: [
  {
    args: undefined,
    path: '/accounts/list.json',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: undefined,
    error: 'some error',
    path: '/accounts/list.json',
    title: 'throws if invalid data'
  }
]}));
