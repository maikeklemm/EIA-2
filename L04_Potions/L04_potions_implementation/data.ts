namespace L04_Potions {

    export interface Ingredient{
        name: string;
        price: number;
    }
 
    export interface Data {
        [category: string]: Ingredient[];
    }

    export let data: Data = {
        Ingredient: [
            {name: "Wolfsbane", price: 5},
            {name: "Unicorn hair", price: 20 },
            {name: "Mistletoe berries", price: 1 }
        ],
        
    };


    
}
