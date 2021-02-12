"use strict";
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoad);
    // let url:string = "http://localhost:5001/";
    let url = "https://einzigartig.herokuapp.com/";
    let fireworks = [];
    // let rocketArray : string[]= [];     // : Rocketinstructions?
    //Funktionen:
    async function handleLoad(_event) {
        console.log("Start");
        // für datenbank und server:
        findRockets();
        let save = document.querySelector("button#save");
        save.addEventListener("click", saveRocket);
        // für canvas:
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Fireworks.crc2 = canvas.getContext("2d");
        // canvas.addEventListener("click", createFirework);
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
        let canvas = document.querySelector("canvas");
        let rockets = _allSavedRockets;
        rockets = JSON.parse(rockets);
        console.log(rockets);
        // console.log("create buttons array  " + rocketArray);
        let rocketButtonDiv = document.querySelector("div#Nightsky");
        for (let i = 0; i < rockets.length; i++) {
            let currentRocketName = rockets[i].name;
            console.log(currentRocketName);
            let currentRocketColor = rockets[i].color;
            console.log(currentRocketColor);
            let currentRocketSize = rockets[i].size;
            console.log(currentRocketSize);
            let currentRocketShape = rockets[i].shape;
            console.log(currentRocketShape);
            let currentRocketButton = document.createElement("button");
            rocketButtonDiv.appendChild(currentRocketButton);
            currentRocketButton.innerText = currentRocketName;
            // currentRocketButton.addEventListener("click", clickedRocketButton)
            switch (currentRocketShape) {
                case "star":
                    // canvas.removeEventListener("click", StarRocket, false); 
                    currentRocketButton.addEventListener("click", clickStarShape);
                    function clickStarShape(_event) {
                        canvas.addEventListener("click", StarRocket);
                        function StarRocket(_event) {
                            console.log("this is a star");
                            console.log("Create firework");
                            let mouseX = _event.offsetX;
                            let mouseY = _event.offsetY;
                            let particleAmount = 15;
                            let offset = (Math.PI * 2) / particleAmount;
                            for (let i = 0; i < particleAmount; i++) {
                                let firework = new Fireworks.StarParticle(currentRocketSize, currentRocketColor, mouseX, mouseY, offset, i);
                                fireworks.push(firework);
                                console.log(fireworks);
                            }
                        }
                    }
                    break;
                case "heart":
                    currentRocketButton.addEventListener("click", HeartRocket);
                    function HeartRocket(_event) {
                        console.log("this is a  heart");
                        console.log("Create firework");
                        // let mouseX: number = _event.offsetX;
                        // let mouseY: number = _event.offsetY;
                        let particleAmount = 15;
                        let offset = (Math.PI * 2) / particleAmount;
                        for (let i = 0; i < particleAmount; i++) {
                            let firework = new Fireworks.HeartParticle(currentRocketSize, currentRocketColor, 200, 200, offset, i);
                            fireworks.push(firework);
                            console.log(fireworks);
                        }
                    }
                    break;
                case "circle":
                    currentRocketButton.addEventListener("click", CircleRocket);
                    function CircleRocket(_event) {
                        console.log("this is a  circle");
                        console.log("Create firework");
                        // let mouseX: number = _event.offsetX;
                        // let mouseY: number = _event.offsetY;
                        let particleAmount = 15;
                        let offset = (Math.PI * 2) / particleAmount;
                        for (let i = 0; i < particleAmount; i++) {
                            let firework = new Fireworks.CircleParticle(currentRocketSize, currentRocketColor, 200, 200, offset, i);
                            fireworks.push(firework);
                            console.log(fireworks);
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }
    function clickedRocketButton() {
        console.log(" you clicked a button");
    }
    //Funktionen für Canvas:
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