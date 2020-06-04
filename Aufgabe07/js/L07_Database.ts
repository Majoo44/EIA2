/*
Aufgabe: Aufgabe 7
Name: Mario Eigeldinger
Matrikel: 261167
Datum: 06.06.2020
Hiermit versichere ich, dass ich diesen Code zum Teil selbst, zum Teil inspiriert durch Kommilitonen auf der Pages Seite geschrieben habe... 
Durch diese Hilfe konnte ich einige Dinge verstehen.
*/

import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace HaushaltshilfeDatabase {
    let server: Http.Server = Http.createServer();
    console.log(server);

    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient("localhost");
    mongoClient.connect(); /*Await hinzufügen*/

    let orders: Mongo.Collection = mongoClient.db("Test").collection("Orders");
    //orders.insert({...});

    let port: number | string | undefined  = process.env.PORT;
    if (port == undefined)
        port = 5001;

    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset-utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br>");
            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

        }


        _response.write("This is my response");
        _response.end();
    }
    

}