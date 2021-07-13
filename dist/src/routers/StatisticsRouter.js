"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const StatisticsController_1 = __importDefault(require("../controllers/StatisticsController"));
const router = express_1.Router();
const statisticsController = new StatisticsController_1.default();
router.get('/:id', statisticsController.getByid);
router.get('/', statisticsController.getAll);
router.post('/', statisticsController.setStat);
router.put('/:id', statisticsController.updateStat);
router.delete('/:id', statisticsController.deleteStat);
exports.default = router;
//# sourceMappingURL=StatisticsRouter.js.map