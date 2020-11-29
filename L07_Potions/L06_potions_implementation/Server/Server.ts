import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

// mongo "mongodb+srv://eia2maike.6rcm4.mongodb.net/<dbname>" --username MyMongoDBUser

export namespace L07_Potions {

    interface Recipe {
        [type: string] : string | string[] | undefined;
    }
    let recipes: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    // let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl: string = "mongodb+srv://MyMongoDBUser:apfelbaum@eia2maike.6rcm4.mongodb.net/Potions?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);



    function startServer(_port: number | string): void {

        console.log("Server starting on port:" + _port);

        let server: Http.Server = Http.createServer();
        console.log(server);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url : string): Promise <void>{
        let options : Mongo.MongoClientOptions ={useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient : Mongo.MongoClient = new Mongo.MongoClient (_url, options);

        await mongoClient.connect();
        recipes = mongoClient.db("Potions").collection("Recipes");
        console.log("database connection ", recipes != undefined);

    }
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("handle request");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write("This is your recipe:   ");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);


            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeRecipe (url.query);
        }

        function storeRecipe (_recipe:Recipe) : void {

            recipes.insertOne(_recipe);
        }

        _response.end();
    }
}