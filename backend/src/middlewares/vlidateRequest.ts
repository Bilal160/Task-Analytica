import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const { validationResult } = require("express-validator");
const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
     res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: errors.array({ onlyFirstError: true })[0].msg });
      return
  }
  next();
};
export { validateRequest };
