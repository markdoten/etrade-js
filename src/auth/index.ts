/**
 * @file Authentication.
 */
import RenewAccessToken from '@src/auth/RenewAccessToken';
import RevokeAccessToken from '@src/auth/RevokeAccessToken';

export const enums = {};
export * as interfaces from '@src/auth/interfaces';

export const functions = {
  RenewAccessToken,
  RevokeAccessToken
};
