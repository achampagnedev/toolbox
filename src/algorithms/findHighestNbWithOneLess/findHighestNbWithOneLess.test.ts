import findHighestNbWithOneLess from "./findHighestNbWithOneLess";

test("Check all combinations of numbers with", () => {
  expect(findHighestNbWithOneLess(15958, 5)).toEqual(1958);
  expect(findHighestNbWithOneLess(-5859, 5)).toEqual(-589);
  expect(findHighestNbWithOneLess(-5000, 5)).toEqual(-0);
  expect(findHighestNbWithOneLess(-23959, 9)).toEqual(-2359);
  expect(findHighestNbWithOneLess(829826, 2)).toEqual(89826);
});
