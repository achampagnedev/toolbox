"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pipe_1 = __importDefault(require("./pipe"));
const add1 = (nb) => nb + 1;
const doubleIt = (nb) => nb * 2;
const divideBy2 = (nb) => nb / 2;
test("Check that the function composition executes in the right order with the right result", () => {
    expect((0, pipe_1.default)([add1, doubleIt])(5)).toEqual(11);
    expect((0, pipe_1.default)([doubleIt, add1])(12)).toEqual(26);
    expect((0, pipe_1.default)([divideBy2, doubleIt, add1])(12)).toEqual(13);
    expect((0, pipe_1.default)([doubleIt, add1, divideBy2, add1])(2)).toEqual(5);
});
