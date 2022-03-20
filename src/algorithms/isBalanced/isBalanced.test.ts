import isBalanced from "./isBalanced";

test("Check if the expression is balanced", () => {
  expect(isBalanced("{{}")).toBeFalsy();
  expect(isBalanced("")).toBeTruthy();
  expect(isBalanced("{[()]}")).toBeTruthy();
  expect(isBalanced("]{{]]")).toBeFalsy();
  expect(isBalanced("[((]))")).toBeFalsy();
});
