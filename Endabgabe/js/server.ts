import * as Http from "http";
import * as Mongo from "mongodb";

export namespace EIA2_Endabgabe {

    let options: Mongo.MongoClientOptions;
    let mongoClient: Mongo.MongoClient;
    let orders: Mongo.Collection;
    let port: number | string | undefined = process.env.PORT;
    if (port == undefined) {
        port = 5001;  
    }

    let databaseUrl: string = "mongodb+srv://mario:mario@cluster0.nqgvq.mongodb.net/test?retryWrites=true&w=majority";
    //"mongodb://localhost:27017";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Server starting on port:" + _port);

        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    function connectToDatabase(_url: string): void {
        options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        mongoClient.connect();
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<any> {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("Request-URL: " + _request.url);

        if (_request.url) {

            let query: string = _request.url.split("?")[1];
            let parameterPairs: string[] = query.split("&");
            let action: string = parameterPairs[0].split("=")[1];

            let data: any;
            if (parameterPairs.length >= 2) {
                let encodedString: string = parameterPairs[1].split("=")[1];
                var jsonString: string = decodeURIComponent(encodedString);
                data = JSON.parse(jsonString);
            }

            if (action == "getAllPictures") {
                // Load Names of all pictures and show them to user 
                let pictures: any = mongoClient.db("pictures").collection("drawings");
                let cursor: Mongo.Cursor<any> = await pictures.find();
                let data: any = [];
                await cursor.forEach((a: any) => {
                    data.push(a);
                });
                let jsonString: string = JSON.stringify(data);
                _response.write(jsonString);
            }
            else if (action == "getPicture") {
                //Load specific Picture and show it to User
                let picture: any = mongoClient.db("pictures").collection("drawings");
                let cursor: Mongo.Cursor<any> = await picture.find();
                
                let result: any = [];
                await cursor.forEach((a: any) => {
                    if ( a.name == data ) {
                        result.push(a);
                    }
                });

                if (result.length > 0) {
                    let jsonString: string = JSON.stringify(result[0]);
                    let answer: string = jsonString.toString();
                    _response.write(answer);
                } else {
                    let jsonString: string = JSON.stringify(result);
                    let answer: string = jsonString.toString();
                    _response.write(answer);
                }
            }
            else if (action == "savePicture") {
                //save new Picture in new Collection 
                let newCollection: Promise<Mongo.Collection<any>> = mongoClient.db("pictures").createCollection("drawings");
                (await newCollection).insertOne(data);
                _response.write("Ist angekommen");
            }
            else {
                _response.write("Error");
            }
        }
        _response.end();
    }
}