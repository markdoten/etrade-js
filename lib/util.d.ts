/**
 * @file Utilities.
 */
/**
 * Recursively convert title case object properties into camel case until a
 * child has no title case properties.
 * @param obj - Object with title case properties to convert.
 * @returns {Object} - Converted object.
 */
export declare const titleToCamelProperties: (obj: Record<string, any>) => Record<string, any>;
/**
 * Convert a string from title case to camel case.
 * @param str - The string to convert to camel case.
 * @returns {string} - Converted string.
 */
export declare const titleToCamel: (str: string) => string;
