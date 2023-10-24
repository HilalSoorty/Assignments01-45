// Assignment 37 according to github
// Define a Shirt class to represent a shirt
var Shirt = /** @class */ (function () {
    function Shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "I love TypeScript"; }
        this.size = size;
        this.message = message;
    }
    Shirt.prototype.printShirtInfo = function () {
        console.log("Size: ".concat(this.size, ", Message: ").concat(this.message));
    };
    return Shirt;
}());
// Function to create a shirt with custom size and message
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    var shirt = new Shirt(size, message);
    return shirt;
}
// Create a large shirt with the default message
var defaultLargeShirt = make_shirt();
defaultLargeShirt.printShirtInfo();
// Create a medium shirt with the default message
var mediumShirt = make_shirt("medium");
mediumShirt.printShirtInfo();
// Create a custom-sized shirt with a different message
var customShirt = make_shirt("small", "TypeScript is awesome!");
customShirt.printShirtInfo();
