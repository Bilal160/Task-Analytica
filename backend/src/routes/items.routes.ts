import { Router } from "express";
import {
  validateAddItem,
  validateDeleteItem,
} from "../validators/items.validator";
import { addItem, deleteItem, getAllItems } from "../controllers/index";
import { validateRequest } from "../middlewares";
const router = Router();

router.post("/items", validateAddItem, validateRequest, addItem);
router.get("/items", getAllItems);
router.delete(
  "/items/:id",
  validateDeleteItem,
  validateRequest,
  deleteItem
);

export default router;
