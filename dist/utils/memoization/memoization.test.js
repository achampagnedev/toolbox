"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoization_1 = __importDefault(require("./memoization"));
const generateNumbers = (len, max) => {
    return Array.from({ length: len }, () => Math.floor(Math.random() * max));
};
const data = generateNumbers(1000, 10);
const sumNumbersFrom = (n) => {
    return data.slice(n).reduce((a, b) => a + b);
};
test("Check if the second access to the memoized function result is shorter", () => {
    const memoSumNumbersFrom = (0, memoization_1.default)(sumNumbersFrom);
    const start1 = performance.now();
    const result1 = memoSumNumbersFrom(100);
    const end1 = performance.now();
    const duration1 = end1 - start1;
    const start2 = performance.now();
    const result2 = memoSumNumbersFrom(100);
    const end2 = performance.now();
    const duration2 = end2 - start2;
    expect(duration2).toBeLessThan(duration1 / 10);
});
