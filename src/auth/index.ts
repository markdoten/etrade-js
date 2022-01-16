/**
 * @file Authentication.
 */
import RenewAccessToken from './RenewAccessToken';
import RevokeAccessToken from './RevokeAccessToken';

export const enums = {};
export * as interfaces from './interfaces';

export const functions = {
  RenewAccessToken,
  RevokeAccessToken
};
