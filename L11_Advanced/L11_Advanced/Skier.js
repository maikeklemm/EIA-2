"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Skier extends L11_Skipiste.Moveable {
        constructor() {
            super();
            // console.log("Skier constructor");
            let SIZE = Math.random() * (0.5 - 0.3) + 0.3;
            let X = Math.random() * (1080 - 1) + 1;
            let Y = Math.random() * (720 - 350) + 350;
            this.position = new L11_Skipiste.Vector(X, Y);
            this.velocity = new L11_Skipiste.Vector(0, 0);
            this.velocity.x += Math.random() * (400 - 100) + 100;
            this.velocity.y += Math.random() * (80 - 30) + 30;
            this.size = SIZE;
            let SkierColors = ["#830DA6", "#38F2AA", "#F2B31F", "#0033A6", "#4513F2", "#F21371", "#38F240"];
            this.color = SkierColors[Math.floor(Math.random() * SkierColors.length)];
            this.hitRadius = 15;
        }
        move(_timeslice) {
            // console.log("moving Skier");
            if (this.isHit == false) {
                let offset = new L11_Skipiste.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeslice);
                this.position.add(offset);
                if (this.position.x > L11_Skipiste.crc2.canvas.width)
                    this.position.x -= L11_Skipiste.crc2.canvas.width;
                if (this.position.y > L11_Skipiste.crc2.canvas.height)
                    this.position.y -= (L11_Skipiste.crc2.canvas.height / 2);
                // this.position.x -= crc2.canvas.width;
            }
            else {
                let offset = new L11_Skipiste.Vector(0, 0);
                offset.scale(_timeslice);
                this.position.add(offset);
                setTimeout(() => {
                    2000;
                }, timeout);
                //?????????????????????
            }
        }
        draw() {
            // console.log("drawing Skier");
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(this.position.x, this.position.y);
            L11_Skipiste.crc2.scale(this.size, this.size);
            L11_Skipiste.crc2.rotate(Math.PI / 10);
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(0, 15);
            L11_Skipiste.crc2.lineTo(100, 15);
            L11_Skipiste.crc2.lineTo(130, -15);
            L11_Skipiste.crc2.lineTo(0, -15); //Fuß
            L11_Skipiste.crc2.lineTo(0, -70); //Knie
            L11_Skipiste.crc2.lineTo(-50, -140); //Hüfte
            L11_Skipiste.crc2.lineTo(0, -210); //Oberkörper
            L11_Skipiste.crc2.lineTo(-40, -210);
            L11_Skipiste.crc2.lineTo(-90, -140); //Hüfte
            L11_Skipiste.crc2.lineTo(-40, -70); //Knie
            L11_Skipiste.crc2.lineTo(-40, -15); //Fuß
            L11_Skipiste.crc2.lineTo(-140, -15);
            L11_Skipiste.crc2.lineTo(-140, 15);
            L11_Skipiste.crc2.lineTo(0, 15);
            L11_Skipiste.crc2.closePath;
            L11_Skipiste.crc2.arc(0, -250, 30, 0, 2 * Math.PI); //Kopf
            L11_Skipiste.crc2.rect(-180, -185, 200, 20); //skistock
            L11_Skipiste.crc2.translate(0, 200); //?? Positions-punkt verschieben, kein plan warum das nicht funktioniert? ich wollte es, damit ein skifahrer nicht zuerst unten aus dem bildrand fährt bevor rechts, denn dann kommt er in der luft raus.
            L11_Skipiste.crc2.fillStyle = this.color;
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.restore();
        }
    }
    L11_Skipiste.Skier = Skier;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=Skier.js.map