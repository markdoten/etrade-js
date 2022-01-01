/**
 * @file PlaceChangedOrder tests.
 */
import {CashMargin, OrderType} from '../../src/order/enums';
import {testApi} from '../__utils__/test.api';
import {PlaceChangedOrder as TestFn} from '../../src/order/PlaceChangedOrder';
import fixture from '../__fixtures__/order/PlaceChangedOrder.json';

/* eslint-disable max-len */

const testBody = {
  clientOrderId: 'client-order-id',
  order: [{}],
  orderType: OrderType.EQ,
  previewIds: [{
    cashMargin: CashMargin.CASH,
    previewId: 'preview-id'
  }]
};

describe('PlaceChangedOrder', () => testApi({fixture, fn: TestFn, method: 'PUT', tests: [
  {
    args: {accountIdKey: 'key', orderId: 'order-id', ...testBody},
    body: {PlaceOrderRequest: testBody},
    path: '/accounts/key/orders/order-id/change/place.json',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key', orderId: 'order-id', ...testBody},
    error: 'some error',
    path: '/accounts/key/orders/order-id/change/place.json',
    title: 'throws if invalid data'
  }
]}));
