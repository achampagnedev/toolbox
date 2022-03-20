"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose = (arr) => (val) => arr.reduce((fn1, fn2) => fn2(fn1), val);
exports.default = compose;
