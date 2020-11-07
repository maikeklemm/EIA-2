namespace L04_Potions {
  export  function gernerateContent(_data:Data){
        console.log(_data);
        let items: Ingredient[] = _data[name]

        if (items.length>0){
            let group: HTMLDivElement = createIngredient(items)
            
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#Ingred")
            if(fieldset && group)
                fieldset.appendChild(group)
        }

        function createIngredient(ingredients:Ingredient[]):HTMLElement {
            //hier muss das html checkbox element noch generiert werden mit id=zutat
          
        }
    }
}