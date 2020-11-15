namespace L04_Potions {
  window.addEventListener("load", handleLoad);
  let form: HTMLFormElement;

  async function handleLoad(_event: Event): Promise<void> {
    console.log("Start");

    // getData();
    let response: Response = await fetch("data.json");
    let content : string = await response.text;
    let data: Data = JSON.parse(content);
     gernerateContent(data);



    form = <HTMLFormElement>document.querySelector("form");

    let ok: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#ok");
    ok.addEventListener("click", displayPotion);

    let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#submit");
    submit.addEventListener("click", sendPotion);

    let reset: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#reset");
    reset.addEventListener("click", resetRecipe);

  }
  async function getData(): Promise<void> {
    let response: Response = await fetch("Data.json");
    let offer: string = await response.text();
    let data: Data = JSON.parse(offer);
    generateContent(data);
  }
  async function sendPotion(_event: Event): Promise<void> {
    console.log("Send potion");
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    await fetch("index.html?" + query.toString());
    alert("Potion sent!");
  }
  function resetRecipe() {
    let potion: HTMLDivElement = <HTMLDivElement>document.querySelector("div#potion");
    potion.innerHTML = "";
  }
  function displayPotion(): void {
    console.log("displayPotion");
    // let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#submit");
    let potion: HTMLDivElement = <HTMLDivElement>document.querySelector("div#potion");
    potion.innerHTML = "";

    let total: number = 0;
    let price: number = 0;
    let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");

    let formData: FormData = new FormData(document.forms[0]);
    // let formData: FormData = new FormData(form);

    for (let entry of formData) {
      console.log(entry);
      let selector: string = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
      let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
      console.log(item);
      // let itemPrice: number = Number(item.getAttribute("price"));
      // console.log(itemPrice);
      switch (entry[0]) {
        case "name":
          console.log(entry[0], ":", entry[1]);
          potion.innerHTML += "Name of Potion: " + entry[1] + "<br>";
          break;

        case "Description":
          console.log(entry[0], ":", entry[1]);
          potion.innerHTML += "Description: " + entry[1] + "<br>";
          break;

        case "effect":
          console.log(entry[0], ":", entry[1]);
          potion.innerHTML += "Effect: " + entry[1] + "<br>";
          break;

        case "time":
          console.log(entry[0], ":", entry[1]);
          potion.innerHTML += "Duration of effect: " + entry[1] + "h" + "<br>" + "<br>";
          break;

        case "Zutaten":
          let itemPrice: number = Number(item.getAttribute("price"));
          potion.innerHTML += "Ingredients: " + entry[1] + "(" + itemPrice + " Galleone/n)" + "<br>";

          let Amount: number = Number(item.getAttribute(""))
          let total: number = itemPrice;
          console.log(total)

          break;

        case "Temperatur":
          console.log(entry[0], ":", entry[1]);
          potion.innerHTML += "<br>" + "Required temperature: " + entry[1] + "°C" + "<br>";
          break;

        case "stir":
          let stir: HTMLInputElement = <HTMLInputElement>document.querySelector("input#stir");
          console.log(stir.name, ":", stir.value);
          if (stir.value == "1") {
            potion.innerHTML += "Stir: occasionally " + "<br>";
          }
          if (stir.value == "2") {
            potion.innerHTML += "Stir: continously " + "<br>";
          }
          break;
        case "Result":
          console.log(entry[0], ":", entry[1]);
          potion.innerHTML += "Result: " + entry[1] + "<br>";
          break;

        default:
          potion.innerHTML += entry[0] + entry[1] + "<br>";
          break;
      }

    }

  }




}




