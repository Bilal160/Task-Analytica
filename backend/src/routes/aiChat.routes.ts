import { Router } from "express";
import { validateRequest } from "../middlewares";
import { openAiChat } from "../controllers";
import validatePrompt from "../validators/aiChat.validator";
const router = Router();

router.post("/generate", validatePrompt, validateRequest, openAiChat);

export default router;
