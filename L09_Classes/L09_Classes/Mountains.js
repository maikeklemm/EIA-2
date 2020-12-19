"use strict";
var L09_Skipiste;
(function (L09_Skipiste) {
    class Mountains {
        constructor() {
            console.log("Mountain-constuctor");
            this.stepMin = 50;
            this.stepMax = 150;
            this.x = 0;
        }
        draw() {
            console.log("drawing Mountains");
            L09_Skipiste.crc2.save();
            L09_Skipiste.crc2.translate(0, L09_Skipiste.crc2.canvas.height * L09_Skipiste.golden);
            L09_Skipiste.crc2.beginPath();
            L09_Skipiste.crc2.moveTo(0, 700);
            L09_Skipiste.crc2.lineTo(0, -200);
            do {
                this.x += this.stepMin + Math.random() * (this.stepMax - this.stepMin);
                let y = -75 - Math.random() * (200 - 75);
                L09_Skipiste.crc2.lineTo(this.x, y);
            } while (this.x < L09_Skipiste.crc2.canvas.width);
            L09_Skipiste.crc2.lineTo(this.x, 400);
            L09_Skipiste.crc2.closePath();
            let gradient = L09_Skipiste.crc2.createLinearGradient(0, 50, 0, -200);
            gradient.addColorStop(0, "#CCCCCC");
            gradient.addColorStop(0.7, "#FFFFFF");
            L09_Skipiste.crc2.fillStyle = gradient;
            L09_Skipiste.crc2.fill();
            L09_Skipiste.crc2.restore();
        }
    }
    L09_Skipiste.Mountains = Mountains;
})(L09_Skipiste || (L09_Skipiste = {}));
//# sourceMappingURL=Mountains.js.map