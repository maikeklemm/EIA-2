namespace Fireworks {

    export class StarParticle extends Rocket {


        position: Vector;
        velocity: Vector;
        color: string;
        size: number;








        constructor(_size: number, _color: string, _positionX: number, _positionY: number, _offset: number, _i:number) {

            super(_size, _color, _positionX, _positionY, _offset, _i);
        }

        draw() {

           
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.rotate(180 * Math.PI / 180);

            crc2.beginPath();
           crc2.moveTo(4.4,0);
           crc2.lineTo(8.6,4.4);
           crc2.lineTo(2.6,5); // 4.8?
           crc2.lineTo(0,10.4);
           crc2.lineTo(-2.6,5);
           crc2.lineTo(-8.6,4.4);
           crc2.lineTo(-4.4,0);
           crc2.lineTo(-5.6,-6.6);
           crc2.lineTo(0,-3.6);
           crc2.lineTo(5.6,-6.6);
           crc2.lineTo(4.4,0);

            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();

          
        }

        move(_timeslice: number): void {

            super.move(_timeslice);

        }
    }
}