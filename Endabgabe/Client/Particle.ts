namespace Fireworks{

    export class Particle {


        position: Vector;
        velocity: Vector;
        color: string;
        size: number;



        constructor(){
            console.log("particle constructor");

            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.x += 1;
            this.velocity.y += 1;

            this.size = 10;
            this.color = "pink";

        }

        draw(){

        }

        move(){

        }
    }
}