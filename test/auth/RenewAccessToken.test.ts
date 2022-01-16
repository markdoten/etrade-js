/**
 * @file RenewAccessToken tests.
 */
import {testApi} from '../__utils__/test.api';
import fixture from '../__fixtures__/auth/RenewAccessToken.json';
import RenewAccessToken from '../../src/auth/RenewAccessToken';

/* eslint-disable max-len */

describe('RenewAccessToken', () => testApi({
  contentType: null,
  fixture,
  fn: RenewAccessToken,
  includeVersion: false,
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
