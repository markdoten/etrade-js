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
import type {IEtradeConfig} from './interface';

/**
 * @class ETrade
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
   * @param {IEtradeConfig} config - The configuration object.
   */
  constructor(config: IEtradeConfig) {
    super();
    session.initialize(config);
  }
}
