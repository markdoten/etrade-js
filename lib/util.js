"use strict";
/**
 * @file Utilities.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleToCamel = exports.titleToCamelProperties = void 0;
/**
 * Recursively convert title case object properties into camel case until a
 * child has no title case properties.
 * @param {Object} obj - Object with title case properties to convert.
 * @returns {Object} - Converted object.
 */
const titleToCamelProperties = (obj) => {
    const _obj = Object.assign({}, obj);
    for (const key in _obj) {
        const camelCase = (0, exports.titleToCamel)(key);
        _obj[camelCase] = _obj[key];
        if (camelCase !== key) {
            delete _obj[key];
        }
        if (Array.isArray(_obj[camelCase])) {
            _obj[camelCase] = _obj[camelCase].map((obj) => (0, exports.titleToCamelProperties)(obj));
        }
        else if (typeof _obj[camelCase] === 'object') {
            _obj[camelCase] = (0, exports.titleToCamelProperties)(_obj[camelCase]);
        }
    }
    return _obj;
};
exports.titleToCamelProperties = titleToCamelProperties;
/**
 * Convert a string from title case to camel case.
 * @param {string} str - The string to convert to camel case.
 * @returns {string} - Converted string.
 */
const titleToCamel = (str) => `${str[0].toLowerCase()}${str.substring(1)}`;
exports.titleToCamel = titleToCamel;
//# sourceMappingURL=util.js.map