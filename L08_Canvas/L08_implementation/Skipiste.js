"use strict";
var L08_Skipiste;
(function (L08_Skipiste) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.38;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 900, y: 75 });
        drawCloud({ x: 740, y: 175 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "#CCCCCC", "#FFFFFF");
        drawPiste();
        drawLift({ x: 1080, y: 100 });
        drawLift({ x: 700, y: 74 });
        drawHouse({ x: 0, y: 300 });
        drawSkier({ x: 10, y: 300 });
        drawSnow();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#38D4F2");
        gradient.addColorStop(golden, "#5DB3F4");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#F2D080");
        gradient.addColorStop(1, "HSLA(42, 47%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let radiusParticle = 70;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(203, 20%, 97%, 0.5)");
        gradient.addColorStop(1, "HSLA(203, 20%, 97%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawPiste() {
        console.log("drawing Piste");
        crc2.beginPath();
        crc2.moveTo(0, 150);
        crc2.lineTo(1080, 470);
        crc2.lineTo(1080, 720);
        crc2.lineTo(0, 720);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 100, 0, 920);
        gradient.addColorStop(0, "#CFDDE6");
        gradient.addColorStop(0.9, "white");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 700);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 400);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 50, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawSkier(_position) {
        console.log("drawing Skier");
        let SkierColors = ["#830DA6", "#38F2AA", "#F2B31F", "#0033A6", "#4513F2", "#F21371", "#38F240"];
        for (let i = 0; i < 6; i++) {
            _position.x += Math.random() * (280 - 1) + 1;
            _position.y += Math.random() * (100 - 1) + 1;
            let SIZE = Math.random() * (0.5 - 0.3) + 0.3;
            let randomColor = SkierColors[Math.floor(Math.random() * SkierColors.length)];
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.rotate(Math.PI / 10);
            crc2.scale(SIZE, SIZE);
            crc2.beginPath();
            crc2.moveTo(0, 15);
            crc2.lineTo(100, 15);
            crc2.lineTo(130, -15);
            crc2.lineTo(0, -15); //Fuß
            crc2.lineTo(0, -70); //Knie
            crc2.lineTo(-50, -140); //Hüfte
            crc2.lineTo(0, -210); //Oberkörper
            crc2.lineTo(-40, -210);
            crc2.lineTo(-90, -140); //Hüfte
            crc2.lineTo(-40, -70); //Knie
            crc2.lineTo(-40, -15); //Fuß
            crc2.lineTo(-140, -15);
            crc2.lineTo(-140, 15);
            crc2.lineTo(0, 15);
            crc2.closePath;
            crc2.arc(0, -250, 30, 0, 2 * Math.PI); //Kopf
            crc2.rect(-180, -185, 200, 20); //skistock
            crc2.fillStyle = randomColor;
            crc2.fill();
            crc2.restore();
        }
    }
    function drawSnow() {
        console.log("drawing Snow");
        let gradient = crc2.createRadialGradient(0, -3, 3, 5, 0, 20);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "grey");
        for (let i = 0; i < 80; i++) {
            let x = +Math.random() * (1080 - 0) + 0;
            ;
            let y = +Math.random() * (720 - 0) + 0;
            let SIZE = Math.random() * (0.6 - 0.3) + 0.3;
            crc2.save();
            crc2.translate(x, y);
            crc2.scale(SIZE, SIZE);
            crc2.beginPath();
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
    }
    function drawHouse(_position) {
        console.log("drawing House");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(0.8, 0.8);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(100, 0);
        crc2.lineTo(100, -200);
        crc2.lineTo(0, -300);
        crc2.closePath;
        crc2.fillStyle = "#830DA6";
        crc2.fill();
        crc2.restore();
        crc2.save();
        crc2.translate(1080, 100);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-1080, -75);
        crc2.lineWidth = 8;
        crc2.strokeStyle = "#F2B31F";
        crc2.stroke();
        crc2.restore();
    }
    function drawLift(_position) {
        console.log("drawing Lift");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "#830DA6";
        crc2.fillRect(-400, -24, 110, 110);
        crc2.restore();
    }
})(L08_Skipiste || (L08_Skipiste = {}));
//# sourceMappingURL=Skipiste.js.map