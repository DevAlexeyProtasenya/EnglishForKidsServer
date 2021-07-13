"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CardsController_1 = __importDefault(require("../controllers/CardsController"));
const router = express_1.Router();
const cardsController = new CardsController_1.default();
router.get('/:id', cardsController.getByCategory);
router.post('/', cardsController.setCard);
router.put('/:id', cardsController.updateCard);
router.delete('/:id', cardsController.deleteCard);
exports.default = router;
//# sourceMappingURL=CardsRouter.js.map