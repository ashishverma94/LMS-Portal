"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const app_1 = require("./app");
const db_1 = __importDefault(require("./utils/db"));
// CREATE SERVER
app_1.app.listen(3000, () => {
    console.log(`Server is connected with port 3000`);
    (0, db_1.default)();
});
