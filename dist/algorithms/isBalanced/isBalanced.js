"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isBalanced = (expression) => {
    if (expression === "")
        return true;
    const expressionArr = expression.split("");
    let stack = [];
    const openBrackets = new Set(["(", "{", "["]);
    const correspondences = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    for (const c of expressionArr) {
        if (openBrackets.has(c)) {
            stack.push(c);
        }
        else if (correspondences[c] && stack.pop() !== correspondences[c]) {
            return false;
        }
    }
    return stack.length === 0;
};
exports.default = isBalanced;
