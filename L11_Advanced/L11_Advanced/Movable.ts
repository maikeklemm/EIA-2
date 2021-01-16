namespace L11_Skipiste {

    export abstract class Moveable {

        
     public           hitRadius: number;
     public      position: Vector;
     protected   velocity: Vector;
     protected   size: number;
       

        constructor() {
            // console.log("Moveable constructor");

            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
        }

       public move(_timeslice: number): void {
            console.log("moving Skier");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }


        public abstract draw(): void 

       
    }
}