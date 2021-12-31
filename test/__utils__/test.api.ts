/**
 * @file Test functions.
 */
import {titleToCamelProperties} from '../../src/util';
import oauth from 'oauth';
import session from '../../src/session';

export interface ITest {
  args: any;
  error?: string;
  path: string;
  title: string;
}

export interface ITestApi {
  fixture: Record<string, any>,
  fn: Function,
  includeVersion?: boolean,
  method: string,
  tests: ITest[]
}

/**
 * Test the API.
 * @param {Object} options - Options.
 * @param {Object} [options.fixture] - API fixture JSON.
 * @param {Function} [options.fn] - The function to test.
 * @param {boolean} [options.includeVersion] - Include version in path.
 * @param {string} [options.method] - The HTTP method.
 * @param {ITest[]} [options.tests] - The tests to run.
 */
export const testApi = ({fixture, fn, includeVersion = true, method, tests}: ITestApi): void => {
  let performSecureRequestSpy;
  let setClientOptionsSpy;

  beforeAll(() => {
    performSecureRequestSpy = jest.fn();
    setClientOptionsSpy = jest.fn();

    jest.spyOn(oauth, 'OAuth').mockImplementation(() => ({
      _performSecureRequest: performSecureRequestSpy,
      setClientOptions: setClientOptionsSpy
    }));

    session.initialize({consumerKey: 'key', consumerSecret: 'secret'});
    session.accessToken = 'access-token';
    session.accessTokenSecret = 'access-token-secret';
  });

  tests.forEach(({args, error, path, title}: ITest): void => it(title, () => {
    let threwError = false;

    performSecureRequestSpy.mockImplementation((...args) => {
      const callback = args.pop();
      error ? callback(error) : callback(null, JSON.stringify({[fn.name]: fixture}));
    });

    return fn.apply(null, [args])
      .then((res) => {
        expect(res).toEqual(titleToCamelProperties(fixture));
        expect(performSecureRequestSpy).toHaveBeenCalledWith(
          'access-token',
          'access-token-secret',
          method,
          `https://apisb.etrade.com${includeVersion ? '/v1' : ''}${path}`,
          null,
          undefined,
          'application/json',
          expect.any(Function)
        );
      })
      .catch((err: Error) => {
        expect(err).toEqual(error);
        threwError = true;
      })
      .finally(() => expect(threwError).toBe(!!error));
  }));
};