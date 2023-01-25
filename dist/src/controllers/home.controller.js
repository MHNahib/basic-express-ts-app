"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const response_1 = __importDefault(require("../utils/response"));
const homecontroller = (req, res) => {
    (0, response_1.default)(res, http_status_codes_1.StatusCodes.ACCEPTED, true, { say: "hello world" }, "Accepted");
};
exports.default = homecontroller;
