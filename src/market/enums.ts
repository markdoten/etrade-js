/**
 * @file Market Enums.
 */

export enum ChainType {
  CALL = 'CALL',
  CALLPUT = 'CALLPUT',
  PUT = 'PUT'
}

export enum DetailFlag {
  ALL = 'ALL',
  FUNDAMENTAL = 'FUNDAMENTAL',
  INTRADAY = 'INTRADAY',
  MF_DETAIL = 'MF_DETAIL',
  OPTIONS = 'OPTIONS',
  WEEK_52 = 'WEEK_52'
}

export enum ExpiryType {
  ALL = 'ALL',
  DAILY = 'DAILY',
  MONTHEND = 'MONTHEND',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  UNSPECIFIED = 'UNSPECIFIED',
  VIX = 'VIX',
  WEEKLY = 'WEEKLY'
}

export enum OptionCategory {
  ALL = 'ALL',
  MINI = 'MINI',
  STANDARD = 'STANDARD'
}

export enum PriceType {
  ALL = 'ALL',
  ATNM = 'ATNM'
}
