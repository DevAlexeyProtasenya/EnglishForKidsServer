"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const router = express_1.Router();
const categoryController = new CategoryController_1.default();
router.get('/:id', categoryController.getCategory);
router.get('/', categoryController.getAllCategory);
router.post('/', categoryController.setCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCard);
exports.default = router;
//# sourceMappingURL=CategoryRouter.js.map