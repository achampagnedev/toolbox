// Takes an array of functions and executes them on the value from left to right

const pipe = (arr: Function[]) => (val: any) =>
  arr.reduceRight((fn1: Function, fn2: Function) => fn2(fn1), val);

export default pipe;
