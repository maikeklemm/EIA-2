"use strict";
var L09_Skipiste;
(function (L09_Skipiste) {
    class Snowflake {
        constructor() {
            console.log("Snowflake-constructor");
            let X = +Math.random() * (1080 - 0) + 0;
            ;
            let Y = +Math.random() * (720 - 0) + 0;
            let SIZE = Math.random() * (0.6 - 0.3) + 0.3;
            this.position = new L09_Skipiste.Vector(X, Y);
            this.velocity = new L09_Skipiste.Vector(0, 0);
            this.velocity.x += Math.random() * (20 - (-20)) + (-20);
            this.velocity.y += Math.random() * (200 - 100) + 100;
            this.size = SIZE;
        }
        move(_timeslice) {
            console.log("moving Snow");
            let offset = new L09_Skipiste.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Skipiste.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Skipiste.crc2.canvas.height;
            if (this.position.x > L09_Skipiste.crc2.canvas.width)
                this.position.x -= L09_Skipiste.crc2.canvas.width;
            if (this.position.y > L09_Skipiste.crc2.canvas.height)
                this.position.y -= L09_Skipiste.crc2.canvas.height;
        }
        draw() {
            console.log("drawing Snow");
            L09_Skipiste.crc2.save();
            L09_Skipiste.crc2.translate(this.position.x, this.position.y);
            L09_Skipiste.crc2.scale(this.size, this.size);
            let gradient = L09_Skipiste.crc2.createRadialGradient(0, -3, 3, 5, 0, 20);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "grey");
            L09_Skipiste.crc2.beginPath();
            L09_Skipiste.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            L09_Skipiste.crc2.fillStyle = gradient;
            L09_Skipiste.crc2.fill();
            L09_Skipiste.crc2.restore();
        }
    }
    L09_Skipiste.Snowflake = Snowflake;
})(L09_Skipiste || (L09_Skipiste = {}));
//# sourceMappingURL=Snow.js.map