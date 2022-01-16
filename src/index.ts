/**
 * @file E-Trade API.
 */
import * as Accounts from '@src/accounts';
import * as Alerts from '@src/alerts';
import * as Auth from '@src/auth';
import * as Market from '@src/market';
import * as Order from '@src/order';
import Emitter from 'events';
import session from '@src/session';
import type {IEtradeConfig} from '@src/interfaces';

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
   * @param {IEtradeConfig} config - The configuration object.
   */
  constructor(config: IEtradeConfig) {
    super();
    session.initialize(config);
  }
}
