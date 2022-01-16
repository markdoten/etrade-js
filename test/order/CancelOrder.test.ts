/**
 * @file CancelOrder tests.
 */
import {testApi} from '@test/__utils__/test.api';
import CancelOrder from '@src/order/CancelOrder';
import fixture from '@test/__fixtures__/order/CancelOrder.json';

/* eslint-disable max-len */

const testBody = {orderId: 'order-id'};

describe('CancelOrder', () => testApi({fixture, fn: CancelOrder, method: 'PUT', tests: [
  {
    args: {accountIdKey: 'key', ...testBody},
    body: {CancelOrderRequest: testBody},
    path: '/accounts/key/orders/cancel.json',
    title: 'calls correct endpoint with all arguments'
  },
  {
    args: {accountIdKey: 'key', ...testBody},
    error: 'some error',
    path: '/accounts/key/orders/cancel.json',
    title: 'throws if invalid data'
  }
]}));
