"use strict";
var Fireworks;
(function (Fireworks) {
    class Rocket {
        constructor(_size, _color, _positionX, _positionY, _offset, _i) {
            // console.log("rocket constructor");
            this.expendable = false;
            this.lifetime = Fireworks.HeartParticle.maxLifetime;
            this.position = new Fireworks.Vector(0, 0);
            this.position.x = _positionX;
            this.position.y = _positionY;
            this.velocity = new Fireworks.Vector(0, 0);
            this.velocity.x = Math.cos(_offset * _i) * Math.floor(Math.random() * (60 - 50 + 1) + 50);
            this.velocity.y = Math.sin(_offset * _i) * Math.floor(Math.random() * (50 - 40 + 1) + 40);
            this.size = _size;
            this.color = _color;
        }
        move(_timeslice) {
            // console.log("particle move");
            let offset = new Fireworks.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    Rocket.maxLifetime = 3;
    Fireworks.Rocket = Rocket;
})(Fireworks || (Fireworks = {}));
//# sourceMappingURL=Rocket.js.map