namespace Fireworks {
    window.addEventListener("load", handleLoad);
    // let url:string = "http://localhost:5001/";
    let url: string = "https://einzigartig.herokuapp.com/";
    export let crc2: CanvasRenderingContext2D;


    // export interface RocketInstruction  {
    //     size: number;
    //     color: string;
    //     shape: string;
    //     name: string;
    // }

    let fireworks: Rocket[] = [];
    let rocketArray : string[]= [];     // : Rocketinstructions?

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
        rockets = JSON.parse(rockets);
        rocketArray.push(rockets);
            // console.log(rocketArray);

        // console.log("create buttons array  " + rocketArray);
        let rocketButtonDiv: HTMLElement = <HTMLElement>document.querySelector("div#RocketButtons");
        //listener?

        for(let rocketInstruction of rocketArray){
            let currentRocketInstruction :string = rocketInstruction[1];
            console.log(currentRocketInstruction );


        }

    }
    //Funktionen für Canvas:
    // function createBackground(){
    //     console.log("background")
    //     crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    // }
    function createFirework(_event:MouseEvent): void {
        console.log("Create firework");

        let mouseX : number = _event.offsetX;
        let mouseY : number = _event.offsetY;

        let particleAmount: number = 15;
        let offset: number = (Math.PI * 2)/ particleAmount;

        for (let i: number = 0; i < particleAmount; i++) {
            let firework: HeartParticle = new HeartParticle(2, "blue", mouseX, mouseY, offset, i);
            fireworks.push(firework);
            console.log(fireworks);
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
        crc2.fillStyle = "rgba(0, 0, 0, 0.09)"
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let firework of fireworks) {
            firework.move(1 / 50);
            firework.draw();
        }

       

        deleteExpandables();

    }


    function deleteExpandables(): void {
        for (let i: number = fireworks.length - 1; i >= 0; i--) {
            if (fireworks[i].expendable)
                fireworks.splice(i, 1);
                // console.log(fireworks);
        }
    }



}