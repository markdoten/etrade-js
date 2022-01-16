/**
 * @file Order.
 */
import {createOrder} from '@src/order/utils/create';
import CancelOrder from '@src/order/CancelOrder';
import ChangePreviewedOrder from '@src/order/ChangePreviewedOrder';
import ListOrders from '@src/order/ListOrders';
import PlaceChangedOrder from '@src/order/PlaceChangedOrder';
import PlaceOrder from '@src/order/PlaceOrder';
import PreviewOrder from '@src/order/PreviewOrder';

export * as enums from '@src/order/enums';
export * as interfaces from '@src/order/interfaces';

export const functions = {
  BuildOrder: createOrder,
  CancelOrder,
  ChangePreviewedOrder,
  ListOrders,
  PlaceChangedOrder,
  PlaceOrder,
  PreviewOrder
};
