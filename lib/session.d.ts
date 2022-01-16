import type { IEtradeConfig, IFetchResponse } from '../interfaces';
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
    private _consumerKey;
    private _consumerSecret;
    private _environment;
    private _oauth;
    accessToken: string;
    accessTokenSecret: string;
    oauthRequestToken: string;
    oauthRequestTokenSecret: string;
    /**
     * Initializes the session.
     * @param {IEtradeConfig} config - ETrade config object.
     * @param {string} [config.consumerKey] - Consumer key to set.
     * @param {string} [config.consumerSecret] - Consumer secret to set.
     */
    initialize({ accessToken, accessTokenSecret, consumerKey, consumerSecret, environment }: IEtradeConfig): void;
    /**
     * Complete the oauth process with the verifier string.
     * @async
     * @param {string} verifier - OAuth verifier string.
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
     * @param {Object} options - Fetch options.
     * @param {Object} [options.body] - Request body.
     * @param {boolean} [options.isOAuth] - Whether the request is an OAuth request.
     * @param {string} [options.method] - Request path.
     * @param {string} [options.path] - Request path.
     * @param {Object} [options.query] - Request URL query params.
     * @returns {Promise<IFetchResponse>} - The request promise.
     */
    request<T extends IFetchResponse>({ body, isOAuth, method, path, query }: IFetchOptions): Promise<T>;
    /**
     * JSON format of this class.
     * @returns {Object} - JSON format of this class.
     */
    toJSON(): Record<string, any>;
}
declare const _default: Session;
export default _default;
