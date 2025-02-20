import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { dbConnection } from "./config/dbConnection";
import { aiChatRouter, itemsRouter } from "./routes";
import { StatusCodes } from "http-status-codes";
dotenv.config();
const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/items-api", itemsRouter)
app.use("/api/v1/chat", aiChatRouter)
app.use("*", (req: Request, res: Response) => {
  res.status(StatusCodes.BAD_GATEWAY).json({
    error: "Invalid Path",
  });
});
dbConnection();
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
