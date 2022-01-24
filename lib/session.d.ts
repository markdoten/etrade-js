import type { IEtradeConfig, IFetchResponse } from './interfaces';
interface IFetchOptions {
    body?: Record<string, any>;
    headers?: string[];
    isOAuth?: boolean;
    method?: 'DELETE' | 'GET' | 'POST' | 'PUT';
    path: string;
    query?: any;
}
/**
 * Session class.
 * @class
 */
declare class Session {
    private _accessToken;
    private _accessTokenSecret;
    private _consumerKey;
    private _consumerSecret;
    private _environment;
    private _oauth;
    private _oauthRequestToken;
    private _oauthRequestTokenSecret;
    /**
     * Initializes the session.
     * @param config - ETrade config object.
     * @param [config.accessToken] - The access token to set.
     * @param [config.accessTokenSecret] - The access token secret to set.
     * @param [config.consumerKey] - Consumer key to set.
     * @param [config.consumerSecret] - Consumer secret to set.
     * @param [config.environment] - ETrade environment to set.
     */
    initialize({ accessToken, accessTokenSecret, consumerKey, consumerSecret, environment }: IEtradeConfig): void;
    /**
     * Complete the oauth process with the verifier string.
     * @async
     * @param verifier - OAuth verifier string.
     * @returns {Promise<void>} - Complete promise.
     */
    oauthComplete(verifier: string): Promise<void>;
    /**
     * Start the oauth process.
     * @async
     * @returns {Promise<string>} - String authorize URL.
     */
    oauthStart(): Promise<string>;
    /**
     * Send an HTTP request.
     * @async
     * @param options - Fetch options.
     * @param [options.body] - Request body.
     * @param [options.isOAuth] - Whether the request is an OAuth request.
     * @param [options.method] - Request path.
     * @param [options.path] - Request path.
     * @param [options.query] - Request URL query params.
     * @returns {Promise<IFetchResponse>} - The request promise.
     */
    request<T extends IFetchResponse>({ body, isOAuth, method, path, query }: IFetchOptions): Promise<T>;
    /**
     * Set access token and access token secret.
     * @param accessToken - The access token.
     * @param accessTokenSecret - The access token secret.
     */
    setToken(accessToken: string, accessTokenSecret: string): void;
    /**
     * JSON format of this class.
     * @returns {Object} - JSON format of this class.
     */
    toJSON(): Record<string, any>;
}
declare const _default: Session;
export default _default;
