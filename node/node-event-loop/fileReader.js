"use strict";

const fs = require("fs");

// Asynchronous file reading
fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error occurred while reading the file:", err);
        return;
    }
    console.log("File content:", data);
});

console.log("File reading operation initiated");
