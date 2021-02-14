namespace Fireworks {
    window.addEventListener("load", handleLoad);
    // let url:string = "http://localhost:5001/";
    let url: string = "https://einzigartig.herokuapp.com/";
    export let crc2: CanvasRenderingContext2D;


    export interface RocketInstruction {                    // um die Rocket Instructions aus der Datenbank weiterzuverarbeiten
        size: number;
        color: string;
        shape: string;
        name: string;
    }

    let fireworks: Rocket[] = [];                           // Array, dass alle aktuell auf dem Canvas sichtbaren Feuerwerke zeigt
    let activeRocket: RocketInstruction | null = null;      //meine globale Variable, die die RocketInstructions des aktuell geklickten Buttons hält


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


        canvas.addEventListener("click", (_event: MouseEvent) => {              // auf dem Canvas wird ein click listener installiert, der (falls zuvor ein button geklickt wurde), startFirework aufruft
            if (activeRocket != null) {
                startFirework(_event);
            }
        }); 

        window.setInterval(update, 20);

    }


    // Funktionen für Fromular 

    async function saveRocket(_event: Event): Promise<void> {
        console.log("saverocket");

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());

        let responseText: string = await response.text();

        alert(responseText, " PLEASE RELOAD THE PAGE");

        // console.log (formData);
        for (let entry of formData) {
            console.log(entry)

        }

    }

    async function findRockets(): Promise<void> {
        let response: Response = await fetch(url + "?" + "command=retrieve");
        let responseText: string = await response.text();
        console.log(responseText);

        createButtons(responseText);
    }

    function createButtons(_allSavedRockets: string): void {

        let rockets = _allSavedRockets;
        rockets = JSON.parse(rockets);
        // console.log(rockets);

        let rocketButtonDiv: HTMLElement = <HTMLElement>document.querySelector("div#RocketButtons");

        for (let i: number = 0; i < rockets.length; i++) {                                                  // die einzelnen RocketInstructions aus der Serverantwort werden durchgegangen

            let currentRocket: RocketInstruction = (rockets[i] as unknown as RocketInstruction);            // die aktuelle Rocketinstruction wird ins Format des Interfaces "Rocketinstruction" gebracht und unter der variable currentRocket gespeichert

            let currentRocketButton: HTMLButtonElement = document.createElement("button");
            rocketButtonDiv.appendChild(currentRocketButton);
            currentRocketButton.innerText = currentRocket.name;
            // currentRocketButton.addEventListener("click", clickedRocketButton)

            currentRocketButton.addEventListener("click", () => {                                           // auf dem aktuellen Button wird ein click listener erstellt, der die currentRocket in die globale Variable schreibt, damit die Instructions dieser speziellen Rocket später in "startFireworks" verwendet werden können (startFireworks wird aufgerufen wenn auf den canvas geklickt wird)
                activeRocket = currentRocket;
            });
        }
    }

    //Funktionen für Canvas:

    function startFirework(_event: MouseEvent): void {                     // wird bei click auf canvas ausgelöst

        console.log("Create firework");

        let mouseX: number = _event.offsetX;
        let mouseY: number = _event.offsetY;

        let particleAmount: number = 15;
        let offset: number = (Math.PI * 2) / particleAmount;

        for (let i: number = 0; i < particleAmount; i++) {
            if (activeRocket == null) {                                 // nur wenn der globalen variable active rocket vorher eine current rocket durch einen buttonclick zugeschrieben wurde, wird die schleife weiter ausgeführt, sonst return(es wird aus der schleife gesprungen)
                return
            }
            let firework: Rocket | null = null;
            switch (activeRocket.shape) {
                case "star":
                    firework = new StarParticle(activeRocket.size, activeRocket.color, mouseX, mouseY, offset, i);
                    break;
                case "heart":
                    firework = new HeartParticle(activeRocket.size, activeRocket.color, mouseX, mouseY, offset, i);
                    break;
                case "circle":
                    firework = new CircleParticle(activeRocket.size, activeRocket.color, mouseX, mouseY, offset, i);
                    break;
                default:
                    break;
            }

            if (firework != null) {                                     // wenn activeRocket eine Rakete war (nicht null), und somit firework auch nicht null ist (sondern darin particles erstellt wurden), dann werden diese in das globale array fireworks gepusht
                fireworks.push(firework);
                // console.log(fireworks); 
            }
        }
    }

    function update(): void {
        console.log("Update");

        if (fireworks.length == 0) {
            crc2.fillStyle = "rgba(3, 56, 89, 0.1)"
        }
        else
        crc2.fillStyle = "rgba(0, 0, 0, 0.1)"


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