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
class CardsController {
    getByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idCategory = parseInt(req.params.id);
                const client = yield dbconnector_1.default.connect();
                const sql = "SELECT * FROM card WHERE id_category = $1";
                const { rows } = yield client.query(sql, [idCategory]);
                const cards = [];
                rows.forEach(element => {
                    cards.push({
                        id: element.id,
                        idCategory: element.id_category,
                        word: element.word,
                        translate: element.translate,
                        sound: element.sound,
                        imageSRC: element.img,
                    });
                });
                client.release();
                res.send(cards);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    setCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idCategory, word, translate, img, sound } = req.body;
                const client = yield dbconnector_1.default.connect();
                const sql = `INSERT INTO card (id_category, word, translate, img, sound)
      VALUES ($1, $2, $3, $4, %5)`;
                yield client.query(sql, [idCategory, word, translate, img, sound]);
                client.release();
                res.sendStatus(200);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    updateCard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const { idCategory, word, translate, img, sound } = req.body;
                const client = yield dbconnector_1.default.connect();
                const sql = `UPDATE card SET idCategory = $1, word = $2, translate = $3, img = $4,
      sound = $5 WHERE id = $6`;
                yield client.query(sql, [idCategory, word, translate, img, sound, id]);
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
                const sql = `DELETE FROM card WHERE id = $1`;
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
exports.default = CardsController;
//# sourceMappingURL=CardsController.js.map