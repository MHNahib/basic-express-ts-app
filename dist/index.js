"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./src/routes");
const app = (0, express_1.default)();
app.use("/", routes_1.home);
const port = Number(process.env.PORT || 3000);
const server = app.listen(port, () => console.log(`🚀 on ${port}`));
