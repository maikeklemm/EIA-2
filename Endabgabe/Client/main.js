"use strict";
var Fireworks;
(function (Fireworks) {
    window.addEventListener("load", handleLoad);
    // let url:string = "http://localhost:5001/";
    let url = "https://einzigartig.herokuapp.com/";
    let fireworks = []; // Array, dass alle aktuell auf dem Canvas sichtbaren Feuerwerke zeigt
    let activeRocket = null; //meine globale Variable, die die RocketInstructions des aktuell geklickten Buttons hält
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
        canvas.addEventListener("click", (_event) => {
            if (activeRocket != null) {
                startFirework(_event);
            }
        });
        window.setInterval(update, 20);
    }
    // Funktionen für Fromular 
    async function saveRocket(_event) {
        console.log("saverocket");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText + " PLEASE RELOAD THE PAGE");
        // console.log (formData);
        for (let entry of formData) {
            console.log(entry);
        }
    }
    async function findRockets() {
        let response = await fetch(url + "?" + "command=retrieve");
        let responseText = await response.text();
        console.log(responseText);
        createButtons(responseText);
    }
    function createButtons(_allSavedRockets) {
        let rockets = _allSavedRockets;
        rockets = JSON.parse(rockets);
        // console.log(rockets);
        let rocketButtonDiv = document.querySelector("div#RocketButtons");
        for (let i = 0; i < rockets.length; i++) { // die einzelnen RocketInstructions aus der Serverantwort werden durchgegangen
            let currentRocket = rockets[i]; // die aktuelle Rocketinstruction wird ins Format des Interfaces "Rocketinstruction" gebracht und unter der variable currentRocket gespeichert
            let currentRocketButton = document.createElement("button");
            rocketButtonDiv.appendChild(currentRocketButton);
            currentRocketButton.innerText = currentRocket.name;
            // currentRocketButton.addEventListener("click", clickedRocketButton)
            currentRocketButton.addEventListener("click", () => {
                activeRocket = currentRocket;
            });
        }
    }
    //Funktionen für Canvas:
    function startFirework(_event) {
        console.log("Create firework");
        let mouseX = _event.offsetX;
        let mouseY = _event.offsetY;
        let particleAmount = 15;
        let offset = (Math.PI * 2) / particleAmount;
        for (let i = 0; i < particleAmount; i++) {
            if (activeRocket == null) { // nur wenn der globalen variable active rocket vorher eine current rocket durch einen buttonclick zugeschrieben wurde, wird die schleife weiter ausgeführt, sonst return(es wird aus der schleife gesprungen)
                return;
            }
            let firework = null;
            switch (activeRocket.shape) {
                case "star":
                    firework = new Fireworks.StarParticle(activeRocket.size, activeRocket.color, mouseX, mouseY, offset, i);
                    break;
                case "heart":
                    firework = new Fireworks.HeartParticle(activeRocket.size, activeRocket.color, mouseX, mouseY, offset, i);
                    break;
                case "circle":
                    firework = new Fireworks.CircleParticle(activeRocket.size, activeRocket.color, mouseX, mouseY, offset, i);
                    break;
                default:
                    break;
            }
            if (firework != null) { // wenn activeRocket eine Rakete war (nicht null), und somit firework auch nicht null ist (sondern darin particles erstellt wurden), dann werden diese in das globale array fireworks gepusht
                fireworks.push(firework);
                // console.log(fireworks); 
            }
        }
    }
    function update() {
        console.log("Update");
        if (fireworks.length == 0) {
            Fireworks.crc2.fillStyle = "rgba(3, 56, 89, 0.1)";
        }
        else
            Fireworks.crc2.fillStyle = "rgba(0, 0, 0, 0.1)";
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