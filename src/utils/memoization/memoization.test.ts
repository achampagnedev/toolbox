import memoize from "./memoization";

const generateNumbers = (len: number, max: number) => {
  return Array.from({ length: len }, () => Math.floor(Math.random() * max));
};

const data = generateNumbers(1000, 10);

const sumNumbersFrom = (n: number) => {
  return data.slice(n).reduce((a, b) => a + b);
};

test("Check if the second access to the memoized function result is shorter", () => {
  const memoSumNumbersFrom = memoize(sumNumbersFrom);

  const start1 = performance.now();
  const result1 = memoSumNumbersFrom(100);
  const end1 = performance.now();
  const duration1 = end1 - start1;

  const start2 = performance.now();
  const result2 = memoSumNumbersFrom(100);
  const end2 = performance.now();
  const duration2 = end2 - start2;

  // should at least be 10 times faster to use memo
  expect(duration2).toBeLessThan(duration1 / 10);
});
