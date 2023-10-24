// function sandWiches(ingredients){
// if(ingredients >= [4]){
//     console.log("You've ordered A Beef SandWhich, which includes Beef, Cucumber, Tomatoes and Black Olives");
// }else if(ingredients >=[5]){
//     console.log("You've ordered A Chicken SandWhich, which includes Beef, Cucumber, Tomatoes and Black Olives, Green Olives");
// }
// }
// let sandWichesIngredients = ["Brown Bread", "Beef", "Cucumber", "Tomatoes", "Black Olives" ]
// let sandWichesIngredients1 = ["Brown Bread", "Chicken", "Cucumber", "Tomatoes", "Black Olives","Green Olives" ]
// sandWiches(sandWichesIngredients)
// sandWiches(sandWichesIngredients1)
function sandWiches(ingredients) {
    // Check the length of the ingredients array to determine the sandwich type
    if (ingredients.length >= 4) {
        console.log("You've ordered a Beef Sandwich, which includes Beef, Cucumber, Tomatoes, and Black Olives");
    }
    else if (ingredients.length >= 5) {
        console.log("You've ordered a Chicken Sandwich, which includes Chicken, Cucumber, Tomatoes, Black Olives, and Green Olives");
    }
    else {
        console.log("You haven't provided enough ingredients for a sandwich.");
    }
}
var sandWichesIngredients = ["Brown Bread", "Beef", "Cucumber", "Tomatoes", "Black Olives"];
var sandWichesIngredients1 = ["Brown Bread", "Chicken", "Cucumber", "Tomatoes", "Black Olives", "Green Olives"];
var sandWichesIngredients2 = ["Brown Bread", "Turkey", "Cucumber"];
sandWiches(sandWichesIngredients);
sandWiches(sandWichesIngredients1);
sandWiches(sandWichesIngredients2);
