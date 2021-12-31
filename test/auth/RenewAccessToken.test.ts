/**
 * @file RenewAccessToken tests.
 */
import {testApi} from '../__utils__/test.api';
import {RenewAccessToken as TestFn} from '../../src/auth/RenewAccessToken';
import fixture from '../__fixtures__/auth/RenewAccessToken.json';

/* eslint-disable max-len */

describe('RenewAccessToken', () => testApi({
  contentType: null,
  fixture,
  fn: TestFn,
  includeVersion: false,
  method: 'GET',
  tests: [
    {
      args: undefined,
      path: '/oauth/renew_access_token',
      title: 'calls correct endpoint with all arguments'
    },
    {
      args: undefined,
      error: 'some error',
      path: '/oauth/renew_access_token',
      title: 'throws if invalid data'
    }
  ]
}));
