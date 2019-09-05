"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is Connected');
});
////const espol = yield database_1.default.query('select usuario.id, usuario.identificacion, persona.cedula, persona.nombre, persona.apellido from usuario inner join persona on usuario.id_persona=persona.id');
exports.default = pool;
