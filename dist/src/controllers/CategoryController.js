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
class CategoryController {
    getCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const client = yield dbconnector_1.default.connect();
                const sql = "SELECT * FROM category WHERE id = $1";
                const { rows } = yield client.query(sql, [id]);
                const card = rows;
                client.release();
                res.send(card);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    getAllCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield dbconnector_1.default.connect();
                const sql = "SELECT * FROM category";
                const { rows } = yield client.query(sql);
                const cards = rows;
                client.release();
                res.send(cards);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    setCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const client = yield dbconnector_1.default.connect();
                const sql = `INSERT INTO category (name) VALUES ($1)`;
                yield client.query(sql, [name]);
                client.release();
                res.sendStatus(200);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const { name } = req.body;
                const client = yield dbconnector_1.default.connect();
                const sql = `UPDATE category SET name = $1 WHERE id = $2`;
                yield client.query(sql, [name, id]);
                client.release();
                res.sendStatus(200);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    deleteCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const client = yield dbconnector_1.default.connect();
                const sql = `DELETE FROM category WHERE id = $1`;
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
exports.default = CategoryController;
//# sourceMappingURL=CategoryController.js.map