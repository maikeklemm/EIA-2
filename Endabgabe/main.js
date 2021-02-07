"use strict";
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        // let form: HTMLFormElement = <HTMLDivElement>document.querySelector("form");
        let save = document.querySelector("button#save");
        save.addEventListener("click", saveRocket);
    }
    async function saveRocket(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        await fetch("index.html?" + query.toString());
        alert("gesaved");
        // console.log (formData);
        for (let entry of formData) {
            console.log(entry);
            // let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");    /brauche ich nur wenn ich auf ein weiteres attribut zugreifen will wie price
            // console.log(item);
        }
    }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=main.js.map