/**
 * @file Create order object.
 */
import { SecurityType } from '../../enums';
import { OrderAction, OrderPriceType, OrderTerm } from '../enums';
import type { IInstrument, IOrderDetail } from '../interfaces';
import type { IProduct } from '../../interfaces';
export interface IOrderParams {
    accountId: string;
    allOrNone?: boolean;
    orderAction?: OrderAction;
    orderTerm?: OrderTerm;
    override?: {
        instrument?: Partial<IInstrument>;
        orderDetail?: Partial<IOrderDetail>;
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
 * @returns {IOrderDetail} - Order detail object.
 */
export declare const createOrder: ({ accountId, allOrNone, orderAction, orderTerm, override, priceType, quantity, securityType, symbol }: IOrderParams) => IOrderDetail;
