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
    function handleRequest(_request, _response) {
        console.log("handle request");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("This is your recipe:   ");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeRecipe(url.query);
        }
        function storeRecipe(_recipe) {
            recipes.insertOne(_recipe);
        }
        _response.end();
    }
})(L07_Potions = exports.L07_Potions || (exports.L07_Potions = {}));
//# sourceMappingURL=Server.js.map