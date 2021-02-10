namespace Fireworks {

    export class Rocket {

        position: Vector;
        velocity: Vector;
        color: string;
        size: number;

        constructor(_size: number, _color: string) {
            console.log("rocket constructor");

            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.x += 1;
            this.velocity.y += 1;

            this.size = _size;
            this.color = _color;
        }
        move(_timeslice: number): void {
            // console.log("rocket move");


            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

        }

        draw(): void {
            // console.log("rocket draw")
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

            // let canvas: HTMLCanvasElement | null = <HTMLCanvasElement>document.querySelector("canvas");


            for (let i = 0; i < 99; i++) {

                // let x: number = (Math.random() * canvas.width);
                // let y: number = (Math.random() * canvas.height);

                // let CirclePosition: number[][] = [[10, 2], [456, 27], [77, 30], [970, 40], [76, 52], [900, 6]]
                // let shape: number[] = CirclePosition[Math.floor(Math.random() * CirclePosition.length)]
                // console.log(shape);

                let rotation = (Math.PI / 20);
                crc2.rotate(rotation);



                crc2.beginPath();

                crc2.moveTo(0, 0);
                crc2.lineTo(100, 100);
                crc2.strokeStyle = (this.color);
                crc2.lineWidth = 0.5;
                crc2.stroke();

                crc2.restore();

            }
        }
    }
    //     drawfirework(): void {

    //     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    //     let canvas: HTMLCanvasElement | null = <HTMLCanvasElement>document.querySelector("canvas");

    //     for (let i = 0; i < 99; i++) {
    //         let x: number = (Math.random() * canvas.width);
    //         let y: number = (Math.random() * canvas.height);

    //         crc2.beginPath();
    //         crc2.moveTo(200, 200);
    //         crc2.lineTo(x, y);
    //         crc2.strokeStyle = "white";    //_color
    //         crc2.lineWidth = 2;
    //         crc2.stroke();



    //     }
    // }

    // }




    //     //     // let CirclePosition: number[][] = [[10, 10], [20, 20], [30, 30], [40, 40], [50, 50], [60, 60]]
    //     //     // let shape: number[] = CirclePosition[Math.floor(Math.random() * CirclePosition.length)]

    //     //     // crc2.beginPath();
    //     //     // crc2.moveTo(200, 200);
    //     //     // crc2.lineTo(shape);
    //     //     // crc2.strokeStyle = "white";    //_color
    //     //     // crc2.lineWidth = 2;
    //     //     // crc2.stroke();

}
