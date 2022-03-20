"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeL = (nbTimes) => {
    let resultL = ``;
    for (let i = 1; i <= nbTimes; i++) {
        if (i !== nbTimes) {
            resultL += `L${" ".repeat(nbTimes - 1)}\n`;
        }
        else {
            resultL += `${"L".repeat(nbTimes)}`;
        }
    }
    return resultL;
};
console.log(makeL(6));
exports.default = makeL;
