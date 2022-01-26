/**
 * @file Order interface.
 */
import type {
  CashMargin,
  ConditionFollowPrice,
  ConditionType,
  EgQual,
  EventName,
  MFTransaction,
  OffsetType,
  OrderAction,
  OrderPriceType,
  OrderStatus,
  OrderTerm,
  OrderType,
  PositionQuantity,
  QuantityType,
  ReInvestOption,
  RoutingDestination
} from './enums';
import type {Currency, MarketSession, SecurityType} from '../enums';
import type {IMessages, IProduct} from '../interfaces';

export {ICancelOrderRequest, ICancelOrderResponse} from './CanCelOrder';
export {IChangePreviewedOrderRequest, IChangePreviewedOrderResponse} from './ChangePreviewedOrder';
export {IListOrdersRequest, IListOrdersResponse} from './ListOrders';
export {IOrderParams} from './utils/create';
export {IPlaceChangedOrderRequest, IPlaceChangedOrderResponse} from './PlaceChangedOrder';
export {IPlaceOrderRequest, IPlaceOrderResponse} from './PlaceOrder';
export {IPreviewOrderRequest, IPreviewOrderResponse} from './PreviewOrder';

export interface ICashBuyingPowerDetails {
  /** Settled Cash that has gone through the settlement process and now belongs to the customer's cash balance. */
  settled: IOrderBuyPowerEffect;
  /** Unsettled Cash, still in the settlement process, and not yet in customer's cash balance. */
  settledUnsettled: IOrderBuyPowerEffect;
}

export interface IDisclosure {
  /** The AH disclosure flag value. */
  ahDisclosureFlag: boolean;
  /** The advanced order disclosure flag value. */
  aoDisclosureFlag: boolean;
  /** The conditional disclosure flag value. */
  conditionalDisclosureFlag: boolean;
  /** The disclosure flag value. */
  ehDisclosureFlag: boolean;
  /** The mutual fund EO consent flag value. */
  mfEOConsent: boolean;
  /** The mutual fund FL consent flag value. */
  mfFLConsent: boolean;
}

export interface IDtBuyingPowerDetails {
  /** The total in the account that is marginable. */
  marginable: IOrderBuyPowerEffect;
  /** The total in the account that is not marginable. */
  nonMarginable: IOrderBuyPowerEffect;
}

export interface IEvent {
  dateTime: number;
  instrument: IInstrument[];
  name: EventName;
  orderNumber: number;
}

export interface IEvents {
  event: IEvent[];
}

export interface IInstrument {
  ask?: number;
  averageExecutionPrice?: number;
  bid?: number;
  cancelQuantity?: number;
  currency?: Currency;
  estimatedCommission?: number;
  estimatedFees?: number;
  filledQuantity?: number;
  lastprice?: number;
  lots?: ILots;
  mfQuantity?: IMFQuantity;
  mfTransaction?: MFTransaction;
  orderAction?: OrderAction;
  orderedQuantity?: number;
  osiKey?: string;
  Product?: IProduct;
  quantity?: number;
  quantityType?: QuantityType;
  reserveOrder?: boolean;
  reserveQuantity?: number;
  symbolDescription?: string;
}

export interface ILot {
  id: number;
  size: number;
}

export interface ILots {
  lot: ILot[];
}

export interface IMarginBuyingPowerDetails {
  /** The total in the account that is marginable. */
  marginable: IOrderBuyPowerEffect;
  /** The total in the account that is not marginable. */
  nonMarginable: IOrderBuyPowerEffect;
}

export interface IMFQuantity {
  cash: number;
  cusip: string;
  margin: number;
}

export interface IOrder {
  details: string;
  events: IEvents;
  orderDetail: IOrderDetail[];
  orderId: number;
  orderType: OrderType;
  totalCommission: number;
  totalOrderValue: number;
}

export interface IOrderBuyPowerEffect {
  /** Current Buying Power, without including Open orders. */
  currentBp: number;
  /** Current Buying Power minus the CurrentOOR. */
  currentNetBp: number;
  /** Open Order Reserve for the existing open orders. */
  currentOor: number;
  /** The current order impact on the account. */
  currentOrderImpact: number;
  /** Buying Power after factoring in the Current Order. */
  netBp: number;
}

export interface IOrderDetail {
  accountId?: string;
  aipFlag?: boolean;
  allOrNone?: boolean;
  bracketedLimitPrice?: number;
  conditionFollowPrice?: ConditionFollowPrice;
  conditionPrice?: number;
  conditionSecurityType?: SecurityType;
  conditionSymbol?: string;
  conditionType?: ConditionType;
  egQual?: EgQual;
  estimatedCommission?: number;
  estimatedFees?: number;
  estimatedTotalAmount?: number;
  executedTime?: number;
  gcd?: number;
  initialStopPrice?: number;
  Instrument?: IInstrument[];
  investmentAmount?: number;
  limitPrice?: number;
  marketSession?: MarketSession;
  messages?: IMessages;
  mfpriceType?: string;
  netAsk?: number;
  netBid?: number;
  netPrice?: number;
  offsetType?: OffsetType;
  offsetValue?: number;
  orderNumber?: number;
  orderTerm?: OrderTerm;
  orderType?: OrderType;
  orderValue?: number;
  overrideRestrictedCd?: number;
  placedTime?: number;
  positionQuantity?: PositionQuantity;
  preClearanceCode?: string;
  previewId?: number;
  previewTime?: number;
  priceType?: OrderPriceType;
  priceValue?: string;
  ratio?: string;
  reInvestOption?: ReInvestOption;
  replacedByOrderId?: number;
  replacesOrderId?: number;
  routingDestination?: RoutingDestination;
  status?: OrderStatus;
  stopLimitPrice?: number;
  stopPrice?: number;
  trailPrice?: number;
  triggerPrice?: number;
}

export interface IOrderId {
  /** The cash margin designation. */
  cashMargin: CashMargin;
  /** ID number assigned to this order. */
  orderId: number;
}

export interface IPreviewId {
  /** The margin level designation. */
  cashMargin: CashMargin;
  /** The preview ID number. It must be used with place order within 3 minutes. */
  previewId: number;
}
