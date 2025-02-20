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
exports.chatFunc = void 0;
const openAi_1 = __importDefault(require("../config/openAi"));
const chatFunc = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield openAi_1.default.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are an AI assistant.",
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.7,
            max_tokens: 150,
        });
        return response.choices[0].message.content;
    }
    catch (error) {
        return error.message;
    }
});
exports.chatFunc = chatFunc;
