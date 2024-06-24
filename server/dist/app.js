"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv").config();
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const error_1 = require("./middleware/error");
// BODY PARSER
exports.app.use(express_1.default.json({ limit: "50mb" }));
// COOKIE PARSER
exports.app.use((0, cookie_parser_1.default)());
// CORS [CROSS ORIGIN RESOURCE SHARING]
exports.app.use((0, cors_1.default)({
    origin: process.env.ORIGIN,
}));
// ROUTES
const user_route_1 = __importDefault(require("./routes/user.route"));
exports.app.use("api/v1", user_route_1.default);
// TESTING API
exports.app.get("/test", (req, res, next) => {
    res.status(200).json({ success: true, message: "API is working" });
});
// UNKNOWN ROUTE
exports.app.all("*", (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found!`);
    err.statusCode = 404;
    next(err);
});
exports.app.use(error_1.ErrorMiddleware);
