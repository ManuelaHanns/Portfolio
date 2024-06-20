'use strict'

const { appendFile } = require("fs/promises");
async function appendToFile(fileName, data) {
    try {
        await appendFile(fileName, data, {flag:"w"});
        console.log(`Appended data to ${fileName}`);
    } catch (error) {
        console.log(`Got an error trying to append the file: {error.message}`);
    }
}
appendToFile("activities.txt", "Dancing");
appendToFile("friends.txt", "Janet");

// Open Bash and use - node append-file.js -