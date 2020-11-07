namespace L04_Potions {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");

        // gernerateContent(data);
        
 
        // let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        // form.addEventListener("change", handleChange);
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#submit");
        submit.addEventListener("click", handleSubmit);
    
    }
   
    function handleSubmit(_event: Event): void {
        console.log(_event);

        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#submit");
        let potion: HTMLDivElement = <HTMLDivElement>document.querySelector("div#potion");
        potion.innerHTML = "";

        let total: number = 0;
    
        
         let name: HTMLInputElement = <HTMLInputElement>document.querySelector("input#name");
         console.log(name.name, ":", name.value);
         potion.innerHTML += "Name of potion: " + name.value + "<br>";

         let desc: HTMLInputElement = <HTMLInputElement>document.querySelector("textarea#description");
         console.log(desc.name, ":", desc.value);
         potion.innerHTML += "Description: " + desc.value + "<br>";

         let effect: HTMLInputElement = <HTMLInputElement>document.querySelector("select#effect");
         console.log(effect.name, ":", effect.value);
         potion.innerHTML += "Effect: " + effect.value + "<br>";

         let time: HTMLInputElement = <HTMLInputElement>document.querySelector("input#time");
         console.log(time.name, ":", time.value);
         potion.innerHTML += "Duration of effect: " + time.value + "h" + "<br>"+ "<br>";

        //  let Zutat: HTMLInputElement = <HTMLInputElement>document.querySelector("input#zutat");
        //  console.log(Zutat.name, ":", Zutat.value);
        //  potion.innerHTML += "Add: " + Zutat.value + "<br>";


         let temperature: HTMLInputElement = <HTMLInputElement>document.querySelector("input#temperature");
         console.log(temperature.name, ":", temperature.value);
         potion.innerHTML += "Required temperature : " + temperature.value + "°C" + "<br>";

         let stir: HTMLInputElement = <HTMLInputElement>document.querySelector("input#stir");
         console.log(stir.name, ":", stir.value);
          if(stir.value == "1") {
            potion.innerHTML += "Stir : occasionally " +  "<br>";
          }
          if(stir.value == "2") {
            potion.innerHTML += "Stir : continously " +  "<br>";
          }
        
        let result: HTMLInputElement = <HTMLInputElement>document.querySelector("input.result");
         console.log(result.name, ":", result.value);
         potion.innerHTML += "Result : " + result.value + "<br>";

        let formData: FormData[] = <FormData> new FormData(document.forms[0]);
        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
            let price: number = Number(item.getAttribute("price"));
    
            potion.innerHTML += item.name + "  Galleonen " + price;

        }
        


       

        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);

        // displayPotion();
        
        // }
    // function displayPotion {


    //     let formData: FormData = new FormData(document.forms[0]);
    //              potion.innerHTML += entry[0] + " " entry[1]
//let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");


        // for (let entry of formData) {
        //     let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");
        //     let price: number = Number(item.getAttribute("price"));

        //     potion.innerHTML += item.name + "  Galleonen " + price;
    }    
    }
