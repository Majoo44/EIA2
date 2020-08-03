import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace EIA2_Endabgabe {

    let allOrders: string[] = [];
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

    async function connectToDatabase(_url: string): Promise<void> {
        options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("pictures").collection("drawings");
        console.log("Database connection ", orders != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<any> {
        console.log("What's up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("Request-URL:  " + _request.url);

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            let splitURL: string[] = _request.url.split("&");
            console.log("SPLIT URL" + splitURL[0]);

            if (_request.url == "/?getPicture=yes") {
                // Load Names of all pictures and show them to user 
                let pictures: any = mongoClient.db("pictures").collection("Overview");
                let cursor: Mongo.Cursor<any> = await pictures.find();
                await cursor.forEach(showOrders);
                let jsonString: string = JSON.stringify(allOrders);
                _response.write(jsonString);
                allOrders = [];
            }

            else if (splitURL[0] == "/?findPicture") {
                //Load specific Picture and show it to User
                let picture: any = mongoClient.db("pictures").collection(splitURL[1]);
                let cursor: Mongo.Cursor<any> = await picture.find();
                await cursor.forEach(showOrders);
                let jsonString: string = JSON.stringify(allOrders);
                let answer: string = jsonString.toString();
                _response.write(answer);

                allOrders = [];
            }

            else if (splitURL[0] == "/?insertName") {
                let pictures: any = mongoClient.db("pictures").collection("Overview");
                (await pictures).insertOne(url.query);
            }

            else if (splitURL[0] == "/?savePicture") {
                //save new Picture in new Collection 
                let newCollection: Promise<Mongo.Collection<any>> = mongoClient.db("pictures").createCollection(splitURL[1]);
                (await newCollection).insertOne(url.query);
                _response.write("Ist angekommen");
            }

            else {
                _response.write("Error");
            }
        }
        _response.end();
    }

    function showOrders(_item: object): void {
        for (let key in _item) {
            allOrders.push(key);

        }
    }

}