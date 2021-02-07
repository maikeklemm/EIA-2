namespace Fireworks {
    window.addEventListener("load", handleLoad);
    let url:string = "http://localhost:5001/";

    async function handleLoad(_event: Event): Promise<void> {
        console.log("Start");
        // let form: HTMLFormElement = <HTMLDivElement>document.querySelector("form");

        let response: Response = await fetch("Data.json")   // nur für offer vom baarkeeper?
        // let offerrockets : string = await response.text();  // die drei zeilen gehören dazu
        // let data : Data = JSON.parse(offerrockets); // danach würde eig generate content stehen und das offer würde geladen werden

        



        let save: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#save");
        save.addEventListener("click", saveRocket);

    }
    async function saveRocket(_event: Event): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response:Response = await fetch(url +"?" + query.toString());

        let responseText: string = await response.text();

        alert(responseText);

        // console.log (formData);
        for (let entry of formData) {
            console.log(entry)
            // let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "']");    /brauche ich nur wenn ich auf ein weiteres attribut zugreifen will wie price
            // console.log(item);
        }
    }

}