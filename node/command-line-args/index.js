"use strict";

process.argv.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});
// type in terminal:  node index.js --name=Adam --food=pizza