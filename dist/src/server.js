"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const UsersRouter_1 = __importDefault(require("./routers/UsersRouter"));
const CardsRouter_1 = __importDefault(require("./routers/CardsRouter"));
const CategoryRouter_1 = __importDefault(require("./routers/CategoryRouter"));
const dbconnector_1 = __importDefault(require("./dbconfig/dbconnector"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.start = (port) => {
            return new Promise((resolve, reject) => {
                this.app.listen(port, () => {
                    resolve(port);
                }).on('error', (err) => reject(err));
            });
        };
        this.app = express_1.default();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }
    config() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json({ limit: '1mb' })); // 100kb default
    }
    dbConnect() {
        dbconnector_1.default.connect(function (err) {
            if (err)
                throw new Error(err);
            console.log('Connected');
        });
    }
    routerConfig() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.static('public'));
        this.app.use('/users', UsersRouter_1.default);
        this.app.use('/card', CardsRouter_1.default);
        this.app.use('/categories', CategoryRouter_1.default);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map