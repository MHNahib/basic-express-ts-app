"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const response = (res, code, status, data, mesage) => {
    if (!mesage)
        mesage = (0, http_status_codes_1.getReasonPhrase)(code);
    return res.status(code).json({
        status,
        data,
        mesage,
    });
};
exports.default = response;
