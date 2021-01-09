namespace L10_Skipiste {

    export class Movable {

        position: Vector;
        velocity: Vector;
        size: number;
       

        constructor() {
            // console.log("Moveable constructor");

            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
        }

        move(_timeslice: number): void {
            console.log("moving Skier");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }


        draw(): void {

            // console.log("drawing Movable");
        }

       
    }
}