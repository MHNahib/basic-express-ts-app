"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_1 = require("http");
const response_1 = __importDefault(require("../utils/response"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    (0, response_1.default)(res, http_1.STATUS_CODES.ACCEPTED, true, { say: "hello world" }, "Accepted");
});
exports.default = router;
