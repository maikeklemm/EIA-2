"use strict";
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoad);
    // let url:string = "http://localhost:5001/";
    let url = "https://einzigartig.herokuapp.com/";
    let fireworks = [];
    let rocketArray = []; // : Rocketinstructions?
    //Funktionen:
    async function handleLoad(_event) {
        console.log("Start");
        // für datenbank und server:
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
        canvas.addEventListener("click", createFirework);
        // createFirework(1);
        window.setInterval(update, 20);
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
        rockets = JSON.parse(rockets);
        // rocketArray.push(rockets);
        console.log(rockets);
        // console.log("create buttons array  " + rocketArray);
        let rocketButtonDiv = document.querySelector("div#RocketButtons");
        //listener?
        // for(let rocketInstruction of rocketArray){
        //     let currentRocketInstruction :string = rocketInstruction[1].color;
        //     console.log(currentRocketInstruction );
        // }
        for (let i = 0; i < rockets.length; i++) {
            let currentRocketInstruction = rockets[i].color; //as unknown as RocketInstruction)
            console.log(currentRocketInstruction);
        }
    }
    //Funktionen für Canvas:
    // function createBackground(){
    //     console.log("background")
    //     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    // }
    function createFirework(_event) {
        console.log("Create firework");
        let mouseX = _event.offsetX;
        let mouseY = _event.offsetY;
        let particleAmount = 15;
        let offset = (Math.PI * 2) / particleAmount;
        for (let i = 0; i < particleAmount; i++) {
            let firework = new Fireworks.HeartParticle(2, "blue", mouseX, mouseY, offset, i);
            fireworks.push(firework);
            console.log(fireworks);
        }
    }
    // function particleGo():void {
    //     for(let i=0; i<400; i++){
    //         let particles: Particle = new Particle();
    //         particles.push(fireworks);
    //     }
    // }
    function update() {
        console.log("Update");
        Fireworks.crc2.fillStyle = "rgba(0, 0, 0, 0.09)";
        Fireworks.crc2.fillRect(0, 0, Fireworks.crc2.canvas.width, Fireworks.crc2.canvas.height);
        for (let firework of fireworks) {
            firework.move(1 / 50);
            firework.draw();
        }
        deleteExpandables();
    }
    function deleteExpandables() {
        for (let i = fireworks.length - 1; i >= 0; i--) {
            if (fireworks[i].expendable)
                fireworks.splice(i, 1);
            // console.log(fireworks);
        }
    }
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=main.js.map