namespace Fireworks {

    export class CircleParticle extends Rocket {


        constructor(_size: number, _color: string, _positionX: number, _positionY: number, _offset: number, _i:number) {

            super(_size, _color, _positionX, _positionY, _offset, _i);
        }

        draw() {

           
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI, true);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();

          
        }

        move(_timeslice: number): void {

        super.move(_timeslice);

        }
    }
}