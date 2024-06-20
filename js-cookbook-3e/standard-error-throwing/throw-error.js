"use strict";

// a function that returns Error with a custom message
function strictDivision(number, divisor) {
    if (Number(divisor) === 0) {
        throw new Error("Dividing by zero is not allowed");
    } else {
        return number / divisor;
    }
}
// catch the error with the custom message
try {
    const result = strictDivision(42, 0);
    console.log(result);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

// use RangeError if a function receives avalue outside of the acceptable range
function setAge(age) {
    const upper = 125;
    const lower = 18;
    if (age > 125 || age < 18) {
        throw new RangeError(`Age [${age}] is out of the acceptable range of ${lower} to ${upper}.`);
    }
}
try {
    const result = setAge(15);
    console.log(result);
} catch (error) {
    console.log(`RangeError: ${error.message}`);
}

// use TypeError if a function receives a value of the wrong type
function calculateValue(num) {
    if (typeof num !== "number") {
        throw new TypeError(`Value [${num}] is not a number.`);
    }
}
try {
    const result = calculateValue("bla");
    console.log(result);
} catch (error) {
    console.log(`TypeError: ${error.message}`);
}
