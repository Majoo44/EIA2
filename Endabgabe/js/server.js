"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Mongo = require("mongodb");
var EIA2_Endabgabe;
(function (EIA2_Endabgabe) {
    let options;
    let mongoClient;
    let port = process.env.PORT;
    if (port == undefined) {
        port = 5001;
    }
    let databaseUrl = "mongodb+srv://mario:mario@cluster0.nqgvq.mongodb.net/test?retryWrites=true&w=majority";
    //"mongodb://localhost:27017";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    function connectToDatabase(_url) {
        options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        mongoClient.connect();
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("Request-URL: " + _request.url);
        if (_request.url) {
            let query = _request.url.split("?")[1];
            let parameterPairs = query.split("&");
            let action = parameterPairs[0].split("=")[1];
            let data;
            if (parameterPairs.length >= 2) {
                let encodedString = parameterPairs[1].split("=")[1];
                var jsonString = decodeURIComponent(encodedString);
                data = JSON.parse(jsonString);
            }
            if (action == "getAllPictures") {
                let pictures = mongoClient.db("pictures").collection("drawings");
                let cursor = await pictures.find();
                let data = [];
                await cursor.forEach((a) => {
                    data.push(a);
                });
                let jsonString = JSON.stringify(data);
                _response.write(jsonString);
            }
            else if (action == "getPicture") {
                let picture = mongoClient.db("pictures").collection("drawings");
                let cursor = await picture.find();
                let result = [];
                await cursor.forEach((a) => {
                    if (a.name == data) {
                        result.push(a);
                    }
                });
                if (result.length > 0) {
                    let jsonString = JSON.stringify(result[0]);
                    let answer = jsonString.toString();
                    _response.write(answer);
                }
                else {
                    let jsonString = JSON.stringify(result);
                    let answer = jsonString.toString();
                    _response.write(answer);
                }
            }
            else if (action == "savePicture") {
                let collection = mongoClient.db("pictures").collection("drawings");
                collection.insertOne(data);
                _response.write("Hier ist das Bild");
            }
            else {
                _response.write("Error");
            }
        }
        _response.end();
    }
})(EIA2_Endabgabe = exports.EIA2_Endabgabe || (exports.EIA2_Endabgabe = {}));
//# sourceMappingURL=server.js.map