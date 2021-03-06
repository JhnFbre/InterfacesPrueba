"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EspolControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const espol = yield database_1.default.query('select usuario.id_persona, usuario.identificacion, persona.cedula, persona.nombres, persona.apellidos from usuario inner join persona on usuario.id_persona=persona.id_persona');
            res.json(espol);
            console.log("leyendo");
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('select usuario.identificacion, persona.cedula, persona.nombres, persona.apellidos from usuario inner join persona on usuario.id_persona=persona.id_persona WHERE persona.cedula = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "La persona no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO persona set ?', [req.body]);
            res.json({ message: 'Person Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE persona set ? WHERE id_persona = ?', [req.body, id]);
            res.json({ message: "La persona fue actualizado" });
        });
    }
}
const espolControllers = new EspolControllers();
exports.default = espolControllers;
//ecto, lo he hecho y funciona. ;) Por si ha alguien le puede servir:  "npm i  promise-mysql@3.3.2"
//getone por list, se puede filtrar
