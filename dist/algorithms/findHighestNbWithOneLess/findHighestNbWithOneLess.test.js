"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findHighestNbWithOneLess_1 = __importDefault(require("./findHighestNbWithOneLess"));
test("Check all combinations of numbers with", () => {
    expect((0, findHighestNbWithOneLess_1.default)(15958, 5)).toEqual(1958);
    expect((0, findHighestNbWithOneLess_1.default)(-5859, 5)).toEqual(-589);
    expect((0, findHighestNbWithOneLess_1.default)(-5000, 5)).toEqual(-0);
    expect((0, findHighestNbWithOneLess_1.default)(-23959, 9)).toEqual(-2359);
    expect((0, findHighestNbWithOneLess_1.default)(829826, 2)).toEqual(89826);
});
