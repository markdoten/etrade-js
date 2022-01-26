/**
 * @file E-Trade API.
 */
import Accounts from './accounts';
import Alerts from './alerts';
import Auth from './auth';
import Emitter from 'events';
import Market from './market';
import Order from './order';
import session from './session';
import type {IEtradeConfig} from './interfaces';

export * from './enums';
export * from './interfaces';

// Export module specific enums and interfaces.
export * from './accounts/enums';
export * from './accounts/interfaces';
export * from './alerts/enums';
export * from './alerts/interfaces';
export * from './auth/interfaces';
export * from './market/enums';
export * from './market/interfaces';
export * from './order/enums';
export * from './order/interfaces';

/**
 * @class ETrade
 * @augments Emitter
 */
export default class ETrade extends Emitter {
  public accounts = Accounts;
  public alerts = Alerts;
  public auth = {
    ...Auth,
    completeOAuth: (verifier: string): Promise<void> => session.oauthComplete(verifier),
    startOAuth: (): Promise<string> => session.oauthStart()
  };

  public market = Market;
  public order = Order;

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
