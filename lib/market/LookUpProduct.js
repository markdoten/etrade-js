"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Look Up Product.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Returns information about market events.
 * @async
 * @param request - The request object.
 * @param [request.search] - The search request.
 * @returns {Promise<ILookUpProductResponse>} - Information about market events.
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definition/Lookup|Look Up Product Docs}
 */
exports.default = ({ search }) => session_1.default.request({ path: `/market/lookup/${search}` });
//# sourceMappingURL=LookUpProduct.js.map