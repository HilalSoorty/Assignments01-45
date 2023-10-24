// Assignment 35 according to github
var animals = ["Dog", "Cat", "Rabbit"];
console.log("Names of the animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    if (animal === "Dog") {
        console.log("A dog would make a great pet.");
    }
    else if (animal === "Cat") {
        console.log("A cat is an independent companion.");
    }
    else if (animal === "Rabbit") {
        console.log("A rabbit is a cute and low-maintenance pet.");
    }
}
//What these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
