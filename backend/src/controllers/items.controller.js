"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.getAllItems = exports.addItem = void 0;
const Items_1 = __importDefault(require("../models/Items"));
const http_status_codes_1 = require("http-status-codes");
const express_validator_1 = require("express-validator");
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ code: 400, error: errors.array()[0].msg });
            return;
        }
        const { name, description } = req.body;
        const item = new Items_1.default({ name, description });
        yield item.save();
        res.status(http_status_codes_1.StatusCodes.CREATED).json({
            message: "Item added successfully",
            data: {
                item,
            },
        });
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
});
exports.addItem = addItem;
const getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield Items_1.default.find();
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "All items",
            data: {
                items,
            },
        });
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
});
exports.getAllItems = getAllItems;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const item = yield Items_1.default.findByIdAndDelete(id);
        if (!item) {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                message: "Item not found",
            });
            return;
        }
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "Item deleted successfully",
        });
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
});
exports.deleteItem = deleteItem;
