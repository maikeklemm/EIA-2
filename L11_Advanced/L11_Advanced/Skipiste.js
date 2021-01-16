"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    let imgData;
    let moveables = [];
    // let skiers: Skier[] = [];
    // let snowflakes: Snowflake[] = [];
    window.addEventListener("load", handleLoad);
    L11_Skipiste.golden = 0.38;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Skipiste.crc2 = canvas.getContext("2d");
        L11_Skipiste.drawBackground();
        L11_Skipiste.drawSun({ x: 900, y: 75 });
        L11_Skipiste.drawCloud({ x: 740, y: 175 }, { x: 250, y: 75 });
        L11_Skipiste.drawMountains({ x: 0, y: L11_Skipiste.crc2.canvas.height * 0.38 }, 75, 200, "#CCCCCC", "#FFFFFF");
        L11_Skipiste.drawPiste();
        // drawLift({ x: 1080, y: 100 });
        // drawLift({ x: 700, y: 74 });
        L11_Skipiste.drawHouse({ x: 0, y: 300 });
        imgData = L11_Skipiste.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createSkiers(5);
        createSnow(70);
        createLift(1);
        window.setInterval(update, 20);
    }
    L11_Skipiste.handleLoad = handleLoad;
    // function hitSkier(_event: MouseEvent) {
    //     let Mouseposition: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop)
    //     for (let oneSkier of moveables){
    //         if(oneSkier.position.x - oneSkier.hitRadius < Mouseposition.x && oneSkier.position.x + oneSkier.hitRadius > Mouseposition.x){
    //             if(oneSkier.position.y - oneSkier.hitRadius < Mouseposition.y && oneSkier.position.y + oneSkier.hitRadius> Mouseposition.y)
    //             oneSkier.position = new Vector (0, oneSkier.y);
    //             console.log (oneSkier.position);
    //         }
    //     }
    // if(Mouseposition == Skier.position && Mouseposition -10) //???
    // Skier.isHit = true;
})(L11_Skipiste || (L11_Skipiste = {}));
function createSnow(_nSnowflakes) {
    console.log("Create snowflake");
    for (let i = 0; i < _nSnowflakes; i++) {
        let snowflake = new Snowflake();
        moveables.push(snowflake);
    }
}
function createLift(_nLift) {
    console.log("Create lift");
    for (let i = 0; i < _nLift; i++) {
        let lift = new Lift();
        moveables.push(lift);
    }
}
function createSkiers(_nSkiers) {
    console.log("Create skiers");
    let y = 200;
    for (let i = 0; i < _nSkiers; i++) {
        let oneSkier = new Skier(y);
        y += 50;
        moveables.push(oneSkier);
    }
}
function update() {
    console.log("update");
    crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    crc2.putImageData(imgData, 0, 0);
    for (let moveable of moveables) {
        moveable.move(1 / 50);
        moveable.draw();
    }
    // console.log ( "Anzahl moveable Objekte:", moveables.length)
    // for (let snowflake of snowflakes) {
    //     snowflake.move(1 / 50);
    //     snowflake.draw();
}
//# sourceMappingURL=Skipiste.js.map