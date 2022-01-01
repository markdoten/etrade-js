/**
 * @file PreviewOrder tests.
 */
import {OrderType} from '../../src/order/enums';
import {testApi} from '../__utils__/test.api';
import {PreviewOrder as TestFn} from '../../src/order/PreviewOrder';
import fixture from '../__fixtures__/order/PreviewOrder.json';

/* eslint-disable max-len */

const testBody = {
  clientOrderId: 'order-id',
  order: [{}],
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
