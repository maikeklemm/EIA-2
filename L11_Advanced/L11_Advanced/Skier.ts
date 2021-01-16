namespace L11_Skipiste {

    export class Skier extends Moveable {

        public isHit: boolean;
        hitRadius : number;
        private color: string;



        constructor() {

            super();

            // console.log("Skier constructor");

            let SIZE = Math.random() * (0.5 - 0.3) + 0.3;


            let X = Math.random() * (1080 - 1) + 1;
            let Y = Math.random() * (720 - 350) + 350;


            this.position = new Vector(X, Y);

            this.velocity = new Vector(0, 0);
            this.velocity.x += Math.random() * (400 - 100) + 100;
            this.velocity.y += Math.random() * (80 - 30) + 30;

            this.size = SIZE;

            let SkierColors: string[] = ["#830DA6", "#38F2AA", "#F2B31F", "#0033A6", "#4513F2", "#F21371", "#38F240"];

            this.color = SkierColors[Math.floor(Math.random() * SkierColors.length)]

            this.hitRadius = 15;

        }

        move(_timeslice: number): void {
            // console.log("moving Skier");
            if(this.isHit== false){
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);


            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= (crc2.canvas.height/2);
                // this.position.x -= crc2.canvas.width;
            }
             
            else {
                let offset: Vector = new Vector(0, 0);
                offset.scale(_timeslice);
                this.position.add(offset);

                setTimeout(() => {
                    2000;
                }, timeout);

                //?????????????????????
            }
        }


        draw(): void {

            // console.log("drawing Skier");
           
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

            crc2.rotate(Math.PI / 10);


            crc2.beginPath();
            crc2.moveTo(0, 15);
            crc2.lineTo(100, 15);
            crc2.lineTo(130, -15);
            crc2.lineTo(0, -15); //Fuß
            crc2.lineTo(0, -70); //Knie
            crc2.lineTo(-50, -140);//Hüfte
            crc2.lineTo(0, -210); //Oberkörper
            crc2.lineTo(-40, -210);
            crc2.lineTo(-90, -140);//Hüfte
            crc2.lineTo(-40, -70); //Knie
            crc2.lineTo(-40, -15); //Fuß
            crc2.lineTo(-140, -15);
            crc2.lineTo(-140, 15);
            crc2.lineTo(0, 15);
            crc2.closePath;

            crc2.arc(0, -250, 30, 0, 2 * Math.PI);  //Kopf

            crc2.rect(-180, -185, 200, 20);   //skistock
            
            crc2.translate(0, 200);   //?? Positions-punkt verschieben, kein plan warum das nicht funktioniert? ich wollte es, damit ein skifahrer nicht zuerst unten aus dem bildrand fährt bevor rechts, denn dann kommt er in der luft raus.


            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.restore();
        }

    //    public isHit (_hotspot: Vector):boolean {
    //        console.log("Skier is hit");
    //    }
    }
}