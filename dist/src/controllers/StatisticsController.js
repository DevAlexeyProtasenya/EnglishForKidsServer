"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnector_1 = __importDefault(require("../dbconfig/dbconnector"));
class StatisticsController {
    getByid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const client = yield dbconnector_1.default.connect();
                const sql = "SELECT * FROM statistics WHERE id = $1";
                const { rows } = yield client.query(sql, [id]);
                const stat = rows;
                client.release();
                res.send(stat);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield dbconnector_1.default.connect();
                const sql = "SELECT * FROM statistics WHERE id = $1";
                const { rows } = yield client.query(sql);
                const stats = rows;
                client.release();
                res.send(stats);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    setStat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { clicks, correct, wrong } = req.body;
                const client = yield dbconnector_1.default.connect();
                const sql = `INSERT INTO statistics (clicks, correct, wrong)
      VALUES ($1, $2, $3)`;
                yield client.query(sql, [clicks, correct, wrong]);
                client.release();
                res.sendStatus(200);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    updateStat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const { clicks, correct, wrong } = req.body;
                const client = yield dbconnector_1.default.connect();
                const sql = `UPDATE statistics SET clicks = $1, correct = $2, wrong = $3 WHERE id = $4`;
                yield client.query(sql, [clicks, correct, wrong, id]);
                client.release();
                res.sendStatus(200);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    deleteStat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const client = yield dbconnector_1.default.connect();
                const sql = `DELETE FROM statistics WHERE id = $1`;
                yield client.query(sql, [id]);
                client.release();
                res.sendStatus(200);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.default = StatisticsController;
//# sourceMappingURL=StatisticsController.js.map