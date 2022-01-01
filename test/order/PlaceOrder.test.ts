/**
 * @file PlaceOrder tests.
 */
import {CashMargin, OrderType} from '../../src/order/enums';
import {testApi} from '../__utils__/test.api';
import {PlaceOrder as TestFn} from '../../src/order/PlaceOrder';
import fixture from '../__fixtures__/order/PlaceOrder.json';

/* eslint-disable max-len */

const testBody = {
  clientOrderId: 'order-id',
  order: [{}],
  orderType: OrderType.EQ,
  previewIds: [{
    cashMargin: CashMargin.CASH,
    previewId: 'preview-id'
  }]
};

describe('PlaceOrder', () => testApi({fixture, fn: TestFn, method: 'POST', tests: [
  {
    args: {accountIdKey: 'key', ...testBody},
    body: {PlaceOrderRequest: testBody},
    path: '/accounts/key/orders/place.json',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key', ...testBody},
    error: 'some error',
    path: '/accounts/key/orders/place.json',
    title: 'throws if invalid data'
  }
]}));
