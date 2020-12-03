"use strict";
var L07_Potions;
(function (L07_Potions) {
    window.addEventListener("load", handleLoad);
    let form;
    let url = "http://localhost:5001/";
    // let url: string = "https://einzigartig.herokuapp.com/"; 
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
        let output = document.querySelector("button#output");
        output.addEventListener("click", showSubmittedRecipes);
    }
    async function getData() {
        let response = await fetch("data.json");
        let content = await response.text();
        let data = JSON.parse(content);
        L07_Potions.generateContent(data);
    }
    async function showSubmittedRecipes() {
        let respone = await fetch(url + "?" + "command=retrieve");
        let responseText = await respone.text();
        alert(responseText.replace(/<br>/g, " "));
    }
    async function sendPotion(_event) {
        console.log("Send potion");
        // let url: string = "http://localhost:5001/"; 
        // // let url: string = "https://einzigartig.herokuapp.com/"; //-> wird jetzt oben deklariert
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
        // let total: number = 0;
        // let price: number = 0;
        // let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
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
                    // let Amount: number = Number(item.getAttribute(""))
                    // let total: number = itemPrice;
                    // console.log(total)
                    break;
                case "Temperatur":
                    console.log(entry[0], ":", entry[1]);
                    potion.innerHTML += "<br>" + "Heat up / Cool down until the temperature amounts to  " + entry[1] + "°C" + "." + "<br>";
                    break;
                case "stir":
                    let stir = document.querySelector("input#stir");
                    console.log(stir.name, ":", stir.value);
                    if (stir.value == "1") {
                        potion.innerHTML += "Stir occasionally to get a thick consistency." + "<br>";
                    }
                    if (stir.value == "2") {
                        potion.innerHTML += "Stir continously to get a smooth consistency. " + "<br>";
                    }
                    break;
                case "Result":
                    console.log(entry[0], ":", entry[1]);
                    potion.innerHTML += "The Potion should now be " + entry[1] + "." + "<br>";
                    break;
                default:
                    potion.innerHTML += entry[0] + entry[1] + "<br>";
                    break;
            }
        }
    }
})(L07_Potions || (L07_Potions = {}));
//# sourceMappingURL=potions.js.map