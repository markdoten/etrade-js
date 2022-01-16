"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertStatus = exports.AlertResult = exports.AlertCategory = exports.SortOrder = void 0;
/**
 * @file Alerts enums.
 */
var enums_1 = require("../../enums");
Object.defineProperty(exports, "SortOrder", { enumerable: true, get: function () { return enums_1.SortOrder; } });
var AlertCategory;
(function (AlertCategory) {
    AlertCategory["ACCOUNT"] = "ACCOUNT";
    AlertCategory["STOCK"] = "STOCK";
})(AlertCategory = exports.AlertCategory || (exports.AlertCategory = {}));
var AlertResult;
(function (AlertResult) {
    AlertResult["ERROR"] = "ERROR";
    AlertResult["SUCCESS"] = "SUCCESS";
})(AlertResult = exports.AlertResult || (exports.AlertResult = {}));
var AlertStatus;
(function (AlertStatus) {
    AlertStatus["DELETED"] = "DELETED";
    AlertStatus["READ"] = "READ";
    AlertStatus["UNREAD"] = "UNREAD";
})(AlertStatus = exports.AlertStatus || (exports.AlertStatus = {}));
//# sourceMappingURL=enums.js.map