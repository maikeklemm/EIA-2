namespace L11_Skipiste {

    export class Lift extends Moveable {


        constructor() {
            super();
                      
            this.velocity = new Vector(0, 0);
            this.velocity.x += Math.random() * (20 - (-20)) + (-20);
            this.velocity.y += Math.random() * (200 - 100) + 100;

        }

       public move(_timeslice: number): void {
            // console.log("moving Lift");
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

        crc2.save();
        crc2.translate(0, 0);
        
            
        crc2.fillStyle = "#830DA6";
        
       crc2.fillRect(-400,-24,110,110);
      
            crc2.restore();
        }

    }
}