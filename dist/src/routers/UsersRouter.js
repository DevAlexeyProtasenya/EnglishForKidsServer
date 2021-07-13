"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
const router = express_1.Router();
const usersController = new UsersController_1.default();
router.get('/', usersController.get);
router.post('/', usersController.set);
exports.default = router;
//# sourceMappingURL=UsersRouter.js.map