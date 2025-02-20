import { Document } from "mongoose";
export interface ItemsInterface extends Document {
  name: string;
  description: string;
}
