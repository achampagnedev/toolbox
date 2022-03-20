const isBalanced = (expression: string) => {
  if (expression === "") return true;

  const expressionArr: string[] = expression.split("");
  let stack: string[] = [];
  const openBrackets = new Set(["(", "{", "["]);
  const correspondences: { [index: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const c of expressionArr) {
    if (openBrackets.has(c)) {
      stack.push(c);
    } else if (correspondences[c] && stack.pop() !== correspondences[c]) {
      return false;
    }
  }

  return stack.length === 0;
};

export default isBalanced;
