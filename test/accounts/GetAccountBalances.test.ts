/**
 * @file GetAccountBalances tests.
 */
import {AccountType} from '../../src/accounts/enums';
import {testApi} from '../__utils__/test.api';
import {GetAccountBalances as TestFn} from '../../src/accounts/GetAccountBalances';
import fixture from '../__fixtures__/accounts/GetAccountBalances.json';

describe('GetAccountBalances', () => testApi({fixture, fn: TestFn, method: 'GET', tests: [
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
