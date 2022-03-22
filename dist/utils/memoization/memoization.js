"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const memoize = (cb) => {
    const cache = {};
    return (...args) => {
        const strArgs = `${args}`;
        if (!cache[strArgs]) {
            cache[strArgs] = cb(...args);
        }
        return cache[strArgs];
    };
};
exports.default = memoize;
