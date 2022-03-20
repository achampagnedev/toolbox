"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isBalanced_1 = __importDefault(require("./isBalanced"));
test("Check if the expression is balanced", () => {
    expect((0, isBalanced_1.default)("{{}")).toBeFalsy();
    expect((0, isBalanced_1.default)("")).toBeTruthy();
    expect((0, isBalanced_1.default)("{[()]}")).toBeTruthy();
    expect((0, isBalanced_1.default)("]{{]]")).toBeFalsy();
    expect((0, isBalanced_1.default)("[((]))")).toBeFalsy();
});
