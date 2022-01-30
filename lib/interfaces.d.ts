/**
 * @file General interface.
 */
import type { CallPut, Environment, MessageType, SecurityType, TypeCode } from './enums';
export interface IEtradeConfig {
    /** Access token. */
    accessToken?: string;
    /** Access token secret. */
    accessTokenSecret?: string;
    /** Consumer key. */
    consumerKey: string;
    /** Consumer secret. */
    consumerSecret: string;
    /** Environment (Sandbox or Live). */
    environment?: Environment;
}
export interface IFetchResponse {
    message?: string;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/Message|Message Docs}
 */
export interface IMessage {
    /** The standard numeric code of the result message. Refer to the Error Messages documentation for examples. May optionally be displayed to the user, but is primarily intended for internal use. */
    code: number;
    /** The text of the result message, indicating order status, success or failure, additional requirements that must be met before placing the order, and so on. Applications typically display this message to the user, which may result in further user action. */
    description: string;
    /** The type used to identify the message. */
    type: MessageType;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-quote-v1.html#/definitions/Messages|Messages Docs}
 */
export interface IMessages {
    /** The object for the message. */
    message: IMessage[];
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definitions/PortfolioMargin|PortfolioMargin Docs}
 */
export interface IPortfolioMargin {
    /** The available excess equity. */
    availExcessEquity: number;
    /** The margin account cash open order reserve. */
    dtCashOpenOrderReserve: number;
    /** The margin account margin open order reserve. */
    dtMarginOpenOrderReserve: number;
    /** The excess equity. */
    excessEquity: number;
    /** The excess equity minus the portfolio requirement. */
    excessEquityMinusRequirement: number;
    /** The funds on hold. */
    fundsOnHold: number;
    /** The house excess equity. */
    houseExcessEquity: number;
    /** The liquidating equity. */
    liquidatingEquity: number;
    /** The open order reserve. */
    openOrderReserve: number;
    /** The total house requirement. */
    totalHouseRequirement: number;
    /** The total margin requirements. */
    totalMarginRqmts: number;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-transaction-v1.html#/definitions/Product|Product Docs}
 */
export interface IProduct {
    /** The option type - either CALL or PUT. */
    callPut?: CallPut;
    /** The day (1-31) the option will expire. */
    expiryDay?: number;
    /** The month (1-12) the option will expire. */
    expiryMonth?: number;
    /** The expiration type for the option. */
    expiryType?: string;
    /** The four-digit year the option will expire. */
    expiryYear?: number;
    /** ProductId. */
    productId?: IProductId;
    /** The subtype of the security. */
    securitySubType?: string;
    /** The type code to identify the order or leg request. */
    securityType?: SecurityType;
    /** The strike price for the option. */
    strikePrice?: number;
    /** The symbol for which the quote details are being accessed. */
    symbol?: string;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-transaction-v1.html#/definitions/ProductId|ProductId Docs}
 */
export interface IProductId {
    /** The market symbol for the security being bought or sold. */
    symbol: string;
    /** Product Type Code. */
    typeCode: TypeCode;
}
export interface ITokenData {
    /** Access token. */
    accessToken: string | undefined;
    /** Access token secret. */
    accessTokenSecret: string | undefined;
    /** Environment (Sandbox or Live). */
    environment: Environment;
}
