// outputs the letter "L" with N size e.g: makeL(6) should output:
// L
// L
// L
// L
// L
// LLLLLL

const makeL = (nbTimes: number) => {
  let resultL = ``;

  for (let i = 1; i <= nbTimes; i++) {
    if (i !== nbTimes) {
      resultL += `L${" ".repeat(nbTimes - 1)}\n`;
    } else {
      resultL += `${"L".repeat(nbTimes)}`;
    }
  }

  return resultL;
};

console.log(makeL(6));

export default makeL;
