"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L04_Potions = void 0;
const Http = require("http");
var L04_Potions;
(function (L04_Potions) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest() {
        console.log("Whats up?");
    }
})(L04_Potions = exports.L04_Potions || (exports.L04_Potions = {}));
//# sourceMappingURL=Server.js.map