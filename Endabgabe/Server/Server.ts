import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Fireworks {


    interface RocketInstructions {
        [type: string]: string | string[] | undefined;            //hier stimmt was nicht, welchen typ muss rocket haben? 
    }

    let rocketInstructions: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "mongodb+srv://MyMongoDBUser:apfelbaum@eia2maike.6rcm4.mongodb.net/Potions?retryWrites=true&w=majority";


    startServer(port);
    connectToDatabase(databaseUrl);


    // Functions:

    function startServer(_port: number | string): void {

        console.log("Server starting on port:" + _port);

        let server: Http.Server = Http.createServer();
        console.log(server);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);

        await mongoClient.connect();
        rocketInstructions = mongoClient.db("Fireworks").collection("RocketInstructions");
        console.log("database connection ", rocketInstructions != undefined);

    }

  async  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("handle request");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");




        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            let command: string | string[] | undefined = url.query["command"];

            if (command == "retrieve") {
                console.log("retrieve rocket instructions");
                let allRocketInstructions: Mongo.Cursor = rocketInstructions.find();
                console.log(allRocketInstructions);
                let allRocketInstructionsString: string = JSON.stringify(await allRocketInstructions.toArray());
                console.log(allRocketInstructionsString);
                // _response.write("all saved rocket: ");
                _response.write(allRocketInstructionsString);
            }
            else {
                _response.write("This is your rocket: ");
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);

                console.log("save rocket");
                storeRocketInstruction(url.query);
            }
        }
        _response.end();

    }
    function storeRocketInstruction(_rocketInstruction: RocketInstructions): void {
        console.log("store rocket instruction");
        rocketInstructions.insertOne(_rocketInstruction);

    }
}