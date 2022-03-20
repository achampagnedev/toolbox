"use strict";
const fizzBuzz = (maxI, numA, numB) => {
    for (let i = 1; i < maxI; i++) {
        if (i % (numA * numB) === 0) {
            console.log("FizzBuzz");
        }
        else if (i % numA === 0) {
            console.log("Fizz");
        }
        else if (i % numB === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
};
console.log(fizzBuzz(100, 3, 4));
