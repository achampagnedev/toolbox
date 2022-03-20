import pipe from "./pipe";

const add1 = (nb: number) => nb + 1;
const doubleIt = (nb: number) => nb * 2;
const divideBy2 = (nb: number) => nb / 2;

test("Check that the function composition executes in the right order with the right result", () => {
  expect(pipe([add1, doubleIt])(5)).toEqual(11);
  expect(pipe([doubleIt, add1])(12)).toEqual(26);
  expect(pipe([divideBy2, doubleIt, add1])(12)).toEqual(13);
  expect(pipe([doubleIt, add1, divideBy2, add1])(2)).toEqual(5);
});
