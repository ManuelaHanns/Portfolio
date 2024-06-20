'use strict'

const { writeFile } = require('fs/promises');
async function writeToFile(fileName, data) {
    try {
        await writeFile(fileName, data);
        console.log(`Wrote data to ${fileName}`);
    } catch (error) {
        console.log(`Got an error trying to write the file: ${error.message}`);
    }
}

writeToFile("friends.txt", "Bob");

// Open Bash and use - node write-file.js -