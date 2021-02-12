namespace Fireworks {

 export abstract class Rocket {

        position: Vector;
        velocity: Vector;
        color: string;
        size: number;

        public expendable: boolean = false;

        private static maxLifetime: number = 3;
        private lifetime: number = HeartParticle.maxLifetime;


        constructor(_size: number, _color: string, _positionX: number, _positionY: number, _offset: number, _i:number) {
            // console.log("rocket constructor");

            this.position = new Vector(0, 0);
            this.position.x = _positionX;
            this.position.y = _positionY;
            this.velocity = new Vector(0, 0);
            this.velocity.x = Math.cos(_offset*_i)*Math.floor(Math.random() * (60 - 50 + 1) + 50) ;
            this.velocity.y = Math.sin(_offset*_i)*Math.floor(Math.random() * (50 - 40 + 1) + 40) ;


            this.size = _size;
            this.color = _color;
        }
        move(_timeslice: number): void {
            // console.log("particle move");
        
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);


            this.lifetime -= _timeslice;
            if (this.lifetime < 0)
                this.expendable = true;
        }

        public abstract draw(): void;


       
    }

}
