"use strict";
var L10_Skipiste;
(function (L10_Skipiste) {
    let imgData;
    let moveables = [];
    // let skiers: Skier[] = [];
    // let snowflakes: Snowflake[] = [];
    // let imgData: ImageData
    window.addEventListener("load", handleLoad);
    L10_Skipiste.golden = 0.38;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Skipiste.crc2 = canvas.getContext("2d");
        L10_Skipiste.drawBackground();
        L10_Skipiste.drawSun({ x: 900, y: 75 });
        L10_Skipiste.drawCloud({ x: 740, y: 175 }, { x: 250, y: 75 });
        L10_Skipiste.drawMountains({ x: 0, y: L10_Skipiste.crc2.canvas.height * 0.38 }, 75, 200, "#CCCCCC", "#FFFFFF");
        L10_Skipiste.drawPiste();
        L10_Skipiste.drawLift({ x: 1080, y: 100 });
        L10_Skipiste.drawLift({ x: 700, y: 74 });
        L10_Skipiste.drawHouse({ x: 0, y: 300 });
        // drawSkier({ x: 10, y: 300 });
        // drawSnow();
        // let snowflake: Snowflake = new Snowflake();
        // snowflake.draw();
        imgData = L10_Skipiste.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createSkiers(5);
        createSnow(70);
        window.setInterval(update, 20);
        // let skier: Skier = new Skier();
        // skier.draw();
    }
    L10_Skipiste.handleLoad = handleLoad;
    function createSnow(_nSnowflakes) {
        console.log("Create snowflake");
        for (let i = 0; i < _nSnowflakes; i++) {
            let snowflake = new L10_Skipiste.Snowflake();
            moveables.push(snowflake);
        }
    }
    function createSkiers(_nSkiers) {
        console.log("Create skiers");
        for (let i = 0; i < _nSkiers; i++) {
            let skier = new L10_Skipiste.Skier();
            moveables.push(skier);
        }
    }
    function update() {
        console.log("update");
        L10_Skipiste.crc2.clearRect(0, 0, L10_Skipiste.crc2.canvas.width, L10_Skipiste.crc2.canvas.height);
        L10_Skipiste.crc2.putImageData(imgData, 0, 0);
        // drawBackground();
        // drawSun({ x: 900, y: 75 });
        // drawCloud({ x: 740, y: 175 }, { x: 250, y: 75 });
        // mountains.draw;
        // drawPiste();
        // drawLift({ x: 1080, y: 100 });
        // drawLift({ x: 700, y: 74 });
        // drawHouse({ x: 0, y: 300 });
        // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        // crc2.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        // console.log ( "Anzahl moveable Objekte:", moveables.length)
        // for (let snowflake of snowflakes) {
        //     snowflake.move(1 / 50);
        //     snowflake.draw();
    }
})(L10_Skipiste || (L10_Skipiste = {}));
//# sourceMappingURL=Skipiste.js.map