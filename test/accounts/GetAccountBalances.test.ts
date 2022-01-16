/**
 * @file GetAccountBalances tests.
 */
import {AccountType} from '@src/accounts/enums';
import {testApi} from '@test/__utils__/test.api';
import fixture from '@test/__fixtures__/accounts/GetAccountBalances.json';
import GetAccountBalances from '@src/accounts/GetAccountBalances';

/* eslint-disable max-len */

describe('GetAccountBalances', () => testApi({fixture, fn: GetAccountBalances, tests: [
  {
    args: {accountIdKey: 'key', accountType: AccountType.MARGIN, realTimeNAV: true},
    path: '/accounts/key/balance.json?accountType=MARGIN&instType=BROKERAGE&realTimeNAV=true',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key', accountType: AccountType.MARGIN},
    path: '/accounts/key/balance.json?accountType=MARGIN&instType=BROKERAGE&realTimeNAV=false',
    title: 'defaults param for realTimeNAV'
  },
  {
    args: {accountIdKey: 'key', accountType: AccountType.MARGIN},
    error: 'some error',
    path: '/accounts/key/balance.json?accountType=MARGIN&instType=BROKERAGE&realTimeNAV=false',
    title: 'throws if invalid data'
  }
]}));
