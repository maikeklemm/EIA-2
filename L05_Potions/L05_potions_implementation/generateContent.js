"use strict";
var L04_Potions;
(function (L04_Potions) {
    function gernerateContent(_data) {
        console.log(_data);
        for (var category in _data) {
            console.log(category);
            var ingredient = _data[category];
            var group = null;
            switch (category) {
                case "Zutaten":
                    group = createIngredient(ingredient, category);
                    break;
                default:
                    break;
            }
            // let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            // if (fieldset && group)
            //     fieldset.appendChild(group);
            // if (items.length>0){
            //     let group: HTMLDivElement = createIngredient(items,category)
            var fieldset = document.querySelector("fieldset#Ingred");
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_Potions.gernerateContent = gernerateContent;
    function createIngredient(_items, _category) {
        var group = document.createElement("div");
        group.id = "zutat";
        for (var _i = 0, _items_1 = _items; _i < _items_1.length; _i++) {
            var ingredient = _items_1[_i];
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", ingredient.price.toFixed(2));
            checkbox.value = ingredient.name;
            checkbox.name = _category;
            checkbox.id = ingredient.name;
            var label = document.createElement("label");
            label.textContent = ingredient.name;
            label.htmlFor = ingredient.name;
            group.appendChild(checkbox);
            group.appendChild(label);
            var Amount = document.createElement("input");
            Amount.type = "number";
            Amount.value = "1";
            Amount.name = ingredient.name + "Menge";
            Amount.id = ingredient.name + "Menge";
            Amount.min = "1";
            group.appendChild(Amount);
            var breakIt = document.createElement("br");
            group.appendChild(breakIt);
        }
        return group;
    }
})(L04_Potions || (L04_Potions = {}));
