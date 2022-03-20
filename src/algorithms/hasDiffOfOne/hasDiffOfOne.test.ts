import hasDiffOfOne from "./hasDiffOfOne";

test("Check if there are two numbers who have a difference of 1 together", () => {
  expect(hasDiffOfOne([7])).toBeFalsy();
  expect(hasDiffOfOne([4, 3])).toBeTruthy();
  expect(hasDiffOfOne([11, 1, 8, 12, 14])).toBeTruthy();
  expect(hasDiffOfOne([5, 5, 5, 5])).toBeFalsy();
  expect(hasDiffOfOne([6, 1, 8, 12, 14])).toBeFalsy();
});
