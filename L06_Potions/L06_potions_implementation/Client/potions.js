"use strict";
var L04_Potions;
(function (L04_Potions) {
    window.addEventListener("load", handleLoad);
    let form;
    // let url: string = "index.html";
    // let url: string = "http:://localhost:5001";
    // url wird in sendPotion deklariert (client.ts)
    function handleLoad(_event) {
        console.log("Start");
        getData();
        form = document.querySelector("form");
        let ok = document.querySelector("button#ok");
        ok.addEventListener("click", displayPotion);
        let submit = document.querySelector("button#submit");
        submit.addEventListener("click", sendPotion);
        let reset = document.querySelector("button#reset");
        reset.addEventListener("click", resetRecipe);
    }
    async function getData() {
        let response = await fetch("data.json");
        let content = await response.text();
        let data = JSON.parse(content);
        L04_Potions.generateContent(data);
    }
    async function sendPotion(_event) {
        console.log("Send potion");
        // let url: string = "http://localhost:5001/"; 
        let url = "https://einzigartig.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        console.log("query:" + query);
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        console.log(response);
        let responseText = await response.text();
        alert(responseText);
    }
    function resetRecipe() {
        let potion = document.querySelector("div#potion");
        potion.innerHTML = "";
    }
    function displayPotion() {
        console.log("displayPotion");
        // let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#submit");
        let potion = document.querySelector("div#potion");
        potion.innerHTML = "";
        let total = 0;
        let price = 0;
        let order = document.querySelector("div#order");
        let formData = new FormData(document.forms[0]);
        // let formData: FormData = new FormData(form);
        for (let entry of formData) {
            console.log(entry);
            let selector = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            console.log(item);
            // let itemPrice: number = Number(item.getAttribute("price"));
            // console.log(itemPrice);
            switch (entry[0]) {
                case "name":
                    console.log(entry[0], ":", entry[1]);
                    potion.innerHTML += "Name of Potion: " + entry[1] + "<br>";
                    break;
                case "Description":
                    console.log(entry[0], ":", entry[1]);
                    potion.innerHTML += "Description: " + entry[1] + "<br>";
                    break;
                case "effect":
                    console.log(entry[0], ":", entry[1]);
                    potion.innerHTML += "Effect: " + entry[1] + "<br>";
                    break;
                case "time":
                    console.log(entry[0], ":", entry[1]);
                    potion.innerHTML += "Duration of effect: " + entry[1] + "h" + "<br>" + "<br>";
                    break;
                case "Zutaten":
                    let itemPrice = Number(item.getAttribute("price"));
                    potion.innerHTML += "Ingredients: " + entry[1] + "(" + itemPrice + " Galleone/n)" + "<br>";
                    let Amount = Number(item.getAttribute(""));
                    let total = itemPrice;
                    console.log(total);
                    break;
                case "Temperatur":
                    console.log(entry[0], ":", entry[1]);
                    potion.innerHTML += "<br>" + "Required temperature: " + entry[1] + "°C" + "<br>";
                    break;
                case "stir":
                    let stir = document.querySelector("input#stir");
                    console.log(stir.name, ":", stir.value);
                    if (stir.value == "1") {
                        potion.innerHTML += "Stir: occasionally " + "<br>";
                    }
                    if (stir.value == "2") {
                        potion.innerHTML += "Stir: continously " + "<br>";
                    }
                    break;
                case "Result":
                    console.log(entry[0], ":", entry[1]);
                    potion.innerHTML += "Result: " + entry[1] + "<br>";
                    break;
                default:
                    potion.innerHTML += entry[0] + entry[1] + "<br>";
                    break;
            }
        }
    }
})(L04_Potions || (L04_Potions = {}));
//# sourceMappingURL=potions.js.map