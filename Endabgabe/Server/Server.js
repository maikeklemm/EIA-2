"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fireworks = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Fireworks;
(function (Fireworks) {
    let rocketInstructions;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://MyMongoDBUser:apfelbaum@eia2maike.6rcm4.mongodb.net/Potions?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    // Functions:
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
        rocketInstructions = mongoClient.db("Fireworks").collection("RocketInstructions");
        console.log("database connection ", rocketInstructions != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("handle request");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            console.log("schicke rezept");
            storeRocketInstruction(url.query);
        }
        _response.end();
    }
    function storeRocketInstruction(_rocketInstruction) {
        console.log("store rocket instruction");
        rocketInstructions.insertOne(_rocketInstruction);
    }
})(Fireworks = exports.Fireworks || (exports.Fireworks = {}));
//# sourceMappingURL=Server.js.map