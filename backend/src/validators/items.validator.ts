import { check, param } from "express-validator";

const validateAddItem = [
  check("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),
  check("description")
    .notEmpty()
    .withMessage("Description is required")
    .isString()
    .withMessage("Description must be a string"),
];

const validateDeleteItem = [
  param("id")
    .notEmpty()
    .withMessage("Item ID is required")
    .isMongoId()
    .withMessage("Not a Valid Item ID"),
];


export { validateAddItem, validateDeleteItem };
