// assignment 31 according to github
var users = [25, 5, 35, 2, 68, 15];
// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var age = users_1[_i];
        if (age < 2) {
            console.log("The person is a baby.");
        }
        else if (age < 4) {
            console.log("The person is a toddler.");
        }
        else if (age < 13) {
            console.log("The person is a kid.");
        }
        else if (age < 20) {
            console.log("The person is a teenager.");
        }
        else if (age < 65) {
            console.log("The person is an adult.");
        }
        else {
            console.log("The person is an elder.");
        }
    }
}
