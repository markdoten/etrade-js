/**
 * @file E-Trade API.
 */
import {AuthorizeApplication} from './auth';
import {GetAccessToken} from './auth';
import {GetRequestToken} from './auth';
import Emitter from 'events';
import type {IGetAccessTokenResponse} from './auth';

/**
 * @class ETrade
 */
export default class ETrade extends Emitter {
  private readonly accessSecret: string;
  private readonly accessToken: string;

  /**
   * E-Trade API constructor.
   */
  constructor() {
    super();
    // TODO: Something else here??
  }

  /**
   * Get the OAuth URL to load in the browser.
   * @async
   * @returns {Promise<string>} - THe auth URL.
   */
  async getOAuthUrl(): Promise<string> {
    const {oauth_token, oauth_token_secret} = await GetRequestToken();
    const {oauth_verifier} = await AuthorizeApplication();
    return oauth_verifier;
  }

  /**
   * Set the OAuth code to get the access token.
   * @async
   * @param {string} oauth_verifier - The code returned from the OAuth URL.
   * @returns {Promise<IGetAccessTokenResponse>} - The access token information.
   */
  async setOauthCode(oauth_verifier: string): Promise<IGetAccessTokenResponse> {
    const {oauth_token, oauth_token_secret} = await GetAccessToken();
    // TODO: Set the access token on the instance.
    return {oauth_token, oauth_token_secret};
  }
}
