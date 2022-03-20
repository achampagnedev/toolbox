"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findHightNbWithOneLess = (nb, nbToRemove) => {
    const arrNb = `${nb}`.split("");
    let numberCombinations = [];
    for (let i = 0, len = arrNb.length; i < len; i++) {
        if (arrNb[i] === `${nbToRemove}`) {
            const currentNumber = [
                ...arrNb.slice(0, i),
                ...arrNb.slice(i + 1, arrNb.length),
            ].join("");
            numberCombinations.push(+currentNumber);
        }
    }
    return Math.max(...numberCombinations);
};
exports.default = findHightNbWithOneLess;
