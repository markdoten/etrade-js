/**
 * @file General interface.
 */
import type {Environment, MessageType, SecurityType, TypeCode} from './enums';

/* eslint-disable max-len */

export interface IEtradeConfig {
  accessToken?: string;
  accessTokenSecret?: string;
  consumerKey: string;
  consumerSecret: string;
  environment?: Environment;
}

export interface IFetchResponse {
  message?: string;
}

export interface IMessage {
  description: string;
  code: number;
  type: MessageType;
}

export interface IMessages {
  message: IMessage[];
}

export interface IPortfolioMargin {
  availExcessEquity: number;
  dtCashOpenOrderReserve: number;
  dtMarginOpenOrderReserve: number;
  excessEquity: number;
  excessEquityMinusRequirement: number;
  fundsOnHold: number;
  houseExcessEquity: number;
  liquidatingEquity: number;
  openOrderReserve: number;
  totalHouseRequirement: number;
  totalMarginRqmts: number;
}

export interface IProduct {
  callPut: 'CALL' | 'PUT';
  expiryDay: number;
  expiryMonth: number;
  expiryType: string;
  expiryYear: number;
  productId: IProductId;
  securitySubType: string;
  securityType: SecurityType;
  strikePrice: number;
  symbol: string;
}

export interface IProductId {
  symbol: string;
  typeCode: TypeCode;
}
