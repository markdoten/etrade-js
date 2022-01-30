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

export {ICancelOrderRequest, ICancelOrderResponse} from './CancelOrder';
export {IChangePreviewedOrderRequest, IChangePreviewedOrderResponse} from './ChangePreviewedOrder';
export {IListOrdersRequest, IListOrdersResponse} from './ListOrders';
export {IOrderParams} from './utils/create';
export {IPlaceChangedOrderRequest, IPlaceChangedOrderResponse} from './PlaceChangedOrder';
export {IPlaceOrderRequest, IPlaceOrderResponse} from './PlaceOrder';
export {IPreviewOrderRequest, IPreviewOrderResponse} from './PreviewOrder';

/* eslint-disable max-len */

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/CashBuyingPowerDetails|CashBuyingPowerDetails Docs}
 */
export interface ICashBuyingPowerDetails {
  /** Settled Cash that has gone through the settlement process and now belongs to the customer's cash balance. */
  settled: IOrderBuyPowerEffect;
  /** Unsettled Cash, still in the settlement process, and not yet in customer's cash balance. */
  settledUnsettled: IOrderBuyPowerEffect;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/Disclosure|Disclosure Docs}
 */
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

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/DtBuyingPowerDetails|DtBuyingPowerDetails Docs}
 */
export interface IDtBuyingPowerDetails {
  /** The total in the account that is marginable. */
  marginable: IOrderBuyPowerEffect;
  /** The total in the account that is not marginable. */
  nonMarginable: IOrderBuyPowerEffect;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/Event|Event Docs}
 */
export interface IEvent {
  /** The date and time of the order event. */
  dateTime: number;
  /** The object for the instrument. */
  instrument: IInstrument[];
  /** The name of the order event. */
  name: EventName;
  /** The numeric ID for this order in the E*TRADE system. */
  orderNumber: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/Events|Events Docs}
 */
export interface IEvents {
  /** The type of order event. */
  event: IEvent[];
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/Instrument|Instrument Docs}
 */
export interface IInstrument {
  /** The ask price. */
  ask?: number;
  /** The average execution price. */
  averageExecutionPrice?: number;
  /** The bid price. */
  bid?: number;
  /** The number of shares to cancel ordering. */
  cancelQuantity?: number;
  /** The currency used for the order request. */
  currency?: Currency;
  /** The cost billed to the user to perform the requested action. */
  estimatedCommission?: number;
  /** The cost or proceeds, including broker commission, resulting from the requested action. */
  estimatedFees?: number;
  /** The number of shares filled. */
  filledQuantity?: number;
  /** The last price. */
  lastprice?: number;
  /** The object for the position lot. */
  lots?: ILots;
  /** The object for the mutual fund quantity. */
  mfQuantity?: IMFQuantity;
  /** The transaction for the mutual fund order. */
  mfTransaction?: MFTransaction;
  /** The action that the broker is requested to perform. */
  orderAction?: OrderAction;
  /** The number of shares ordered. */
  orderedQuantity?: number;
  /** The Options Symbology Initiative (OSI) key containing the option root symbol, expiration date, call/put indicator, and strike price. */
  osiKey?: string;
  /** The product details for the security. */
  product?: IProduct;
  /** The number of shares to buy or sell. */
  quantity?: number;
  /** The type of the quantity. */
  quantityType?: QuantityType;
  /** If TRUE, this is a reserve order meaning that only a limited number of shares will be publicly displayed instead of the entire order; this is done to avoid influencing other traders. */
  reserveOrder?: boolean;
  /** The number of shares to be publicly displayed if this is a reserve order. */
  reserveQuantity?: number;
  /** The text description of the security being bought or sold. */
  symbolDescription?: string;
}

/**
 * This is the same as Instrument with Product title cased since E*Trade only accepts this format.
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/Instrument|Instrument Docs}
 */
export interface IInstrumentReq extends IInstrument {
  /** The product details for the security. */
  Product?: IProduct;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/Lot|Lot Docs}
 */
export interface ILot {
  /** The lot ID of the lot selected to sell. */
  id: number;
  /** The number of shares to sell for the selected lot. */
  size: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/Lots|Lots Docs}
 */
export interface ILots {
  /** The position lot details. */
  lot: ILot[];
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/MarginBuyingPowerDetails|MarginBuyingPowerDetails Docs}
 */
export interface IMarginBuyingPowerDetails {
  /** The total in the account that is marginable. */
  marginable: IOrderBuyPowerEffect;
  /** The total in the account that is not marginable. */
  nonMarginable: IOrderBuyPowerEffect;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/MFQuantity|MFQuantity Docs}
 */
export interface IMFQuantity {
  /** The value of the cash quantity in the mutual fund. */
  cash: number;
  /** The CUSIP value of the mutual fund symbol. */
  cusip: string;
  /** The value of the margin quantity in the mutual fund. */
  margin: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/Order|Order Docs}
 */
