'use strict'

const cron = require("node-cron");
cron.schedule("* * * * *", () => {
    console.log("Log to the console every minute");
});

//cron.schedule("5 0 1 * *", () => {
    //console.log("It is the first of the month 5 minutes after midnight");
//});

//const cron2 = require("node-cron");
//cron2.schedule("7 12 6 * *", () => {
    //console.log("It's 7 minutes after 12 on the sixt of the month");
//});

//cron.schedule("0 0 * * *", () => {
    //console.log("Running a job at midnight");
//}, {
    //scheduled: true,
    //timeuone: "America/New_York"
//});