namespace Fireworks {
    window.addEventListener("load", handleLoad);
    // let url:string = "http://localhost:5001/";
    let url: string = "https://einzigartig.herokuapp.com/";
    export let crc2: CanvasRenderingContext2D;


    let fireworks: Rocket[] = [];

    //Funktionen:


    async function handleLoad(_event: Event): Promise<void> {
        console.log("Start");
        // für datenbank und server:


        // let form: HTMLFormElement = <HTMLDivElement>document.querySelector("form");

        // let response: Response = await fetch("Data.json")   // nur für offer vom baarkeeper?
        // let offerrockets : string = await response.text();  // die drei zeilen gehören dazu
        // let data : Data = JSON.parse(offerrockets); // danach würde eig generate content stehen und das offer würde geladen werden



        let firstbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#firstbutton");
        firstbutton.addEventListener("click", useRocket);


        let save: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#save");
        save.addEventListener("click", saveRocket);

        // für canvas:
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";

        // canvas.addEventListener("click", startFirework);

        // createBackground();

        // let firework: Rocket =new Rocket(20, "blue")
        // console.log(firework);
        // firework.draw();
        // firework.move(0.1);

        createFirework(1);

        window.setInterval(update, 20);

    }

    // Funktionen für Fromular 

    async function saveRocket(_event: Event): Promise<void> {
        console.log("saverocket");

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());

        let responseText: string = await response.text();

        alert(responseText);

        // console.log (formData);
        for (let entry of formData) {
            console.log(entry)
            // let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");    /brauche ich nur wenn ich auf ein weiteres attribut zugreifen will wie price
            // console.log(item);
        }
    
    }

    async function useRocket() : Promise<void> {
        let response: Response = await fetch(url + "?" + "command=retrieve");
        let responseText: string = await response.text();
        console.log(responseText);
        alert(responseText.replace(/<br>/g, " "));
        
        
        console.log(fireworks)
    }

    //Funktionen für Canvas:
    // function createBackground(){
    //     console.log("background")
    //     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    // }
    function createFirework(_nRockets: number): void {
        console.log("Create firework");
        for (let i: number = 0; i < _nRockets; i++) {
            let firework: Rocket = new Rocket(10, "red");
            fireworks.push(firework);
        }
    }


    // function drawfirework(): void {

    //     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    //     let canvas: HTMLCanvasElement | null = document.querySelector("canvas");

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

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let firework of fireworks) {
            firework.move(1 / 50);
            firework.draw();
        }

        // function startFirework(_event: MouseEvent): void {
        //     console.log("start firework");
        //     let origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        //     let velocity: Vector = new Vector(100, 100);
        //     let particle: Particle = new Particle(origin, velocity);
        //     fireworks.push(particle);
        // }

    }
}