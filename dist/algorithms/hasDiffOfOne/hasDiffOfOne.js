"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hasDiffOfOne = (nbArr) => {
    if (nbArr.length < 2)
        return false;
    for (let i = 0, len = nbArr.length; i < len; i++) {
        const hasPlus1ValueAvailable = nbArr.indexOf(nbArr[i] + 1) !== -1;
        const hasMinus1ValueAvailable = nbArr.indexOf(nbArr[i] - 1) !== -1;
        if (hasPlus1ValueAvailable || hasMinus1ValueAvailable) {
            return true;
        }
    }
    return false;
};
exports.default = hasDiffOfOne;
