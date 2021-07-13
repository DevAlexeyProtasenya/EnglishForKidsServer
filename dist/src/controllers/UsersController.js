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
class UsersController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login } = req.body;
                const client = yield dbconnector_1.default.connect();
                const sql = "SELECT * FROM users WHERE login LIKE $1";
                const { rows } = yield client.query(sql, [login]);
                const todos = rows;
                client.release();
                if (todos[0].password === 'admin') {
                    res.send(todos[0].password);
                }
                else {
                    res.sendStatus(404);
                }
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
    set(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield dbconnector_1.default.connect();
                const { login, password } = req.body;
                const sql = `INSERT INTO users (login, password) VALUES ($1, $2)`;
                console.log(yield client.query(sql, [login, password]));
                client.release();
                // res.send();
                res.sendStatus(200);
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map