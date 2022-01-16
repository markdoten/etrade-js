/**
 * @file ListAccounts tests.
 */
import {testApi} from '@test/__utils__/test.api';
import fixture from '@test/__fixtures__/accounts/ListAccounts.json';
import ListAccounts from '@src/accounts/ListAccounts';

/* eslint-disable max-len */

describe('ListAccounts', () => testApi({fixture, fn: ListAccounts, tests: [
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
