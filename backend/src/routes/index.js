"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiChatRouter = exports.itemsRouter = void 0;
var items_routes_1 = require("./items.routes");
Object.defineProperty(exports, "itemsRouter", { enumerable: true, get: function () { return __importDefault(items_routes_1).default; } });
var aiChat_routes_1 = require("./aiChat.routes");
Object.defineProperty(exports, "aiChatRouter", { enumerable: true, get: function () { return __importDefault(aiChat_routes_1).default; } });
