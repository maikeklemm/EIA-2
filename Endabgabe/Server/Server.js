"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fireworks = void 0;
const Http = require("http");
const Url = require("url");
var Fireworks;
(function (Fireworks) {
    console.log("hi");
    let server = Http.createServer();
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("what up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.write("this is my response");
        _response.end();
    }
})(Fireworks = exports.Fireworks || (exports.Fireworks = {}));
//# sourceMappingURL=Server.js.map