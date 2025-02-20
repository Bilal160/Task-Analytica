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
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAiChat = void 0;
const http_status_codes_1 = require("http-status-codes");
const openAiChat_1 = require("../services/openAiChat");
const openAiChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { prompt } = req.body;
        const response = yield (0, openAiChat_1.chatFunc)(prompt);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            message: "Chat response",
            data: {
                response,
            },
        });
    }
    catch (error) {
        res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message,
        });
    }
});
exports.openAiChat = openAiChat;
