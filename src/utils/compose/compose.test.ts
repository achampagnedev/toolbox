import compose from "./compose";

const add1 = (nb: number) => nb + 1;
const doubleIt = (nb: number) => nb * 2;
const divideBy2 = (nb: number) => nb / 2;

test("Check that the function composition executes in the right order with the right result", () => {
  expect(compose([add1, doubleIt])(5)).toEqual(12);
  expect(compose([doubleIt, add1])(12)).toEqual(25);
  expect(compose([divideBy2, doubleIt, add1])(12)).toEqual(13);
  expect(compose([doubleIt, add1, divideBy2, add1])(2)).toEqual(3.5);
});
