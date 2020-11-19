"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L04_Potions = void 0;
const Http = require("http");
const Url = require("url");
var L04_Potions;
(function (L04_Potions) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.write("This is my response.");
        _response.end();
    }
})(L04_Potions = exports.L04_Potions || (exports.L04_Potions = {}));
//# sourceMappingURL=Server.js.map