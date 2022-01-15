/**
 * @file Order.
 */
import CancelOrder, * as CancelInterfaces from './CancelOrder';
import ChangePreviewedOrder, * as ChangePreviewedOrderInterfaces from './ChangePreviewedOrder';
import ListOrders, * as ListOrdersInterfaces from './ListOrders';
import PlaceChangedOrder, * as PlaceChangedOrderInterfaces from './PlaceChangedOrder';
import PlaceOrder, * as PlaceOrderInterfaces from './PlaceOrder';
import PreviewOrder, * as PreviewOrderInterfaces from './PreviewOrder';
import * as orderEnums from './enums';
import * as orderInterfaces from './interfaces';
import {IOrderParams, createOrder} from './utils/create';

export const enums = {
  ...orderEnums
};

export const functions = {
  BuildOrder: createOrder,
  CancelOrder,
  ChangePreviewedOrder,
  ListOrders,
  PlaceChangedOrder,
  PlaceOrder,
  PreviewOrder
};

export const interfaces = {
  ...CancelInterfaces,
  ...ChangePreviewedOrderInterfaces,
  ...ListOrdersInterfaces,
  ...PlaceChangedOrderInterfaces,
  ...PlaceOrderInterfaces,
  ...PreviewOrderInterfaces,
  ...orderInterfaces,
  IOrderParams
};
