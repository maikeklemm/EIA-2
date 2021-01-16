namespace L11_Skipiste {

    export class Snowflake extends Moveable {


        constructor() {
            super();
            // console.log("Snowflake-constructor");

            let X = + Math.random() * (1080 - 0) + 0;;
            let Y = + Math.random() * (720 - 0) + 0;

            let SIZE = Math.random() * (0.6 - 0.3) + 0.3;
           
            this.position = new Vector(X, Y);
                
            this.velocity = new Vector(0, 0);
            this.velocity.x += Math.random() * (20 - (-20)) + (-20);
            this.velocity.y += Math.random() * (200 - 100) + 100;

            this.size = SIZE;
        }

       public move(_timeslice: number): void {
            // console.log("moving Snow");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        public draw(): void {
        //    console.log("drawing Snow");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

            let gradient: CanvasGradient = crc2.createRadialGradient(0,-3,3,5,0,20)
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "grey");

            
                    crc2.beginPath();
                    crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            
                    crc2.fillStyle = gradient;
                    crc2.fill();


            crc2.restore();
        }

    }
}