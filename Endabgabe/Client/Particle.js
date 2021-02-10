"use strict";
var Fireworks;
(function (Fireworks) {
    class Particle {
        constructor() {
            console.log("particle constructor");
            this.position = new Fireworks.Vector(0, 0);
            this.velocity = new Fireworks.Vector(0, 0);
            this.velocity.x += 1;
            this.velocity.y += 1;
            this.size = 10;
            this.color = "pink";
        }
        draw() {
        }
        move() {
        }
    }
    Fireworks.Particle = Particle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Particle.js.map