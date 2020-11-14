namespace L04_Potions {
  export  function gernerateContent(_data:Data){
        console.log(_data);
        let items: Ingredient[] = _data[name]

        if (items.length>0){
            let group: HTMLDivElement = createIngredient(items,category)

            
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#Ingred")
            if(fieldset && group)
                fieldset.appendChild(group)

        
        }
    }

        function createIngredient(_items: Ingredient[], _category: string): HTMLElement | null {
            let group: HTMLDivElement = document.createElement("div");
            group.id = "zutat";
            for (let item of item) {
                let checkbox: HTMLInputElement = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.setAttribute("price", item.price.toFixed(2));
                checkbox.value = item.name;
                checkbox.name = _category;
                checkbox.id = item.name;
    
                let label: HTMLLabelElement = document.createElement("label");
                label.textContent = item.name;
                label.htmlFor = item.name;
    
                group.appendChild(checkbox);
                group.appendChild(label);
    
                let breakIt: HTMLElement = document.createElement("br");
                group.appendChild(breakIt);
            }
            return group
        }
    }
