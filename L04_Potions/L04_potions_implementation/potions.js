"use strict";
var L04_Potions;
(function (L04_Potions) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        // gernerateContent(data);
        // let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        // form.addEventListener("change", handleChange);
        var ok = document.querySelector("button#ok");
        ok.addEventListener("click", handleOk);
    }
    function handleOk(_event) {
        console.log(_event);
        var submit = document.querySelector("button#submit");
        var potion = document.querySelector("div#potion");
        potion.innerHTML = "";
        var total = 0;
        var name = document.querySelector("input#name");
        console.log(name.name, ":", name.value);
        potion.innerHTML += "Name of potion: " + name.value + "<br>";
        var desc = document.querySelector("textarea#description");
        console.log(desc.name, ":", desc.value);
        potion.innerHTML += "Description: " + desc.value + "<br>";
        var effect = document.querySelector("select#effect");
        console.log(effect.name, ":", effect.value);
        potion.innerHTML += "Effect: " + effect.value + "<br>";
        var time = document.querySelector("input#time");
        console.log(time.name, ":", time.value);
        potion.innerHTML += "Duration of effect: " + time.value + "h" + "<br>" + "<br>";
        //  let Zutat: HTMLInputElement = <HTMLInputElement>document.querySelector("input#zutat");
        //  console.log(Zutat.name, ":", Zutat.value);
        //  potion.innerHTML += "Add: " + Zutat.value + "<br>";
        var temperature = document.querySelector("input#temperature");
        console.log(temperature.name, ":", temperature.value);
        potion.innerHTML += "Required temperature : " + temperature.value + "°C" + "<br>";
        var stir = document.querySelector("input#stir");
        console.log(stir.name, ":", stir.value);
        if (stir.value == "1") {
            potion.innerHTML += "Stir : occasionally " + "<br>";
        }
        if (stir.value == "2") {
            potion.innerHTML += "Stir : continously " + "<br>";
        }
        var result = document.querySelector("input.result");
        console.log(result.name, ":", result.value);
        potion.innerHTML += "Result : " + result.value + "<br>";
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            potion.innerHTML += item.name + "  Galleonen " + price;
        }
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        // displayPotion();
        // }
        // function displayPotion {
        //     let formData: FormData = new FormData(document.forms[0]);
        //              potion.innerHTML += entry[0] + " " entry[1]
        //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
        // for (let entry of formData) {
        //     let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
        //     let price: number = Number(item.getAttribute("price"));
        //     potion.innerHTML += item.name + "  Galleonen " + price;
    }
})(L04_Potions || (L04_Potions = {}));
