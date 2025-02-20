import mongoose, { Model, Schema, Document } from "mongoose";
import { ItemsInterface } from "../interfaces";

export interface ItemsDocument extends ItemsInterface, Document {}
const ItemsSchema: Schema<ItemsDocument> = new Schema<ItemsDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Items: Model<ItemsDocument> = mongoose.model<ItemsDocument>(
  "Items",
  ItemsSchema
);
export default Items;
