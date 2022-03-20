// Find if the pass array has two numbers with a difference of 1
// [7] false (-)
// [4, 3] true (4,3)
// [11, 1, 8, 12, 14] true (11, 12)
// [4, 10, 8, 5, 9] true (8,9)
// [5, 5, 5, 5] false (-)

const hasDiffOfOne = (nbArr: number[]) => {
  if (nbArr.length < 2) return false;

  for (let i = 0, len = nbArr.length; i < len; i++) {
    const hasPlus1ValueAvailable = nbArr.indexOf(nbArr[i] + 1) !== -1;
    const hasMinus1ValueAvailable = nbArr.indexOf(nbArr[i] - 1) !== -1;

    if (hasPlus1ValueAvailable || hasMinus1ValueAvailable) {
      return true;
    }
  }

  return false;
};

export default hasDiffOfOne;
