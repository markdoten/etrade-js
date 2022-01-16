/**
 * @file RevokeAccessToken tests.
 */
import {testApi} from '@test/__utils__/test.api';
import fixture from '@test/__fixtures__/auth/RevokeAccessToken.json';
import RevokeAccessToken from '@src/auth/RevokeAccessToken';

/* eslint-disable max-len */

describe('RevokeAccessToken', () => testApi({
  contentType: null,
  fixture,
  fn: RevokeAccessToken,
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
