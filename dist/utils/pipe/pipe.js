"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe = (arr) => (val) => arr.reduceRight((fn1, fn2) => fn2(fn1), val);
exports.default = pipe;
