"use strict";

const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
fs.readFile("example.txt", (err, data) => {
    console.log("now reading file");
});
console.log("start");
process.nextTick(() => console.log("nextTick"));
setTimeout(() => console.log("setTimeout 1"), 0);
setTimeout(() => console.log("setTimeout 2"), 3);
let counter = 0;
const timeout = setInterval(() => {
    console.log("setInterval");
    if (counter >= 3) {
        console.log("exiting setInterval");
        clearInterval(timeout);
    }
    counter++;
}, 0);
new Promise((resolve, reject) => {
    console.log("start promise 1");
    resolve("Promise 1");
}).then(data => {
    console.log(data);
});
console.log("end");
