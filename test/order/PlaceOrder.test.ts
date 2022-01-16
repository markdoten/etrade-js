/**
 * @file PlaceOrder tests.
 */
import {CashMargin, OrderType} from '../../src/order/enums';
import {createOrder} from "../../src/order/utils/create";
import {testApi} from '../__utils__/test.api';
import fixture from '../__fixtures__/order/PlaceOrder.json';
import PlaceOrder from '../../src/order/PlaceOrder';

/* eslint-disable max-len */

const testBody = {
  clientOrderId: 'order-id',
  Order: [createOrder({accountId: '83710800', quantity: 10, symbol: 'ADBE'})],
  orderType: OrderType.EQ,
  previewIds: [{
    cashMargin: CashMargin.CASH,
    previewId: 'preview-id'
  }]
};

describe('PlaceOrder', () => testApi({fixture, fn: PlaceOrder, method: 'POST', tests: [
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
