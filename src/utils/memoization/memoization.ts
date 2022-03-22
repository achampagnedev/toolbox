const memoize = (cb: Function) => {
  const cache: { [key: string]: string | number } = {};
  return (...args: any) => {
    const strArgs = `${args}`;
    if (!cache[strArgs]) {
      cache[strArgs] = cb(...args);
    }
    return cache[strArgs];
  };
};

export default memoize;
