"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Lift extends L11_Skipiste.Moveable {
        constructor() {
            super();
            this.velocity = new L11_Skipiste.Vector(0, 0);
            this.velocity.x += Math.random() * (20 - (-20)) + (-20);
            this.velocity.y += Math.random() * (200 - 100) + 100;
        }
        move(_timeslice) {
            // console.log("moving Lift");
            let offset = new L11_Skipiste.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_Skipiste.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Skipiste.crc2.canvas.height;
            if (this.position.x > L11_Skipiste.crc2.canvas.width)
                this.position.x -= L11_Skipiste.crc2.canvas.width;
            if (this.position.y > L11_Skipiste.crc2.canvas.height)
                this.position.y -= L11_Skipiste.crc2.canvas.height;
        }
        draw() {
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(0, 0);
            L11_Skipiste.crc2.fillStyle = "#830DA6";
            L11_Skipiste.crc2.fillRect(-400, -24, 110, 110);
            L11_Skipiste.crc2.restore();
        }
    }
    L11_Skipiste.Lift = Lift;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=Lift.js.map