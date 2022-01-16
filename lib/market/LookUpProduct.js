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
 * @param {ILookUpProductRequest} request - The request object.
 * @param {string} [request.search] - The search request.
 * @returns {Promise<ILookUpProductResponse>} - Information about market events.
 */
exports.default = ({ search }) => session_1.default.request({ path: `/market/lookup/${search}` });
//# sourceMappingURL=LookUpProduct.js.map