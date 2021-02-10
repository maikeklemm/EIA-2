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


        // let firstbutton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#firstbutton");
        // firstbutton.addEventListener("click", useRocket);

        findRockets();

        let save: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#save");
        save.addEventListener("click", saveRocket);

        // für canvas:
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";

        canvas.addEventListener("click", createFirework);


        // createFirework(1);

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

    async function findRockets() : Promise<void> {
        let response: Response = await fetch(url + "?" + "command=retrieve");
        let responseText: string = await response.text();
        console.log(responseText);
        // alert(responseText.replace(/<br>/g, " "));
        
        createButtons(responseText);

    }

    function createButtons(_allSavedRockets: string): void {
        let rockets = _allSavedRockets;
        let rocketArray = JSON.parse(rockets);
        console.log("create buttons array  " + rocketArray);
        let rocketButtonDiv: HTMLElement = <HTMLElement>document.querySelector("div#RocketButtons");
        //listener?


    }
    //Funktionen für Canvas:
    // function createBackground(){
    //     console.log("background")
    //     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    // }
    function createFirework(_event:Event): void {
        console.log("Create firework");
        console.log(_event);
        for (let i: number = 0; i < 1; i++) {
            let firework: Rocket = new Rocket(10, "red");
            fireworks.push(firework);
        }
    }

    // function particleGo():void {

    //     for(let i=0; i<400; i++){
    //         let particles: Particle = new Particle();
    //         particles.push(fireworks);

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