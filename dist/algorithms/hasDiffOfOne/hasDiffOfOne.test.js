"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hasDiffOfOne_1 = __importDefault(require("./hasDiffOfOne"));
test("Check if there are two numbers who have a difference of 1 together", () => {
    expect((0, hasDiffOfOne_1.default)([7])).toBeFalsy();
    expect((0, hasDiffOfOne_1.default)([4, 3])).toBeTruthy();
    expect((0, hasDiffOfOne_1.default)([11, 1, 8, 12, 14])).toBeTruthy();
    expect((0, hasDiffOfOne_1.default)([5, 5, 5, 5])).toBeFalsy();
    expect((0, hasDiffOfOne_1.default)([6, 1, 8, 12, 14])).toBeFalsy();
});
