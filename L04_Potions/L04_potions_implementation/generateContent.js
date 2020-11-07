"use strict";
var L04_Potions;
(function (L04_Potions) {
    function gernerateContent(_data) {
        console.log(_data);
        var items = _data[name];
        if (items.length > 0) {
            var group = createIngredient(items);
            var fieldset = document.querySelector("fieldset#Ingred");
            if (fieldset && group)
                fieldset.appendChild(group);
        }
        function createIngredient(ingredients) {
            //hier muss das html checkbox element noch generiert werden mit id=zutat
        }
    }
    L04_Potions.gernerateContent = gernerateContent;
})(L04_Potions || (L04_Potions = {}));
