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
const server_1 = require("../../server");
const supertest_1 = __importDefault(require("supertest"));
const server_2 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_2.default);
describe('should be defined', () => {
    it('add function should be defined', () => {
        expect((0, server_1.add)(2, 2)).toBeDefined();
    });
});
describe("should be functioned", () => {
    it("add function should be defined", () => {
        const res = (0, server_1.add)(2, 2);
        expect(res).toBe(4);
    });
    it("test api", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get("/");
        expect(res.text).toBe('Hello World !');
    }));
});
