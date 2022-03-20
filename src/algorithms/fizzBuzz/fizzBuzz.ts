// For a set iterations loop.
// Output 'Fizz' on the numA'th interation
// 'Buzz' on the numB'th and
// 'FizzBuzz' on the numA*numB'th iteration

const fizzBuzz = (maxI: number, numA: number, numB: number) => {
  for (let i = 1; i < maxI; i++) {
    if (i % (numA * numB) === 0) {
      console.log("FizzBuzz");
    } else if (i % numA === 0) {
      console.log("Fizz");
    } else if (i % numB === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz(100, 3, 4));
