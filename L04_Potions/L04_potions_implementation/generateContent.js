"use strict";
var L04_Potions;
(function (L04_Potions) {
    function gernerateContent(_data) {
        console.log(_data);
        var items = _data[name];
        if (items.length > 0) {
            var group = createIngredient(items, category);
            var fieldset = document.querySelector("fieldset#Ingred");
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_Potions.gernerateContent = gernerateContent;
    function createIngredient(_items, _category) {
        var group = document.createElement("div");
        group.id = "zutat";
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var item = item_1[_i];
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            var label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
            var breakIt = document.createElement("br");
            group.appendChild(breakIt);
        }
        return group;
    }
})(L04_Potions || (L04_Potions = {}));
