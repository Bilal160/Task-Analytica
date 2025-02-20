"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const aiChat_validator_1 = __importDefault(require("../validators/aiChat.validator"));
const router = (0, express_1.Router)();
router.post("/generate", aiChat_validator_1.default, middlewares_1.validateRequest, controllers_1.openAiChat);
exports.default = router;
