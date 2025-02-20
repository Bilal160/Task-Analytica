import { Request, Response } from "express";
import Items from "../models/Items";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";

const addItem = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ code: 400, error: errors.array()[0].msg });
      return;
    }
    const { name, description } = req.body;
    const item = new Items({ name, description });
    await item.save();
    res.status(StatusCodes.CREATED).json({
      message: "Item added successfully",
      data: {
        item,
      },
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    });
  }
};

const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await Items.find();
    res.status(StatusCodes.OK).json({
      message: "All items",
      data: {
        items,
      },
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    });
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await Items.findByIdAndDelete(id);
    if (!item) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: "Item not found",
      });
      return;
    }
    res.status(StatusCodes.OK).json({
      message: "Item deleted successfully",
    });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    });
  }
};

export { addItem, getAllItems, deleteItem };
