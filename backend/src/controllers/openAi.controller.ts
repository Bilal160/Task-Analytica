import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { chatFunc } from "../services/openAiChat";

const openAiChat = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const response = await chatFunc(prompt);
    res.status(StatusCodes.OK).json({
      message: "Chat response",
      data: {
        response,
      },
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    });
  }
};

export { openAiChat };
