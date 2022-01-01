/**
 * @file Session.
 */
import {Environment} from './enums';
import {OAuth} from 'oauth';
import {titleToCamelProperties} from './util';
import type {IEtradeConfig, IFetchResponse} from './interface';

const HOSTNAMES = {
  [Environment.LIVE]: 'https://api.etrade.com',
  [Environment.SANDBOX]: 'https://apisb.etrade.com'
};

const REQUEST_MAX_DURATION = 1000 * 10;

interface IFetchOptions {
  body?: Record<string, any>;
  headers?: string[];
  isOAuth?: boolean;
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT';
  path: string;
  query?: any;
}

interface IGenerateHeaders {
  headers: string[];
  method: string;
  query?: Record<string, number | string>;
  url: string;
}

/**
 * Session class.
 * @class
 */
class Session {
  private _consumerKey: string;
  private _consumerSecret: string;
  private _environment: Environment;
  private _oauth = null;
  public accessToken: string;
  public accessTokenSecret: string;
  public oauthRequestToken: string;
  public oauthRequestTokenSecret: string;

  /**
   * Initializes the session.
   * @param {IEtradeConfig} config - ETrade config object.
   * @param {string} [config.consumerKey] - Consumer key to set.
   * @param {string} [config.consumerSecret] - Consumer secret to set.
   */
  public initialize({
    accessToken,
    accessTokenSecret,
    consumerKey,
    consumerSecret,
    environment = Environment.SANDBOX
  }: IEtradeConfig): void {
    this.accessToken = accessToken;
    this.accessTokenSecret = accessTokenSecret;
    this._consumerKey = consumerKey;
    this._consumerSecret = consumerSecret;
    this._environment = environment;

    this._oauth = new OAuth(
      `${HOSTNAMES[environment]}/oauth/request_token`,
      `${HOSTNAMES[environment]}/oauth/access_token`,
      consumerKey,
      consumerSecret,
      '1.0',
      undefined,
      'HMAC-SHA1'
    );

    this._oauth.setClientOptions({
      accessTokenHttpMethod: 'GET',
      followRedirects: false,
      requestTokenHttpMethod: 'GET'
    });
  }

  /**
   * Complete the oauth process with the verifier string.
   * @async
   * @param {string} verifier - OAuth verifier string.
   * @returns {Promise<void>} - Complete promise.
   */
  public async oauthComplete(verifier: string): Promise<void> {
    return new Promise((res, rej) => {
      this._oauth.getOAuthAccessToken(
        this.oauthRequestToken,
        this.oauthRequestTokenSecret,
        verifier,
        (error, oAuthAccessToken, oAuthAccessTokenSecret) => {
          if (error) {
            return rej(error);
          }
          this.accessToken = oAuthAccessToken;
          this.accessTokenSecret = oAuthAccessTokenSecret;
          res();
        }
      );
    });
  }

  /**
   * Start the oauth process.
   * @async
   * @returns {Promise<string>} - String authorize URL.
   */
  public async oauthStart(): Promise<string> {
    return new Promise((res, rej) => {
      this._oauth.getOAuthRequestToken((error, oAuthToken, oAuthTokenSecret) => {
        if (error) {
          return rej(error);
        }
        this.oauthRequestToken = oAuthToken;
        this.oauthRequestTokenSecret = oAuthTokenSecret;

        const key = encodeURIComponent(this._consumerKey);
        const token = encodeURIComponent(oAuthToken);
        res(`https://us.etrade.com/e/t/etws/authorize?key=${key}&token=${token}`);
      });
    });
  }

  /**
   * Send an HTTP request.
   * @async
   * @param {Object} options - Fetch options.
   * @param {Object} [options.body] - Request body.
   * @param {boolean} [options.isOAuth] - Whether the request is an OAuth request.
   * @param {string} [options.method] - Request path.
   * @param {string} [options.path] - Request path.
   * @param {Object} [options.query] - Request URL query params.
   * @returns {Promise<IFetchResponse>} - The request promise.
   */
  public request<T extends IFetchResponse>({
    body,
    isOAuth = false,
    method = 'GET',
    path,
    query = {}
  }: IFetchOptions): Promise<T> {
    const extension = isOAuth ? '' : '.json';
    const version = isOAuth ? '' : `/v1`;
    const url = new URL(`${HOSTNAMES[this._environment]}${version}${path}${extension}`);
    Object.keys(query).forEach((key: string) => {
      query[key] === undefined || url.searchParams.append(key, query[key]);
    });
    return new Promise((res, rej) => this._oauth._performSecureRequest(
      this.accessToken,
      this.accessTokenSecret,
      method,
      url.toString(),
      null, // extra_params,
      body ? JSON.stringify(body) : undefined,
      extension ? 'application/json' : null,
      (error: Error, response: any, result: any): void => {
        if (error) {
          return rej(error);
        }
        try {
          const [data] = Object.values(JSON.parse(response));
          res(titleToCamelProperties(data || {}) as T);
        } catch (e) {
          res({message: response as string} as T);
        }
      }
    ));
  }
}

export default new Session;
