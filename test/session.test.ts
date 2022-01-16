/**
 * @file Session tests.
 */
import {Environment} from '@src/enums';
import oauth from 'oauth';
import session from '@src/session';

describe('session', () => {
  let getOAuthAccessTokenSpy;
  let getOAuthRequestTokenSpy;
  let performSecureRequestSpy;
  let setClientOptionsSpy;

  beforeEach(() => {
    getOAuthAccessTokenSpy = jest.fn();
    getOAuthRequestTokenSpy = jest.fn();
    performSecureRequestSpy = jest.fn();
    setClientOptionsSpy = jest.fn();

    jest.spyOn(oauth, 'OAuth').mockImplementation(() => ({
      _performSecureRequest: performSecureRequestSpy,
      getOAuthAccessToken: getOAuthAccessTokenSpy,
      getOAuthRequestToken: getOAuthRequestTokenSpy,
      setClientOptions: setClientOptionsSpy
    }));

    session.initialize({consumerKey: 'key', consumerSecret: 'secret'});
  });

  describe('initialize', () => {
    it('creates an oauth instance and sets client options', () => {
      expect(oauth.OAuth).toHaveBeenCalledWith(
        'https://apisb.etrade.com/oauth/request_token',
        'https://apisb.etrade.com/oauth/access_token',
        'key',
        'secret',
        '1.0',
        undefined,
        'HMAC-SHA1'
      );
      expect(setClientOptionsSpy).toHaveBeenCalledWith({
        accessTokenHttpMethod: 'GET',
        followRedirects: false,
        requestTokenHttpMethod: 'GET'
      });
    });
  });

  describe('oauthComplete', () => {
    beforeEach(() => {
      session.oauthRequestToken = 'token';
      session.oauthRequestTokenSecret = 'secret';
    });

    it('rejects promise with an error', (done: Function) => {
      getOAuthAccessTokenSpy.mockImplementation((token, secret, verifier, callback) => callback('some error'));
      session.oauthComplete('code').catch((err: Error) => {
        expect(err).toBe('some error');
        expect(getOAuthAccessTokenSpy).toHaveBeenCalledWith('token', 'secret', 'code', expect.any(Function));
        done();
      });
    });

    it('sets the access token and secret', async () => {
      getOAuthAccessTokenSpy.mockImplementation((token, secret, verifier, callback) =>
        callback(null, 'access-token', 'access-token-secret'));
      await session.oauthComplete('code');
      expect(session.accessToken).toBe('access-token');
      expect(session.accessTokenSecret).toBe('access-token-secret');
    });
  });

  describe('oauthStart', () => {
    it('rejects promise with an error', (done: Function) => {
      getOAuthRequestTokenSpy.mockImplementation((callback) => callback('some error'));
      session.oauthStart().catch((err: Error) => {
        expect(err).toBe('some error');
        expect(getOAuthRequestTokenSpy).toHaveBeenCalledWith(expect.any(Function));
        done();
      });
    });

    it('returns the authorize url', async () => {
      getOAuthRequestTokenSpy.mockImplementation((callback) => callback(null, 'request-token', 'request-token-secret'));
      expect(await session.oauthStart()).toBe('https://us.etrade.com/e/t/etws/authorize?key=key&token=request-token');
      expect(session.oauthRequestToken).toBe('request-token');
      expect(session.oauthRequestTokenSecret).toBe('request-token-secret');
    });
  });

  describe('request', () => {
    beforeEach(() => {
      session.accessToken = 'access-token';
      session.accessTokenSecret = 'access-token-secret';
    });

    it('rejects promise with an error', (done: Function) => {
      performSecureRequestSpy.mockImplementation((a, b, c, d, e, f, g, callback) => callback('some error'));
      session.request({path: '/some/api/path', query: {param1: 'value1'}}).catch((err: Error) => {
        expect(err).toBe('some error');
        expect(performSecureRequestSpy).toHaveBeenCalledWith(
          'access-token',
          'access-token-secret',
          'GET',
          'https://apisb.etrade.com/v1/some/api/path.json?param1=value1',
          null, // extra_params,
          undefined,
          'application/json',
          expect.any(Function)
        );
        done();
      });
    });

    it('returns the processed data', async () => {
      performSecureRequestSpy.mockImplementation((a, b, c, d, e, f, g, callback) => callback(null, JSON.stringify({
        AccountListResponse: {
          Accounts: {
            Account: [
              {prop1: 'value1', prop2: 'value2'},
              {prop3: 'value3', prop4: 'value4'}
            ]
          },
          TitleCase: 'abc'
        }
      })));
      expect(await session.request({path: '/some/api/path'})).toEqual({
        accounts: {account: [
          {prop1: 'value1', prop2: 'value2'},
          {prop3: 'value3', prop4: 'value4'}
        ]},
        titleCase: 'abc'
      });
    });

    it('returns a message object if the response is not an object', async () => {
      performSecureRequestSpy.mockImplementation((a, b, c, d, e, f, g, callback) => callback(null, 'some message'));
      expect(await session.request({path: '/some/api/path'})).toEqual({message: 'some message'});
    });

    it('adds query parameters to the URL', async () => {
      performSecureRequestSpy.mockImplementation((a, b, c, d, e, f, g, callback) => callback(null, '{}'));
      await session.request({path: '/some/api/path', query: {param1: 'value1', param2: undefined}});
      expect(performSecureRequestSpy).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(String),
        expect.any(String),
        'https://apisb.etrade.com/v1/some/api/path.json?param1=value1',
        null,
        undefined,
        'application/json',
        expect.any(Function)
      );
    });
  });

  describe('toJSON', () => {
    it('returns required information', () => {
      const props = {
        accessToken: 'access-token',
        accessTokenSecret: 'access-secret',
        environment: Environment.LIVE
      };
      session.initialize({
        ...props,
        consumerKey: 'key',
        consumerSecret: 'secret'
      });
      expect(session.toJSON()).toEqual(props);
    });
  });
});
