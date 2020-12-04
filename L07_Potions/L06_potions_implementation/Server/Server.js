"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L07_Potions = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
// mongo "mongodb+srv://eia2maike.6rcm4.mongodb.net/<dbname>" --username MyMongoDBUser
var L07_Potions;
(function (L07_Potions) {
    let recipes;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    // let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl = "mongodb+srv://MyMongoDBUser:apfelbaum@eia2maike.6rcm4.mongodb.net/Potions?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        console.log("Server starting on port:" + _port);
        let server = Http.createServer();
        console.log(server);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        recipes = mongoClient.db("Potions").collection("Recipes");
        console.log("database connection ", recipes != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("handle request");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let command = url.query["command"];
            if (command == "retrieve") {
                console.log("retrieve Recipes");
                let allRecipes = recipes.find();
                console.log(allRecipes);
                let allRecipesString = JSON.stringify(await allRecipes.toArray());
                console.log(allRecipesString);
                _response.write("Here are the most recently submitted recipes. To see all open the console.   ");
                _response.write(allRecipesString);
            }
            else {
                _response.write("This is your recipe:   ");
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                console.log("schicke rezept");
                storeRecipe(url.query);
            }
        }
        // async function handleRetrieveRecipes(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        //     console.log("retrieve Recipes");
        //     let allRecipes: Mongo.Cursor = recipes.find();
        //     console.log(allRecipes);
        //     let allRecipesString: string = JSON.stringify(await allRecipes.toArray());
        //     console.log(allRecipesString);
        //     _response.write(allRecipesString);
        // for (let recipe of allRecipesString) {
        //     for (let key in Object(recipe)) {
        //         _response.write(key + ": " + Object(recipe)[key] + "\n");
        //     }
        //     _response.write("\n");
        // }
        // _response.end();
        // }
        function storeRecipe(_recipe) {
            console.log("store recipe");
            recipes.insertOne(_recipe);
        }
        _response.end();
    }
})(L07_Potions = exports.L07_Potions || (exports.L07_Potions = {}));
//# sourceMappingURL=Server.js.map