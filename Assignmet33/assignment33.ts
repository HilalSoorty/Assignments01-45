// Assignment 35 according to github
const animals: string[] = ["Dog", "Cat", "Rabbit"];


console.log("Names of the animals:");
for (const animal of animals) {
    console.log(animal);
}


console.log("\nStatements about each animal:");
for (const animal of animals) {
    if (animal === "Dog") {
        console.log("A dog would make a great pet.");
    } else if (animal === "Cat") {
        console.log("A cat is an independent companion.");
    } else if (animal === "Rabbit") {
        console.log("A rabbit is a cute and low-maintenance pet.");
    }
}

//What these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
