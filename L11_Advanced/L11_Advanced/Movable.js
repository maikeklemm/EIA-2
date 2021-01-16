"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    class Moveable {
        constructor() {
            // console.log("Moveable constructor");
            this.position = new L11_Skipiste.Vector(0, 0);
            this.velocity = new L11_Skipiste.Vector(0, 0);
        }
        move(_timeslice) {
            console.log("moving Skier");
            let offset = new L11_Skipiste.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
    L11_Skipiste.Moveable = Moveable;
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=Movable.js.map