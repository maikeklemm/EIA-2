"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    function drawBackground() {
        console.log("Background");
        let gradient = L11_Skipiste.crc2.createLinearGradient(0, 0, 0, L11_Skipiste.crc2.canvas.height);
        gradient.addColorStop(0, "#38D4F2");
        gradient.addColorStop(L11_Skipiste.golden, "#5DB3F4");
        L11_Skipiste.crc2.fillStyle = gradient;
        L11_Skipiste.crc2.fillRect(0, 0, L11_Skipiste.crc2.canvas.width, L11_Skipiste.crc2.canvas.height);
    }
    L11_Skipiste.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = L11_Skipiste.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#F2D080");
        gradient.addColorStop(1, "HSLA(42, 47%, 100%, 0)");
        L11_Skipiste.crc2.save();
        L11_Skipiste.crc2.translate(_position.x, _position.y);
        L11_Skipiste.crc2.fillStyle = gradient;
        L11_Skipiste.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_Skipiste.crc2.fill();
        L11_Skipiste.crc2.restore();
    }
    L11_Skipiste.drawSun = drawSun;
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 40;
        let radiusParticle = 70;
        let particle = new Path2D();
        let gradient = L11_Skipiste.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(203, 20%, 97%, 0.5)");
        gradient.addColorStop(1, "HSLA(203, 20%, 97%, 0)");
        L11_Skipiste.crc2.save();
        L11_Skipiste.crc2.translate(_position.x, _position.y);
        L11_Skipiste.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L11_Skipiste.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L11_Skipiste.crc2.translate(x, y);
            L11_Skipiste.crc2.fill(particle);
            L11_Skipiste.crc2.restore();
        }
        L11_Skipiste.crc2.restore();
    }
    L11_Skipiste.drawCloud = drawCloud;
    function drawPiste() {
        console.log("drawing Piste");
        L11_Skipiste.crc2.beginPath();
        L11_Skipiste.crc2.moveTo(0, 150);
        L11_Skipiste.crc2.lineTo(1080, 470);
        L11_Skipiste.crc2.lineTo(1080, 720);
        L11_Skipiste.crc2.lineTo(0, 720);
        L11_Skipiste.crc2.closePath();
        let gradient = L11_Skipiste.crc2.createLinearGradient(0, 100, 0, 920);
        gradient.addColorStop(0, "#CFDDE6");
        gradient.addColorStop(0.9, "white");
        L11_Skipiste.crc2.fillStyle = gradient;
        L11_Skipiste.crc2.fill();
    }
    L11_Skipiste.drawPiste = drawPiste;
    function drawHouse(_position) {
        console.log("drawing House");
        L11_Skipiste.crc2.save();
        L11_Skipiste.crc2.translate(_position.x, _position.y);
        L11_Skipiste.crc2.scale(0.8, 0.8);
        L11_Skipiste.crc2.beginPath();
        L11_Skipiste.crc2.moveTo(0, 0);
        L11_Skipiste.crc2.lineTo(100, 0);
        L11_Skipiste.crc2.lineTo(100, -200);
        L11_Skipiste.crc2.lineTo(0, -300);
        L11_Skipiste.crc2.closePath;
        L11_Skipiste.crc2.fillStyle = "#830DA6";
        L11_Skipiste.crc2.fill();
        L11_Skipiste.crc2.restore();
        L11_Skipiste.crc2.save();
        L11_Skipiste.crc2.translate(1080, 100);
        L11_Skipiste.crc2.beginPath();
        L11_Skipiste.crc2.moveTo(0, 0);
        L11_Skipiste.crc2.lineTo(-1080, -75);
        L11_Skipiste.crc2.lineWidth = 8;
        L11_Skipiste.crc2.strokeStyle = "#F2B31F";
        L11_Skipiste.crc2.stroke();
        L11_Skipiste.crc2.restore();
    }
    L11_Skipiste.drawHouse = drawHouse;
    function drawLift(_position) {
        console.log("drawing Lift");
        L11_Skipiste.crc2.save();
        L11_Skipiste.crc2.translate(_position.x, _position.y);
        L11_Skipiste.crc2.fillStyle = "#830DA6";
        L11_Skipiste.crc2.fillRect(-400, -24, 110, 110);
        L11_Skipiste.crc2.restore();
    }
    L11_Skipiste.drawLift = drawLift;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11_Skipiste.crc2.save();
        L11_Skipiste.crc2.translate(_position.x, _position.y);
        L11_Skipiste.crc2.beginPath();
        L11_Skipiste.crc2.moveTo(0, 700);
        L11_Skipiste.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_Skipiste.crc2.lineTo(x, y);
        } while (x < L11_Skipiste.crc2.canvas.width);
        L11_Skipiste.crc2.lineTo(x, 400);
        L11_Skipiste.crc2.closePath();
        let gradient = L11_Skipiste.crc2.createLinearGradient(0, 50, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_Skipiste.crc2.fillStyle = gradient;
        L11_Skipiste.crc2.fill();
        L11_Skipiste.crc2.restore();
    }
    L11_Skipiste.drawMountains = drawMountains;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=Background.js.map