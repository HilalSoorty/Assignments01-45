//Assignment 34 according to github.
var favPizza = ["Pepperoni Pizza", "BBQ Ranch", "Wicked Witch"];
for (var _i = 0, favPizza_1 = favPizza; _i < favPizza_1.length; _i++) {
    var pizza = favPizza_1[_i];
    var comment = "";
    if (pizza === "Pepperoni Pizza") {
        comment = "I really like to eat, ";
    }
    else if (pizza === "BBQ Ranch") {
        comment = "My mouth gets watery after looking at this, ";
    }
    else if (pizza === "Wicked Witch") {
        comment = "This pizza flavor name sounds weird, ";
    }
    console.log("".concat(comment).concat(pizza));
}
