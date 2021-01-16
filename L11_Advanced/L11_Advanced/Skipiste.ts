namespace L11_Skipiste {

    let imgData: ImageData;
    export interface Vekktor {
        x: number;
        y: number;
    }
    

    let moveables : Moveable [] =[];
    // let skiers: Skier[] = [];
    // let snowflakes: Snowflake[] = [];

    window.addEventListener("load", handleLoad);
    // window.addEventListener("click", hitSkier);
  
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.38;

    export function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
      



        drawBackground();
        drawSun({ x: 900, y: 75 });
        drawCloud({ x: 740, y: 175 }, { x: 250, y: 75 });
        drawMountains({ x: 0, y:crc2.canvas.height * 0.38}, 75, 200, "#CCCCCC", "#FFFFFF");
        drawPiste();
        // drawLift({ x: 1080, y: 100 });
        // drawLift({ x: 700, y: 74 });
        drawHouse({ x: 0, y: 300 });


        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        createSkiers(5);
        createSnow(70);
        createLift(1);
        window.setInterval(update, 20);


    }
    // function hitSkier(_event: MouseEvent) {
    //     let Mouseposition: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop)
    //     for (let oneSkier of moveables){
    //         if(oneSkier.position.x - oneSkier.hitRadius < Mouseposition.x && oneSkier.position.x + oneSkier.hitRadius > Mouseposition.x){
    //             if(oneSkier.position.y - oneSkier.hitRadius < Mouseposition.y && oneSkier.position.y + oneSkier.hitRadius> Mouseposition.y)
    //             oneSkier.position = new Vector (0, oneSkier.y);

    //             console.log (oneSkier.position);
    //         }
    //     }
        // if(Mouseposition == Skier.position && Mouseposition -10) //???
        // Skier.isHit = true;
        
        
    }

    function createSnow(_nSnowflakes: number): void {
        console.log("Create snowflake");
        for (let i: number = 0; i < _nSnowflakes; i++) {
            let snowflake: Snowflake = new Snowflake();
            moveables.push(snowflake);
        }
    }
    function createLift(_nLift: number): void {
        console.log("Create lift");
        for (let i: number = 0; i < _nLift; i++) {
            let lift: Lift = new Lift();
            moveables.push(lift);
        }
    }

    function createSkiers(_nSkiers: number): void {
        console.log("Create skiers");
        let y: number = 200;
        for (let i: number = 0; i < _nSkiers; i++) {
            let oneSkier: Moveable = new Skier (y);
            y+= 50;
            moveables.push(oneSkier);
        }
    }

        function update(): void {
            console.log("update")

            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.putImageData(imgData, 0, 0);

      

            for (let moveable of moveables) {
                moveable.move(1 / 50);
                moveable.draw();

            
            }

            // console.log ( "Anzahl moveable Objekte:", moveables.length)
            // for (let snowflake of snowflakes) {
            //     snowflake.move(1 / 50);
            //     snowflake.draw();

            }

        }

    






