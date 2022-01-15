/**
 * @file Authentication.
 */
import RenewAccessToken, * as RenewAccessTokenInterfaces from './RenewAccessToken';
import RevokeAccessToken, * as RevokeAccessTokenInterfaces from './RevokeAccessToken';

export const enums = {};

export const functions = {
  RenewAccessToken,
  RevokeAccessToken
};

export const interfaces = {
  ...RenewAccessTokenInterfaces,
  ...RevokeAccessTokenInterfaces
};
