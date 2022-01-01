/**
 * @file RevokeAccessToken tests.
 */
import {testApi} from '../__utils__/test.api';
import {RevokeAccessToken as TestFn} from '../../src/auth/RevokeAccessToken';
import fixture from '../__fixtures__/auth/RevokeAccessToken.json';

/* eslint-disable max-len */

describe('RevokeAccessToken', () => testApi({
  contentType: null,
  fixture,
  fn: TestFn,
  includeVersion: false,
  tests: [
    {
      args: undefined,
      path: '/oauth/revoke_access_token',
      title: 'calls correct endpoint with all arguments'
    },
    {
      args: undefined,
      error: 'some error',
      path: '/oauth/revoke_access_token',
      title: 'throws if invalid data'
    }
  ]
}));
