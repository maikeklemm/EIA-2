"use strict";
var L04_Potions;
(function (L04_Potions) {
    function gernerateContent(_data) {
        console.log(_data);
        let items = _data[name];
        if (items.length > 0) {
            let group = createIngredient(items, category);
            let fieldset = document.querySelector("fieldset#Ingred");
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_Potions.gernerateContent = gernerateContent;
    function createIngredient(_items, _category) {
        let group = document.createElement("div");
        group.id = "zutat";
        for (let item of item) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
            let breakIt = document.createElement("br");
            group.appendChild(breakIt);
        }
        return group;
    }
})(L04_Potions || (L04_Potions = {}));
//# sourceMappingURL=generateContent.js.map