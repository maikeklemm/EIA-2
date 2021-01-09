"use strict";
var L10_Skipiste;
(function (L10_Skipiste) {
    class Movable {
        constructor() {
            // console.log("Moveable constructor");
            this.position = new L10_Skipiste.Vector(0, 0);
            this.velocity = new L10_Skipiste.Vector(0, 0);
        }
        move(_timeslice) {
            console.log("moving Skier");
            let offset = new L10_Skipiste.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        draw() {
            // console.log("drawing Movable");
        }
    }
    L10_Skipiste.Movable = Movable;
})(L10_Skipiste || (L10_Skipiste = {}));
//# sourceMappingURL=Movable.js.map