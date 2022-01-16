/**
 * @file Accounts.
 */
import GetAccountBalances from '@src/accounts/GetAccountBalances';
import ListAccounts from '@src/accounts/ListAccounts';
import ListTransactionDetails from '@src/accounts/ListTransactionDetails';
import ListTransactions from '@src/accounts/ListTransactions';
import ViewPortfolio from '@src/accounts/ViewPortfolio';

export * as enums from '@src/accounts/enums';
export * as interfaces from '@src/accounts/interfaces';

export const functions = {
  GetAccountBalances,
  ListAccounts,
  ListTransactionDetails,
  ListTransactions,
  ViewPortfolio
};
