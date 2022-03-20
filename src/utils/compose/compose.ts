// Takes an array of functions and executes them on the value

const compose = (arr: Function[]) => (val: any) =>
  arr.reduce((fn1: Function, fn2: Function) => fn2(fn1), val);

export default compose;
