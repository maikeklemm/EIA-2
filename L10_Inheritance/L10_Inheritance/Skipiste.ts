namespace L10_Skipiste {

    let imgData: ImageData;
    export interface Vekktor {
        x: number;
        y: number;
    }
    

    let moveables : Movable [] =[];
    // let skiers: Skier[] = [];
    // let snowflakes: Snowflake[] = [];

    // let imgData: ImageData
    window.addEventListener("load", handleLoad);
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
        drawLift({ x: 1080, y: 100 });
        drawLift({ x: 700, y: 74 });
        drawHouse({ x: 0, y: 300 });
        // drawSkier({ x: 10, y: 300 });
        // drawSnow();

        // let snowflake: Snowflake = new Snowflake();
        // snowflake.draw();

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        createSkiers(5);
        createSnow(70);
        window.setInterval(update, 20);


        // let skier: Skier = new Skier();
        // skier.draw();

    }

    function createSnow(_nSnowflakes: number): void {
        console.log("Create snowflake");
        for (let i: number = 0; i < _nSnowflakes; i++) {
            let snowflake: Snowflake = new Snowflake();
            moveables.push(snowflake);
        }
    }

    function createSkiers(_nSkiers: number): void {
        console.log("Create skiers");
        for (let i: number = 0; i < _nSkiers; i++) {
            let skier: Skier = new Skier();
            moveables.push(skier);
        }
    }

        function update(): void {
            console.log("update")

            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.putImageData(imgData, 0, 0);

        // drawBackground();
        // drawSun({ x: 900, y: 75 });
        // drawCloud({ x: 740, y: 175 }, { x: 250, y: 75 });
        // mountains.draw;
        // drawPiste();
        // drawLift({ x: 1080, y: 100 });
        // drawLift({ x: 700, y: 74 });
        // drawHouse({ x: 0, y: 300 });


            // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            // crc2.putImageData(imgData, 0, 0);


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

    






