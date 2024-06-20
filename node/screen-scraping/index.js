import fetch from "node-fetch";
import * as cheerio from "cheerio";
import fs from "fs";

async function customerUsage(url) {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const customerUsageData = [];

    $(".landing-overview div").each((index, element) => {
        const titleElement = $(element).find("h3");
        const title = titleElement.text().trim();

        if (titleElement.length && title.length > 0) {
            const descriptionElement = $(element).find("p");
            const description = descriptionElement.text().trim();

            customerUsageData.push({ title, description });
        }
    });

    return customerUsageData;
}

async function scraperAPI(url) {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const scraperAPIs = [];

    const title = $(".hero-title").text().trim();
    $(".col").each((index, element) => {
        const api = {};
        api.title = $(element).find("strong").text().trim();
        api.description = $(element).find("p").text().trim();
        scraperAPIs.push(api);
    });

    return { title, scraperAPIs };
}

async function satisfiedCustomers(url) {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const satisfiedCustomersData = [];

    $("div.interstitial-companies img").each((index, element) => {
        const relativePath = $(element).attr("src");
        const absolutePath = new URL(relativePath, url).href;
        satisfiedCustomersData.push(absolutePath);
    });

    return satisfiedCustomersData;
}

async function writeDataToJsonFile() {
    const url = "https://www.scrapingdog.com/";
    const customerUsageData = await customerUsage(url);
    const scraperAPIData = await scraperAPI(url);
    const satisfiedCustomersData = await satisfiedCustomers(url);

    const data = {
        customerUsage: customerUsageData,
        scraperAPI: scraperAPIData,
        satisfiedCustomers: satisfiedCustomersData
    };

    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
        if (err) {
            console.error("Error writing JSON file:", err);
        } else {
            console.log("Data has been written to data.json");
        }
    });
}

writeDataToJsonFile();
