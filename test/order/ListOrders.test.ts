/**
 * @file ListOrders tests.
 */
import {MarketSession, SecurityType} from '@src/enums';
import {OrderStatus, TransactionType} from '@src/order/enums';
import {testApi} from '@test/__utils__/test.api';
import fixture from '@test/__fixtures__/order/ListOrders.json';
import ListOrders from '@src/order/ListOrders';

/* eslint-disable max-len */

describe('ListOrders', () => testApi({fixture, fn: ListOrders, tests: [
  {
    args: {
      accountIdKey: 'key',
      count: 10,
      fromDate: '01012022',
      marker: 'marker',
      marketSession: MarketSession.REGULAR,
      securityType: SecurityType.BOND,
      status: OrderStatus.OPEN,
      symbol: ['ADBE', 'MSFT'],
      toDate: '02012022',
      transactionType: TransactionType.BUY
    },
    path: '/accounts/key/orders.json?count=10&fromDate=01012022&marker=marker&marketSession=REGULAR&securityType=BOND&status=OPEN&symbol=ADBE%2CMSFT&toDate=02012022&transactionType=BUY',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key'},
    path: '/accounts/key/orders.json',
    title: 'calls correct endpoint with required arguments'
  },
  {
    args: {accountIdKey: 'key'},
    error: 'some error',
    path: '/accounts/key/orders.json',
    title: 'throws if invalid data'
  }
]}));
