/**
 * @file PreviewOrder tests.
 */
import {createOrder} from "../../src/order/utils/create";
import {OrderType} from '../../src/order/enums';
import {testApi} from '../__utils__/test.api';
import {PreviewOrder as TestFn} from '../../src/order/PreviewOrder';
import fixture from '../__fixtures__/order/PreviewOrder.json';

/* eslint-disable max-len */

const testBody = {
  clientOrderId: 'order-id',
  Order: [createOrder({accountId: '83710800', quantity: 10, symbol: 'ADBE'})],
  orderType: OrderType.EQ
};

describe('PreviewOrder', () => testApi({fixture, fn: TestFn, method: 'POST', tests: [
  {
    args: {accountIdKey: 'key', ...testBody},
    body: {PreviewOrderRequest: testBody},
    path: '/accounts/key/orders/preview.json',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key', ...testBody},
    error: 'some error',
    path: '/accounts/key/orders/preview.json',
    title: 'throws if invalid data'
  }
]}));
