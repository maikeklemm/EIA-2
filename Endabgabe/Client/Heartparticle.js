"use strict";
var Fireworks;
(function (Fireworks) {
    class HeartParticle extends Fireworks.Rocket {
        constructor(_size, _color, _positionX, _positionY, _offset, _i) {
            super(_size, _color, _positionX, _positionY, _offset, _i);
        }
        draw() {
            Fireworks.crc2.save();
            Fireworks.crc2.translate(this.position.x, this.position.y);
            Fireworks.crc2.scale(this.size, this.size);
            Fireworks.crc2.rotate(180 * Math.PI / 180);
            Fireworks.crc2.beginPath();
            Fireworks.crc2.moveTo(0, 0);
            Fireworks.crc2.lineTo(5, 7);
            Fireworks.crc2.lineTo(2.5, 10);
            Fireworks.crc2.lineTo(0, 7);
            Fireworks.crc2.lineTo(-2.5, 10);
            Fireworks.crc2.lineTo(-5, 7);
            Fireworks.crc2.lineTo(0, 0);
            Fireworks.crc2.fillStyle = this.color;
            Fireworks.crc2.fill();
            Fireworks.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Fireworks.HeartParticle = HeartParticle;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Heartparticle.js.map