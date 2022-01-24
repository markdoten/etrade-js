/**
 * @file E-Trade API.
 */
import * as Accounts from './accounts';
import * as Alerts from './alerts';
import * as Auth from './auth';
import * as Market from './market';
import * as Order from './order';
import Emitter from 'events';
import session from './session';
import type {IEtradeConfig} from './interfaces';

export * as enums from './enums';
export * as interfaces from './interfaces';

const {functions: AccountsFunctions, ...AccountsTypes} = Accounts;
export const accounts = AccountsTypes;

const {functions: AlertsFunctions, ...AlertsTypes} = Alerts;
export const alerts = AlertsTypes;

const {functions: AuthFunctions, ...AuthTypes} = Auth;
export const auth = AuthTypes;

const {functions: MarketFunctions, ...MarketTypes} = Market;
export const market = MarketTypes;

const {functions: OrderFunctions, ...OrderTypes} = Order;
export const order = OrderTypes;

/**
 * @class ETrade
 * @augments Emitter
 */
export default class ETrade extends Emitter {
  public accounts = AccountsFunctions;
  public alerts = AlertsFunctions;
  public auth = {
    ...AuthFunctions,
    completeOAuth: (verifier: string): Promise<void> => session.oauthComplete(verifier),
    startOAuth: (): Promise<string> => session.oauthStart()
  };

  public market = MarketFunctions;
  public order = OrderFunctions;

  /**
   * E-Trade API constructor.
   * @param config - The configuration object.
   */
  constructor(config: IEtradeConfig) {
    super();
    session.initialize(config);
  }

  /**
   * Set the access token and secret.
   * @param accessToken - The access token.
   * @param accessTokenSecret - The access token secret.
   */
  public setToken(accessToken: string, accessTokenSecret: string): void {
    session.setToken(accessToken, accessTokenSecret);
  }
}
