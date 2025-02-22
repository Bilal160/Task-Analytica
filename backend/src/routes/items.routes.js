"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_validator_1 = require("../validators/items.validator");
const index_1 = require("../controllers/index");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.post("/items", items_validator_1.validateAddItem, middlewares_1.validateRequest, index_1.addItem);
router.get("/items", index_1.getAllItems);
router.delete("/items/:id", items_validator_1.validateDeleteItem, middlewares_1.validateRequest, index_1.deleteItem);
exports.default = router;
