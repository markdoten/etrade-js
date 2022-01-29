/**
 * @file Main index test.
 */
import {Environment} from '../src/enums';
import ETrade from '../src/index';
import session from '../src/session';

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

  describe('getToken', () => {
    it('gets undefined token values from the session if not authorized yet', () => {
      expect(sdk.getToken()).toEqual({
        accessToken: undefined,
        accessTokenSecret: undefined,
        environment: Environment.SANDBOX
      });
    });

    it('gets the token, secret and environment from the session', () => {
      sdk.setToken('access-token', 'access-token-secret');
      expect(sdk.getToken()).toEqual({
        accessToken: 'access-token',
        accessTokenSecret: 'access-token-secret',
        environment: Environment.SANDBOX
      });
    });
  });

  describe('setToken', () => {
    it('sets the token and secret on the session', () => {
      expect((session as any)._accessToken).toBeUndefined();
      expect((session as any)._accessTokenSecret).toBeUndefined();
      sdk.setToken('access-token', 'access-token-secret');
      expect((session as any)._accessToken).toBe('access-token');
      expect((session as any)._accessTokenSecret).toBe('access-token-secret');
    });
  });
});
