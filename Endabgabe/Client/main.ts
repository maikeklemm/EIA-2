namespace Fireworks {
    window.addEventListener("load", handleLoad);
    // let url:string = "http://localhost:5001/";
    let url: string = "https://einzigartig.herokuapp.com/";
    export let crc2: CanvasRenderingContext2D;


    export interface RocketInstruction {
        size: number;
        color: string;
        shape: string;
        name: string;
    }

    let fireworks: Rocket[] = [];
    // let rocketArray : string[]= [];     // : Rocketinstructions?

    //Funktionen:


    async function handleLoad(_event: Event): Promise<void> {
        console.log("Start");
        // für datenbank und server:

        findRockets();

        let save: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#save");
        save.addEventListener("click", saveRocket);

        // für canvas:
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        // canvas.addEventListener("click", createFirework);
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

        }

    }

    async function findRockets(): Promise<void> {
        let response: Response = await fetch(url + "?" + "command=retrieve");
        let responseText: string = await response.text();
        console.log(responseText);
        // alert(responseText.replace(/<br>/g, " "));

        createButtons(responseText);

    }

    function createButtons(_allSavedRockets: string): void {

        let canvas: HTMLCanvasElement  = <HTMLCanvasElement>document.querySelector("canvas");
  
        let rockets = _allSavedRockets;
        rockets = JSON.parse(rockets);

        console.log(rockets);

        // console.log("create buttons array  " + rocketArray);
        let rocketButtonDiv: HTMLElement = <HTMLElement>document.querySelector("div#Nightsky");


        for (let i: number = 0; i < rockets.length; i++) {

            let currentRocketName: string = (rockets[i] as unknown as RocketInstruction).name;
            console.log(currentRocketName);

            let currentRocketColor: string = (rockets[i] as unknown as RocketInstruction).color;
            console.log(currentRocketColor);
            let currentRocketSize: number = (rockets[i] as unknown as RocketInstruction).size;
            console.log(currentRocketSize);
            let currentRocketShape: string = (rockets[i] as unknown as RocketInstruction).shape;
            console.log(currentRocketShape);

            let currentRocketButton: HTMLButtonElement = document.createElement("button");
            rocketButtonDiv.appendChild(currentRocketButton);
            currentRocketButton.innerText = currentRocketName;
            // currentRocketButton.addEventListener("click", clickedRocketButton)

            switch (currentRocketShape) {
                case "star":
                    // canvas.removeEventListener("click", StarRocket, false); 
                    currentRocketButton.addEventListener("click", clickStarShape);
                    function clickStarShape(_event: MouseEvent): void {

                        canvas.addEventListener("click", StarRocket);
                        function StarRocket(_event: MouseEvent): void {
                            console.log("this is a star");
                            console.log("Create firework");

                            let mouseX: number = _event.offsetX;
                            let mouseY: number = _event.offsetY;

                            let particleAmount: number = 15;
                            let offset: number = (Math.PI * 2) / particleAmount;

                            for (let i: number = 0; i < particleAmount; i++) {
                                let firework: StarParticle = new StarParticle(currentRocketSize, currentRocketColor, mouseX, mouseY, offset, i);
                                fireworks.push(firework);
                                console.log(fireworks);
                            }
                        }
                    }

                    break;

                case "heart":
                    currentRocketButton.addEventListener("click", HeartRocket);
                    function HeartRocket(_event: MouseEvent): void {
                        console.log("this is a  heart");

                        console.log("Create firework");

                        // let mouseX: number = _event.offsetX;
                        // let mouseY: number = _event.offsetY;

                        let particleAmount: number = 15;
                        let offset: number = (Math.PI * 2) / particleAmount;

                        for (let i: number = 0; i < particleAmount; i++) {
                            let firework: HeartParticle = new HeartParticle(currentRocketSize, currentRocketColor, 200, 200, offset, i);
                            fireworks.push(firework);
                            console.log(fireworks);
                        }
                    }
                    break;



                case "circle":
                    currentRocketButton.addEventListener("click", CircleRocket);
                    function CircleRocket(_event: MouseEvent): void {
                        console.log("this is a  circle");
                        console.log("Create firework");

                        // let mouseX: number = _event.offsetX;
                        // let mouseY: number = _event.offsetY;

                        let particleAmount: number = 15;
                        let offset: number = (Math.PI * 2) / particleAmount;

                        for (let i: number = 0; i < particleAmount; i++) {
                            let firework: CircleParticle = new CircleParticle(currentRocketSize, currentRocketColor, 200, 200, offset, i);
                            fireworks.push(firework);
                            console.log(fireworks);
                        }
                    }
                    break;



                default:
                    break;
            }




        }
    }

    function clickedRocketButton() {
        console.log(" you clicked a button")
    }


    //Funktionen für Canvas:

    function createFirework(_event: MouseEvent): void {
        console.log("Create firework");

        let mouseX: number = _event.offsetX;
        let mouseY: number = _event.offsetY;

        let particleAmount: number = 15;
        let offset: number = (Math.PI * 2) / particleAmount;


        for (let i: number = 0; i < particleAmount; i++) {
            let firework: HeartParticle = new HeartParticle(2, "blue", mouseX, mouseY, offset, i);
            fireworks.push(firework);
            console.log(fireworks);
        }
    }

 

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