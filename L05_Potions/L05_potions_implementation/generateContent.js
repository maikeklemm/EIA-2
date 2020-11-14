"use strict";
var L04_Potions;
(function (L04_Potions) {
    function generateContent(_data) {
        console.log(_data);
        for (let category in _data) {
            console.log(category);
            let ingredient = _data[category];
            let group = null;
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
            let fieldset = document.querySelector("fieldset#Ingred");
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_Potions.generateContent = generateContent;
    function createIngredient(_items, _category) {
        let group = document.createElement("div");
        group.id = "zutat";
        for (let ingredient of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", ingredient.price.toFixed(2));
            checkbox.value = ingredient.name;
            checkbox.name = _category;
            checkbox.id = ingredient.name;
            let label = document.createElement("label");
            label.textContent = ingredient.name;
            label.htmlFor = ingredient.name;
            group.appendChild(checkbox);
            group.appendChild(label);
            let Amount = document.createElement("input");
            Amount.type = "number";
            Amount.value = "0";
            Amount.name = ingredient.name + "Amount";
            Amount.id = ingredient.name + "Amount";
            Amount.min = "0";
            Amount.setAttribute("amount", ingredient.price.toFixed(2));
            group.appendChild(Amount);
            let breakIt = document.createElement("br");
            group.appendChild(breakIt);
        }
        return group;
    }
})(L04_Potions || (L04_Potions = {}));
//# sourceMappingURL=generateContent.js.map