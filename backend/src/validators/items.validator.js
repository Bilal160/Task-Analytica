"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteItem = exports.validateAddItem = void 0;
const express_validator_1 = require("express-validator");
const validateAddItem = [
    (0, express_validator_1.check)("name")
        .notEmpty()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name must be a string"),
    (0, express_validator_1.check)("description")
        .notEmpty()
        .withMessage("Description is required")
        .isString()
        .withMessage("Description must be a string"),
];
exports.validateAddItem = validateAddItem;
const validateDeleteItem = [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .withMessage("Item ID is required")
        .isMongoId()
        .withMessage("Not a Valid Item ID"),
];
exports.validateDeleteItem = validateDeleteItem;
