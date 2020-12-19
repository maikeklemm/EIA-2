"use strict";
var L09_Skipiste;
(function (L09_Skipiste) {
    let mountains = new L09_Skipiste.Mountains();
    let skiers = [];
    let snowflakes = [];
    // let imgData: ImageData
    window.addEventListener("load", handleLoad);
    L09_Skipiste.golden = 0.38;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Skipiste.crc2 = canvas.getContext("2d");
        L09_Skipiste.drawBackground();
        L09_Skipiste.drawSun({ x: 900, y: 75 });
        L09_Skipiste.drawCloud({ x: 740, y: 175 }, { x: 250, y: 75 });
        mountains.draw;
        L09_Skipiste.drawPiste();
        L09_Skipiste.drawLift({ x: 1080, y: 100 });
        L09_Skipiste.drawLift({ x: 700, y: 74 });
        L09_Skipiste.drawHouse({ x: 0, y: 300 });
        // drawSkier({ x: 10, y: 300 });
        // drawSnow();
        // let snowflake: Snowflake = new Snowflake();
        // snowflake.draw();
        createSkiers(5);
        createSnow(70);
        window.setInterval(update, 20);
        // let skier: Skier = new Skier();
        // skier.draw();
    }
    L09_Skipiste.handleLoad = handleLoad;
    function createSnow(_nSnowflakes) {
        console.log("Create snowflake");
        for (let i = 0; i < _nSnowflakes; i++) {
            let snowflake = new L09_Skipiste.Snowflake();
            snowflakes.push(snowflake);
        }
    }
    function createSkiers(_nSkiers) {
        console.log("Create skiers");
        for (let i = 0; i < _nSkiers; i++) {
            let skier = new L09_Skipiste.Skier();
            skiers.push(skier);
        }
    }
    function update() {
        console.log("update");
        L09_Skipiste.drawBackground();
        L09_Skipiste.drawSun({ x: 900, y: 75 });
        L09_Skipiste.drawCloud({ x: 740, y: 175 }, { x: 250, y: 75 });
        mountains.draw;
        L09_Skipiste.drawPiste();
        L09_Skipiste.drawLift({ x: 1080, y: 100 });
        L09_Skipiste.drawLift({ x: 700, y: 74 });
        L09_Skipiste.drawHouse({ x: 0, y: 300 });
        // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        // crc2.putImageData(imgData, 0, 0);
        for (let skier of skiers) {
            skier.move(1 / 50);
            skier.draw();
        }
        for (let snowflake of snowflakes) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
    }
})(L09_Skipiste || (L09_Skipiste = {}));
//# sourceMappingURL=Skipiste.js.map