namespace L09_Skipiste {

    export class Mountains {
        position: Vector;
        stepMin: number;
        stepMax: number;
        x: number;


        constructor() {
            console.log("Mountain-constuctor");
            this.stepMin = 50;
            this.stepMax = 150;
            this.x = 0;
        }



        draw(): void {
            console.log("drawing Mountains");
            crc2.save();
            crc2.translate(0, crc2.canvas.height * golden);

            crc2.beginPath();
            crc2.moveTo(0, 700);
            crc2.lineTo(0, -200);

            do {
                this.x += this.stepMin + Math.random() * (this.stepMax - this.stepMin);
                let y: number = -75 - Math.random() * (200 - 75);

                crc2.lineTo(this.x, y);
            } while (this.x < crc2.canvas.width);

            crc2.lineTo(this.x, 400);
            crc2.closePath();

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 50, 0, -200);
            gradient.addColorStop(0, "#CCCCCC");
            gradient.addColorStop(0.7, "#FFFFFF");

            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.restore();

        }

    }

   
}
