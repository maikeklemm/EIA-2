"use strict";
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoad);
    // let url:string = "http://localhost:5001/";
    let url = "https://einzigartig.herokuapp.com/";
    let fireworks = [];
    //Funktionen:
    async function handleLoad(_event) {
        console.log("Start");
        // für datenbank und server:
        // let form: HTMLFormElement = <HTMLDivElement>document.querySelector("form");
        // let response: Response = await fetch("Data.json")   // nur für offer vom baarkeeper?
        // let offerrockets : string = await response.text();  // die drei zeilen gehören dazu
        // let data : Data = JSON.parse(offerrockets); // danach würde eig generate content stehen und das offer würde geladen werden
        // let firstbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#firstbutton");
        // firstbutton.addEventListener("click", useRocket);
        findRockets();
        let save = document.querySelector("button#save");
        save.addEventListener("click", saveRocket);
        // für canvas:
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Fireworks.crc2 = canvas.getContext("2d");
        Fireworks.crc2.fillStyle = "black";
        // canvas.addEventListener("click", startFirework);
        // createBackground();
        // let firework: Rocket =new Rocket(20, "blue")
        // console.log(firework);
        // firework.draw();
        // firework.move(0.1);
        // createFirework(1);
        // window.setInterval(update, 20);
    }
    // Funktionen für Fromular 
    async function saveRocket(_event) {
        console.log("saverocket");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
        // console.log (formData);
        for (let entry of formData) {
            console.log(entry);
            // let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");    /brauche ich nur wenn ich auf ein weiteres attribut zugreifen will wie price
            // console.log(item);
        }
    }
    async function findRockets() {
        let response = await fetch(url + "?" + "command=retrieve");
        let responseText = await response.text();
        console.log(responseText);
        // alert(responseText.replace(/<br>/g, " "));
        createButtons(responseText);
    }
    function createButtons(_allSavedRockets) {
        let rockets = _allSavedRockets;
        let rocketArray = JSON.parse(rockets);
        console.log("create buttons arrrrrrrray  " + rocketArray);
        let rocketButtonDiv = document.querySelector("div#RocketButtons");
        //listener?
    }
    //Funktionen für Canvas:
    // function createBackground(){
    //     console.log("background")
    //     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    // }
    function createFirework(_nRockets) {
        console.log("Create firework");
        for (let i = 0; i < _nRockets; i++) {
            let firework = new Fireworks.Rocket(10, "red");
            fireworks.push(firework);
        }
    }
    function update() {
        console.log("Update");
        Fireworks.crc2.fillRect(0, 0, Fireworks.crc2.canvas.width, Fireworks.crc2.canvas.height);
        for (let firework of fireworks) {
            firework.move(1 / 50);
            firework.draw();
        }
        // function startFirework(_event: MouseEvent): void {
        //     console.log("start firework");
        //     let origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        //     let velocity: Vector = new Vector(100, 100);
        //     let particle: Particle = new Particle(origin, velocity);
        //     fireworks.push(particle);
        // }
    }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=main.js.map