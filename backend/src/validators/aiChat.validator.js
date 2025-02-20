"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validatePrompt = [
    (0, express_validator_1.check)("prompt")
        .notEmpty()
        .withMessage("Prompt is required")
];
exports.default = validatePrompt;
