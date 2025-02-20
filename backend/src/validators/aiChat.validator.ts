import { check } from "express-validator";

const validatePrompt = [
  check("prompt")
    .notEmpty()
    .withMessage("Prompt is required")
];

export default validatePrompt;