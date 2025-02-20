"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const http_status_codes_1 = require("http-status-codes");
const { validationResult } = require("express-validator");
const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .json({ error: errors.array({ onlyFirstError: true })[0].msg });
        return;
    }
    next();
};
exports.validateRequest = validateRequest;
