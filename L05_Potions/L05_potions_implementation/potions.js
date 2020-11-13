"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var L04_Potions;
(function (L04_Potions) {
    window.addEventListener("load", handleLoad);
    var form;
    function handleLoad(_event) {
        console.log("Start");
        L04_Potions.gernerateContent(L04_Potions.data);
        // form = <HTMLFormElement>document.querySelector("form");
        // form.addEventListener("change", handleChange);
        var ok = document.querySelector("button#ok");
        ok.addEventListener("click", handleOk);
        var submit = document.querySelector("button#submit");
        console.log(submit);
        submit.addEventListener("click", sendPotion);
    }
    function sendPotion(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Send potion");
                        formData = new FormData(form);
                        query = new URLSearchParams(formData);
                        return [4 /*yield*/, fetch("index.html?" + query.toString())];
                    case 1:
                        _a.sent();
                        alert("Potion sent!");
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleOk(_event) {
        console.log(_event);
        displayPotion();
    }
    function displayPotion() {
        var submit = document.querySelector("button#submit");
        var potion = document.querySelector("div#potion");
        potion.innerHTML = "";
        var total = 0;
        var price = 0;
        var order = document.querySelector("div#order");
        var formData = new FormData(form);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var selector = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            var item = document.querySelector(selector);
            var itemPrice = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "name":
                    var name_1 = document.querySelector("input#name");
                    console.log(name_1.name, ":", name_1.value);
                    potion.innerHTML += "Name of potion: " + name_1.value + "<br>";
                    break;
                case "description":
                    var desc = document.querySelector("textarea#description");
                    console.log(desc.name, ":", desc.value);
                    potion.innerHTML += "Description: " + desc.value + "<br>";
                    break;
                case "effect":
                    var effect = document.querySelector("select#effect");
                    console.log(effect.name, ":", effect.value);
                    potion.innerHTML += "Effect: " + effect.value + "<br>";
                    break;
                case "time":
                    var time = document.querySelector("input#time");
                    console.log(time.name, ":", time.value);
                    potion.innerHTML += "Duration of effect: " + time.value + "h" + "<br>" + "<br>";
                    break;
                case "Ingredient?":
                    var Zutat = document.querySelector("fieldset#Ingred");
                    console.log(Zutat.name, ":", Zutat.value);
                    potion.innerHTML += "Add: " + Zutat.value + "<br>";
                    break;
                case "temperature":
                    var temperature = document.querySelector("input#temperature");
                    console.log(temperature.name, ":", temperature.value);
                    potion.innerHTML += "Required temperature: " + temperature.value + "°C" + "<br>";
                    break;
                case "stir":
                    var stir = document.querySelector("input#stir");
                    console.log(stir.name, ":", stir.value);
                    if (stir.value == "1") {
                        potion.innerHTML += "Stir: occasionally " + "<br>";
                    }
                    if (stir.value == "2") {
                        potion.innerHTML += "Stir: continously " + "<br>";
                    }
                    break;
                case "result":
                    var result = document.querySelector("input.result");
                    console.log(result.name, ":", result.value);
                    potion.innerHTML += "Result : " + result.value + "<br>";
                    break;
                // case "Amount":
                //     break;
                // case "Drink":
                //     let amount: number = Number(formData.get("Amount"));
                //     itemPrice = amount * itemPrice;
                //     order.innerHTML += amount + " L " + item.value + ": €" + itemPrice + "<br>";
                //     break;
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
        }
        // let name: HTMLInputElement = <HTMLInputElement>document.querySelector("input#name");
        //  console.log(name.name, ":", name.value);
        //  potion.innerHTML += "Name of potion: " + name.value + "<br>";
        //  let desc: HTMLInputElement = <HTMLInputElement>document.querySelector("textarea#description");
        //  console.log(desc.name, ":", desc.value);
        //  potion.innerHTML += "Description: " + desc.value + "<br>";
        //  let effect: HTMLInputElement = <HTMLInputElement>document.querySelector("select#effect");
        //  console.log(effect.name, ":", effect.value);
        //  potion.innerHTML += "Effect: " + effect.value + "<br>";
        //  let time: HTMLInputElement = <HTMLInputElement>document.querySelector("input#time");
        //  console.log(time.name, ":", time.value);
        //  potion.innerHTML += "Duration of effect: " + time.value + "h" + "<br>"+ "<br>";
        //  let Zutat: HTMLInputElement = <HTMLInputElement>document.querySelector("fieldset#Ingred");
        //  console.log(Zutat.name, ":", Zutat.value);
        //  potion.innerHTML += "Add: " + Zutat.value + "<br>";
        //  let temperature: HTMLInputElement = <HTMLInputElement>document.querySelector("input#temperature");
        //  console.log(temperature.name, ":", temperature.value);
        //  potion.innerHTML += "Required temperature: " + temperature.value + "°C" + "<br>";
        //  let stir: HTMLInputElement = <HTMLInputElement>document.querySelector("input#stir");
        //  console.log(stir.name, ":", stir.value);
        //   if(stir.value == "1") {
        //     potion.innerHTML += "Stir: occasionally " +  "<br>";
        //   }
        //   if(stir.value == "2") {
        //     potion.innerHTML += "Stir: continously " +  "<br>";
        //   }
        // let result: HTMLInputElement = <HTMLInputElement>document.querySelector("input.result");
        //  console.log(result.name, ":", result.value);
        //  potion.innerHTML += "Result : " + result.value + "<br>";
        // let formData: FormData[] = <FormData> new FormData(document.forms[0]);
        // for (let entry of formData) {
        //     let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
        //     let price: number = Number(item.getAttribute("price"));
        //     potion.innerHTML += item.name + "  Galleonen " + price;
        // }
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
