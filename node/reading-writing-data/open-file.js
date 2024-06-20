'use strict'

const { open } = require("fs/promises");
async function openFile(fileName, data) {
    try {
        //const file = await open(fileName, "w");
        const file = await open(fileName, "a");
        await file.write(data);
        console.log(`Opened file ${fileName}`);
    } catch (error) {
        console.log(`Got an error trying to open the file:{error.message}`);
    }
}
openFile("task.txt", "Do homework, ");
openFile("task.txt", "Go sleep, ");
// Add tasks as you like
// Open Bash and use - node open-file.js -