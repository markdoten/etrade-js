/**
 * @file Create order object.
 */
import {MarketSession, SecurityType} from '../../enums';
import {OrderAction, OrderPriceType, OrderTerm, QuantityType} from '../enums';
import type {IInstrument, IOrderDetailReq} from '../interfaces';
import type {IProduct} from '../../interfaces';

export interface IOrderParams {
  accountId: string;
  allOrNone?: boolean;
  orderAction?: OrderAction;
  orderTerm?: OrderTerm;
  override?: {
    instrument?: Partial<IInstrument>;
    orderDetail?: Partial<IOrderDetailReq>;
    product?: Partial<IProduct>;
  };
  priceType?: OrderPriceType;
  quantity: number;
  securityType?: SecurityType;
  symbol: string;
}

/**
 * Create the order detail object.
 * @param params - Order parameters.
 * @param [params.accountId] - Account ID.
 * @param [params.allOrNone] - All or none.
 * @param [params.orderAction] - Order action.
 * @param [params.orderTerm] - Order term.
 * @param [params.override] - Override instrument or product.
 * @param [params.priceType] - Order price type.
 * @param [params.quantity] - Quantity.
 * @param [params.securityType] - Security type.
 * @param [params.symbol] - Symbol.
 * @returns {IOrderDetailReq} - Order detail object.
 */
export const createOrder = ({
  accountId,
  allOrNone = false,
  orderAction = OrderAction.BUY,
  orderTerm = OrderTerm.GOOD_FOR_DAY,
  override,
  priceType = OrderPriceType.MARKET,
  quantity,
  securityType = SecurityType.EQ,
  symbol
}: IOrderParams): IOrderDetailReq => ({
  accountId,
  allOrNone,
  Instrument: [
    {
      orderAction,
      Product: {
        securityType,
        symbol,
        ...(override?.product || {})
      },
      quantity,
      quantityType: QuantityType.QUANTITY,
      ...(override?.instrument || {})
    }
  ],
  marketSession: MarketSession.REGULAR,
  orderTerm,
  priceType,
  ...(override?.orderDetail || {})
});
