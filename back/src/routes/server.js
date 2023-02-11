var fs = require("fs");
var http = require("http");
const getCharById = require("../controllers/getCharById.js")
const getCharDetail = require("../controllers/getCharDetail.js")
const characters = require("../utils/data.js")

const PORT = 3001;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("onsearch")){
        getCharById(res, req.url.split("/").at(-1));
    }
    if(req.url.includes("detail")){
        getCharDetail(res, req.url.split("/").at(-1))
    }
}).listen(PORT, "localhost")

module.exports = server;