export interface IOrder {
  /** The order details. */
  details: string;
  /** The events in the placed order. */
  events: IEvents;
  /** The order confirmation ID for the placed order. */
  orderDetail: IOrderDetail[];
  /** ID number assigned to this order. */
  orderId: number;
  /** The type of order being placed. */
  orderType: OrderType;
  /** The total commission. */
  totalCommission: number;
  /** The total order value. */
  totalOrderValue: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/OrderBuyPowerEffect|OrderBuyPowerEffect Docs}
 */
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

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/OrderDetail|OrderDetail Docs}
 */
export interface IOrderDetail {
  /** The numeric account ID. */
  accountId?: string;
  /** Indicator to identify if automated investment planning is turned on or off. */
  aipFlag?: boolean;
  /** If TRUE, the transactions specified in the order must be executed all at once or not at all; default is FALSE. */
  allOrNone?: boolean;
  /** The bracketed limit price (bracketed orders are not supported in API currently). */
  bracketedLimitPrice?: number;
  /** In a conditional order, the type of price being followed. */
  conditionFollowPrice?: ConditionFollowPrice;
  /** For a conditional order, the price the condition is being compared against. */
  conditionPrice?: number;
  /** The condition security type. */
  conditionSecurityType?: SecurityType;
  /** For a conditional order, the symbol that the condition is being compared against. */
  conditionSymbol?: string;
  /** The type of comparison to be used in a conditional order (contingent orders are not supported in API currently). */
  conditionType?: ConditionType;
  /** Indicator of the execution guarantee of the order. */
  egQual?: EgQual;
  /** The cost billed to the user to perform the requested action. */
  estimatedCommission?: number;
  /** The estimated fees. */
  estimatedFees?: number;
  /** The cost or proceeds, including broker commission, resulting from the requested action. */
  estimatedTotalAmount?: number;
  /** The time the order was executed (UTC). */
  executedTime?: number;
  /** The GCD. */
  gcd?: number;
  /** The initial stop price. */
  initialStopPrice?: number;
  /** The object for the instrument. */
  instrument?: IInstrument[];
  /** The amount of the investment. */
  investmentAmount?: number;
  /** The highest price at which to buy or the lowest price at which to sell if specified in a limit order. */
  limitPrice?: number;
  /** The session in which the order will be placed. */
  marketSession?: MarketSession;
  /** The object for the messages. */
  messages?: IMessages;
  /** The mutual fund price type. */
  mfpriceType?: string;
  /** The net ask. */
  netAsk?: number;
  /** The net bid. */
  netBid?: number;
  /** The net price. */
  netPrice?: number;
  /** Indicator to identify the trailing stop price type. */
  offsetType?: OffsetType;
  /** Total cost or proceeds, including commission. */
  offsetValue?: number;
  /** The numeric ID for this order in the E*TRADE system. */
  orderNumber?: number;
  /** The term for which the order is in effect. */
  orderTerm?: OrderTerm;
  /** The type of order being placed. */
  orderType?: OrderType;
  /** The stop value for trailing stop price types. */
  orderValue?: number;
  /** The time the order was placed (UTC). */
  placedTime?: number;
  /** The position quantity. */
  positionQuantity?: PositionQuantity;
  /** This parameter is required and must specify the numeric preview ID from the preview and the other parameters of this request must match the parameters of the preview. */
  previewId?: number;
  /** The time of the order preview. */
  previewTime?: number;
  /** The type of pricing. */
  priceType?: OrderPriceType;
  /** The value of the price. */
  priceValue?: string;
  /** The ratio. */
  ratio?: string;
  /** Indicator flag to specify whether to reinvest profit on mutual funds. */
  reInvestOption?: ReInvestOption;
  /** In the event of a change order request, the order ID of the order that is replacing a prior order. */
  replacedByOrderId?: number;
  /** In the event of a change order request, the order ID of the order that the new order is replacing. */
  replacesOrderId?: number;
  /** The exchange where the order should be executed. Users may want to specify this if they believe they can get a better order fill at a specific exchange rather than relying on the automatic order routing system. */
  routingDestination?: RoutingDestination;
  /** The status of the order. */
  status?: OrderStatus;
  /** The designated boundary price for a stop-limit order. */
  stopLimitPrice?: number;
  /** The designated boundary price for a stop order. */
  stopPrice?: number;
  /** The current trailing value. For trailing stop dollar orders, this is a fixed dollar amount. For trailing stop percentage orders, this is the price reflected by the percentage selected. */
  trailPrice?: number;
  /** The price that an advanced order will trigger. For example, if it is a $1 buy trailing stop, then the trigger price will be $1 above the last price. */
  triggerPrice?: number;
}

/**
 * This is the same as IOrderDetail with Instrument and Product title cased since E*Trade only accepts this format.
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/OrderDetail|OrderDetail Docs}
 */
export interface IOrderDetailReq extends IOrderDetail {
  /** The object for the instrument. */
  Instrument?: IInstrumentReq[];
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/OrderId|OrderId Docs}
 */
export interface IOrderId {
  /** The cash margin designation. */
  cashMargin: CashMargin;
  /** ID number assigned to this order. */
  orderId: number;
}

/**
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definitions/PreviewId|PreviewId Docs}
 */
export interface IPreviewId {
  /** The margin level designation. */
  cashMargin: CashMargin;
  /** The preview ID number. It must be used with place order within 3 minutes. */
  previewId: number;
}
