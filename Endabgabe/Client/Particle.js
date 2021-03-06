"use strict";
var Fireworks;
(function (Fireworks) {
    class CircleParticle extends Fireworks.Rocket {
        constructor(_size, _color, _positionX, _positionY, _offset, _i) {
            super(_size, _color, _positionX, _positionY, _offset, _i);
        }
        draw() {
            Fireworks.crc2.save();
            Fireworks.crc2.translate(this.position.x, this.position.y);
            Fireworks.crc2.scale(this.size, this.size);
            Fireworks.crc2.beginPath();
            Fireworks.crc2.arc(0, 0, 5, 0, 2 * Math.PI, true);
            Fireworks.crc2.fillStyle = this.color;
            Fireworks.crc2.fill();
            Fireworks.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Fireworks.CircleParticle = CircleParticle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Particle.js.map