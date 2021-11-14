/**
 * @file Enums.
 */

export enum Currency {
  CAD = 'CAD',
  EUR = 'EUR',
  GBP = 'GBP',
  HKD = 'HKD',
  JPY = 'JPY',
  USD = 'USD'
}

export enum Environment {
  LIVE = 'live',
  SANDBOX = 'sandbox'
}

export enum MarketSession {
  EXTENDED = 'EXTENDED',
  REGULAR = 'REGULAR'
}

export enum MessageType {
  ERROR = 'ERROR',
  INFO = 'INFO',
  INFO_HOLD = 'INFO_HOLD',
  WARNING = 'WARNING'
}

export enum QuoteMode {
  QUOTE_REALTIME = 0,
  QUOTE_DELAYED = 1,
  QUOTE_CLOSING = 2,
  QUOTE_AHT_REALTIME = 3,
  QUOTE_AHT_BEFORE_OPEN = 4,
  QUOTE_AHT_CLOSING = 5,
  QUOTE_NONE = 6
}

export enum QuoteStatus {
  CLOSING = 'CLOSING',
  DELAYED = 'DELAYED',
  EH_BEFORE_OPEN = 'EH_BEFORE_OPEN',
  EH_CLOSED = 'EH_CLOSED',
  EH_REALTIME = 'EH_REALTIME',
  REALTIME = 'REALTIME'
}

export enum SecurityType {
  BOND = 'BOND',
  EQ = 'EQ',
  INDX = 'INDX',
  MF = 'MF',
  MMF = 'MMF',
  OPTN = 'OPTN'
}

export enum TypeCode {
  BOND = 'BOND',
  CLOSED_END_FUND = 'CLOSED_END_FUND',
  EQUITY_ETF = 'EQUITY_ETF',
  EQUITY_OPTION_ETF = 'EQUITY_OPTION_ETF',
  EQUITY_OPTN = 'EQUITY_OPTN',
  EQUITY = 'EQUITY',
  ETF = 'ETF',
  EXCHANGE_TRADED_FUND = 'EXCHANGE_TRADED_FUND',
  INDEX = 'INDEX',
  MONEY_MARKET_FUND = 'MONEY_MARKET_FUND',
  MOVE = 'MOVE',
  MUTUAL_FUND_MONEY_MARKET_FUND = 'MUTUAL_FUND_MONEY_MARKET_FUND',
  MUTUAL_FUND = 'MUTUAL_FUND',
  OPTION = 'OPTION',
  PREFERRED = 'PREFERRED',
  UNKNOWN = 'UNKNOWN',
  WILDCARD = 'WILDCARD'
}
