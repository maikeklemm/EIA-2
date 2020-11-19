namespace L04_Potions {
    export interface Ingredient {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Ingredient[];
    }



    export function generateContent(_data: Data): void {
        console.log(_data);

        for (let category in _data) {
            console.log(category);
            let ingredient: Ingredient[] = _data[category];

            let group: HTMLElement | null = null;
            switch (category) {


                case "Zutaten":
                    group = createIngredient(ingredient, category);

                    // let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#Ingred");
                    // if (fieldset && group)
                    //     fieldset.insertBefore(group, document.getElementById("ok"));
                    break;

                default:
                    break;
            }



            // if (items.length>0){
            //     let group: HTMLDivElement = createIngredient(items,category)


            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#Ingred")
            if (fieldset && group)
                fieldset.appendChild(group)


        }
    }

    function createIngredient(_items: Ingredient[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        group.id = "zutat";
        for (let ingredient of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", ingredient.price.toFixed(2));
            checkbox.value = ingredient.name;
            checkbox.name = _category;
            checkbox.id = ingredient.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = ingredient.name;
            label.htmlFor = ingredient.name;

            group.appendChild(checkbox);
            group.appendChild(label);

            let Amount: HTMLInputElement = document.createElement("input");
            Amount.type = "number";
            Amount.value = "0";
            Amount.name = ingredient.name + "Amount";
            Amount.id = ingredient.name + "Amount";
            Amount.min = "0";
            Amount.setAttribute("amount", ingredient.price.toFixed(2));
            group.appendChild(Amount);

            let breakIt: HTMLElement = document.createElement("br");
            group.appendChild(breakIt);
        }
        return group;
    }
}