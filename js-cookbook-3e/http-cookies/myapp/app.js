'use strict'

import { createServer } from "http";
import Cookies from "cookies";

const server = createServer((req, res) => {
    // set CORS headers
    res.setHeader("Content-type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", true);
    const cookies = new Cookies (req, res);
    cookies.set("apple", "red");
    res.writeHead(200);
    res.end("Hello cross-domain ;))");
});

server.listen(8080);