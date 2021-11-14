/**
 * @file Authorize Application.
 */
import {fetchWithAuth} from '../session';

/* eslint-disable max-len */

export interface IAuthorizeApplicationResponse {
  /** Verification code. */
  oauth_verifier: string;
}

/**
 * Redirect url for Authorization.
 * @async
 * @returns {Promise<IAuthorizeApplicationResponse>} - Redirect url for Authorization.
 */
export const AuthorizeApplication = (): Promise<IAuthorizeApplicationResponse> =>
  fetchWithAuth<IAuthorizeApplicationResponse>({
    headers: ['oauth_consumer_key', 'oauth_token'],
    path: '/e/t/etws/authorize',
    version: undefined
  });
