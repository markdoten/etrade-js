/**
 * @file Order.
 */
import {createOrder} from './utils/create';
import CancelOrder from './CancelOrder';
import ChangePreviewedOrder from './ChangePreviewedOrder';
import ListOrders from './ListOrders';
import PlaceChangedOrder from './PlaceChangedOrder';
import PlaceOrder from './PlaceOrder';
import PreviewOrder from './PreviewOrder';

export default {
  BuildOrder: createOrder,
  CancelOrder,
  ChangePreviewedOrder,
  ListOrders,
  PlaceChangedOrder,
  PlaceOrder,
  PreviewOrder
};
