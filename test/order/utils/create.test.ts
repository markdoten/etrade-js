/**
 * @file CreateOrder tests.
 */
import {createOrder} from '../../../src/order/utils/create';
import {MarketSession} from '../../../src/enums';
import {OrderAction, OrderPriceType, OrderTerm, QuantityType, SecurityType} from '../../../src/order/enums';

describe('createOrder', () => {
  it('creates an order with defaults', () => {
    const order = createOrder({
      accountId: 'account-id',
      quantity: 10,
      symbol: 'ADBE'
    });
    expect(order).toEqual({
      accountId: 'account-id',
      allOrNone: false,
      Instrument: [{
        orderAction: OrderAction.BUY,
        Product: {
          securityType: SecurityType.EQ,
          symbol: 'ADBE'
        },
        quantity: 10,
        quantityType: QuantityType.QUANTITY
      }],
      marketSession: MarketSession.REGULAR,
      orderTerm: OrderTerm.GOOD_FOR_DAY,
      priceType: OrderPriceType.MARKET
    });
  });

  it('supports various overrides', () => {
    const order = createOrder({
      accountId: 'account-id',
      override: {
        instrument: {quantityType: QuantityType.DOLLAR},
        orderDetail: {marketSession: MarketSession.EXTENDED},
        product: {strikePrice: 100}
      },
      quantity: 10,
      symbol: 'ADBE'
    });
    expect(order).toEqual({
      accountId: 'account-id',
      allOrNone: false,
      Instrument: [{
        orderAction: OrderAction.BUY,
        Product: {
          securityType: SecurityType.EQ,
          strikePrice: 100,
          symbol: 'ADBE'
        },
        quantity: 10,
        quantityType: QuantityType.DOLLAR
      }],
      marketSession: MarketSession.EXTENDED,
      orderTerm: OrderTerm.GOOD_FOR_DAY,
      priceType: OrderPriceType.MARKET
    });
  });
});
