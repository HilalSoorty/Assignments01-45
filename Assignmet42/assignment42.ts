
function sandWiches(ingredients) {
    if (ingredients.length >= 4) {
        console.log("You've ordered a Beef Sandwich, which includes Beef, Cucumber, Tomatoes, and Black Olives");
    } else if (ingredients.length >= 5) {
        console.log("You've ordered a Chicken Sandwich, which includes Chicken, Cucumber, Tomatoes, Black Olives, and Green Olives");
    } else {
        console.log("You haven't provided enough ingredients for a sandwich.");
    }
}

let sandWichesIngredients = ["Brown Bread", "Beef", "Cucumber", "Tomatoes", "Black Olives"];
let sandWichesIngredients1 = ["Brown Bread", "Chicken", "Cucumber", "Tomatoes", "Black Olives", "Green Olives"];
let sandWichesIngredients2 = ["Brown Bread", "Turkey", "Cucumber"];

sandWiches(sandWichesIngredients);
sandWiches(sandWichesIngredients1);
sandWiches(sandWichesIngredients2);
