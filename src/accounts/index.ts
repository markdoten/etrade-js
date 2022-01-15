/**
 * @file Accounts.
 */
import GetAccountBalances, * as GetAccountBalancesInterfaces from './GetAccountBalances';
import ListAccounts, * as ListAccountsInterfaces from './ListAccounts';
import ListTransactionDetails, * as ListTransactionDetailsInterfaces from './ListTransactionDetails';
import ListTransactions, * as ListTransactionsInterfaces from './ListTransactions';
import ViewPortfolio, * as ViewPortfolioInterfaces from './ViewPortfolio';
import * as accountEnums from './enums';
import * as accountInterfaces from './interfaces';

export const enums = {
  ...accountEnums
};

export const functions = {
  GetAccountBalances,
  ListAccounts,
  ListTransactionDetails,
  ListTransactions,
  ViewPortfolio
};

export const interfaces = {
  ...GetAccountBalancesInterfaces,
  ...ListAccountsInterfaces,
  ...ListTransactionDetailsInterfaces,
  ...ListTransactionsInterfaces,
  ...ViewPortfolioInterfaces,
  ...accountInterfaces
};
