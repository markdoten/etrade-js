/**
 * @file PlaceChangedOrder tests.
 */
import {CashMargin, OrderType} from '@src/order/enums';
import {createOrder} from "../../src/order/utils/create";
import {testApi} from '@test/__utils__/test.api';
import fixture from '@test/__fixtures__/order/PlaceChangedOrder.json';
import PlaceChangedOrder from '@src/order/PlaceChangedOrder';

/* eslint-disable max-len */

const testBody = {
  clientOrderId: 'client-order-id',
  Order: [createOrder({accountId: '83710800', quantity: 10, symbol: 'ADBE'})],
  orderType: OrderType.EQ,
  previewIds: [{
    cashMargin: CashMargin.CASH,
    previewId: 'preview-id'
  }]
};

describe('PlaceChangedOrder', () => testApi({fixture, fn: PlaceChangedOrder, method: 'PUT', tests: [
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
