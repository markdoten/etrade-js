/**
 * @file ChangePreviewedOrder tests.
 */
import {createOrder} from "../../src/order/utils/create";
import {OrderType} from '../../src/order/enums';
import {testApi} from '../__utils__/test.api';
import {ChangePreviewedOrder as TestFn} from '../../src/order/ChangePreviewedOrder';
import fixture from '../__fixtures__/order/ChangePreviewedOrder.json';

/* eslint-disable max-len */

const testBody = {
  clientOrderId: 'client-order-id',
  Order: [createOrder({accountId: '83710800', quantity: 10, symbol: 'ADBE'})],
  orderType: OrderType.EQ
};

describe('ChangePreviewedOrder', () => testApi({fixture, fn: TestFn, method: 'PUT', tests: [
  {
    args: {accountIdKey: 'key', orderId: 'order-id', ...testBody},
    body: {PreviewOrderRequest: testBody},
    path: '/accounts/key/orders/order-id/change/preview.json',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key', orderId: 'order-id', ...testBody},
    error: 'some error',
    path: '/accounts/key/orders/order-id/change/preview.json',
    title: 'throws if invalid data'
  }
]}));
