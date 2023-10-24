//Assignment 34 according to github.
let favPizza = ["Pepperoni Pizza", "BBQ Ranch", "Wicked Witch"];

for (const pizza of favPizza) {
    let comment: string = "";
    
    if (pizza === "Pepperoni Pizza") {
        comment = "I really like to eat, ";
    } else if (pizza === "BBQ Ranch") {
        comment = "My mouth gets watery after looking at this, ";
    } else if (pizza === "Wicked Witch") {
        comment = "This pizza flavor name sounds weird, ";
    }
    
    console.log(`${comment}${pizza}`);
}
