/**
 * @file Market.
 */
import GetOptionChains, * as GetOptionChainsInterfaces from './GetOptionChains';
import GetOptionExpireDates, * as GetOptionExpireDatesInterfaces from './GetOptionExpireDates';
import GetQuotes, * as GetQuotesInterfaces from './GetQuotes';
import LookUpProduct, * as LookUpProductInterfaces from './LookUpProduct';
import * as marketEnums from './enums';
import * as marketInterfaces from './interfaces';

export const enums = {
  ...marketEnums
};

export const functions = {
  GetOptionChains,
  GetOptionExpireDates,
  GetQuotes,
  LookUpProduct
};

export const interfaces = {
  ...GetOptionChainsInterfaces,
  ...GetOptionExpireDatesInterfaces,
  ...GetQuotesInterfaces,
  ...LookUpProductInterfaces,
  ...marketInterfaces
};
