"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Session.
 */
const enums_1 = require("./enums");
const oauth_1 = require("oauth");
const util_1 = require("./util");
const HOSTNAMES = {
    [enums_1.Environment.LIVE]: 'https://api.etrade.com',
    [enums_1.Environment.SANDBOX]: 'https://apisb.etrade.com'
};
const REQUEST_MAX_DURATION = 1000 * 10;
/**
 * Session class.
 * @class
 */
class Session {
    constructor() {
        this._oauth = null;
    }
    /**
     * Initializes the session.
     * @param config - ETrade config object.
     * @param [config.accessToken] - The access token to set.
     * @param [config.accessTokenSecret] - The access token secret to set.
     * @param [config.consumerKey] - Consumer key to set.
     * @param [config.consumerSecret] - Consumer secret to set.
     * @param [config.environment] - ETrade environment to set.
     */
    initialize({ accessToken, accessTokenSecret, consumerKey, consumerSecret, environment = enums_1.Environment.SANDBOX }) {
        this._accessToken = accessToken;
        this._accessTokenSecret = accessTokenSecret;
        this._consumerKey = consumerKey;
        this._consumerSecret = consumerSecret;
        this._environment = environment;
        this._oauth = new oauth_1.OAuth(`${HOSTNAMES[environment]}/oauth/request_token`, `${HOSTNAMES[environment]}/oauth/access_token`, consumerKey, consumerSecret, '1.0', undefined, 'HMAC-SHA1');
        this._oauth.setClientOptions({
            accessTokenHttpMethod: 'GET',
            followRedirects: false,
            requestTokenHttpMethod: 'GET'
        });
    }
    /**
     * Complete the oauth process with the verifier string.
     * @async
     * @param verifier - OAuth verifier string.
     * @returns {Promise<void>} - Complete promise.
     */
    oauthComplete(verifier) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                this._oauth.getOAuthAccessToken(this._oauthRequestToken, this._oauthRequestTokenSecret, verifier, (error, oAuthAccessToken, oAuthAccessTokenSecret) => {
                    if (error) {
                        return rej(error);
                    }
                    this._accessToken = oAuthAccessToken;
                    this._accessTokenSecret = oAuthAccessTokenSecret;
                    res();
                });
            });
        });
    }
    /**
     * Start the oauth process.
     * @async
     * @returns {Promise<string>} - String authorize URL.
     */
    oauthStart() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                this._oauth.getOAuthRequestToken((error, oAuthToken, oAuthTokenSecret) => {
                    if (error) {
                        return rej(error);
                    }
                    this._oauthRequestToken = oAuthToken;
                    this._oauthRequestTokenSecret = oAuthTokenSecret;
                    const key = encodeURIComponent(this._consumerKey);
                    const token = encodeURIComponent(oAuthToken);
                    res(`https://us.etrade.com/e/t/etws/authorize?key=${key}&token=${token}`);
                });
            });
        });
    }
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
    request({ body, isOAuth = false, method = 'GET', path, query = {} }) {
        const extension = isOAuth ? '' : '.json';
        const version = isOAuth ? '' : `/v1`;
        const url = new URL(`${HOSTNAMES[this._environment]}${version}${path}${extension}`);
        Object.keys(query).forEach((key) => {
            query[key] === undefined || url.searchParams.append(key, query[key]);
        });
        return new Promise((res, rej) => this._oauth._performSecureRequest(this._accessToken, this._accessTokenSecret, method, url.toString(), null, // extra_params,
        body ? JSON.stringify(body) : undefined, extension ? 'application/json' : null, (error, response, result) => {
            if (error) {
                return rej(error);
            }
            try {
                const [data] = Object.values(JSON.parse(response));
                res((0, util_1.titleToCamelProperties)(data || {}));
            }
            catch (e) {
                res({ message: response });
            }
        }));
    }
    /**
     * Set access token and access token secret.
     * @param accessToken - The access token.
     * @param accessTokenSecret - The access token secret.
     */
    setToken(accessToken, accessTokenSecret) {
        this._accessToken = accessToken;
        this._accessTokenSecret = accessTokenSecret;
    }
    /**
     * JSON format of this class.
     * @returns {Object} - JSON format of this class.
     */
    toJSON() {
        return {
            accessToken: this._accessToken,
            accessTokenSecret: this._accessTokenSecret,
            environment: this._environment
        };
    }
}
exports.default = new Session;
//# sourceMappingURL=session.js.map