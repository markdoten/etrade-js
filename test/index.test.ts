/**
 * @file Main index test.
 */
import * as accountsEnums from '@src/accounts/enums';
import * as alertsEnums from '@src/alerts/enums';
import * as marketEnums from '@src/market/enums';
import * as orderEnums from '@src/order/enums';
import ETrade, {accounts, alerts, auth, market, order} from '@src/index';
import session from '@src/session';

describe('ETrade', () => {
  let sdk;

  beforeEach(() => {
    sdk = new ETrade({consumerKey: 'key', consumerSecret: 'secret'});
  });

  it('has all of the accounts functions', () => {
    expect(sdk.accounts).toEqual({
      GetAccountBalances: expect.any(Function),
      ListAccounts: expect.any(Function),
      ListTransactionDetails: expect.any(Function),
      ListTransactions: expect.any(Function),
      ViewPortfolio: expect.any(Function)
    });
  });

  it('has all of the alerts functions', () => {
    expect(sdk.alerts).toEqual({
      DeleteAlert: expect.any(Function),
      ListAlertDetails: expect.any(Function),
      ListAlerts: expect.any(Function)
    });
  });

  it('has all of the auth functions', () => {
    expect(sdk.auth).toEqual({
      completeOAuth: expect.any(Function),
      RenewAccessToken: expect.any(Function),
      RevokeAccessToken: expect.any(Function),
      startOAuth: expect.any(Function)
    });
  });

  it('has all of the market functions', () => {
    expect(sdk.market).toEqual({
      GetOptionChains: expect.any(Function),
      GetOptionExpireDates: expect.any(Function),
      GetQuotes: expect.any(Function),
      LookUpProduct: expect.any(Function)
    });
  });

  it('has all of the order functions', () => {
    expect(sdk.order).toEqual({
      BuildOrder: expect.any(Function),
      CancelOrder: expect.any(Function),
      ChangePreviewedOrder: expect.any(Function),
      ListOrders: expect.any(Function),
      PlaceChangedOrder: expect.any(Function),
      PlaceOrder: expect.any(Function),
      PreviewOrder: expect.any(Function)
    });
  });

  it('has accounts enums and interfaces exported separately', () => {
    expect(accounts).toEqual({enums: accountsEnums, interfaces: {}});
  });

  it('has alerts enums and interfaces exported separately', () => {
    expect(alerts).toEqual({enums: alertsEnums, interfaces: {}});
  });

  it('has auth enums and interfaces exported separately', () => {
    expect(auth).toEqual({enums: {}, interfaces: {}});
  });

  it('has market enums and interfaces exported separately', () => {
    expect(market).toEqual({enums: marketEnums, interfaces: {}});
  });

  it('has order enums and interfaces exported separately', () => {
    expect(order).toEqual({enums: orderEnums, interfaces: {}});
  });

  it('completeOAuth calls session.oauthComplete', () => {
    jest.spyOn(session, 'oauthComplete').mockReturnValue(null);
    sdk.auth.completeOAuth('code');
    expect(session.oauthComplete).toHaveBeenCalledWith('code');
  });

  it('startOAuth calls session.oauthStart', () => {
    jest.spyOn(session, 'oauthStart').mockReturnValue(null);
    sdk.auth.startOAuth();
    expect(session.oauthStart).toHaveBeenCalledWith();
  });
});
