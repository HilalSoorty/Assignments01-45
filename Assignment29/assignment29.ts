// assignment 31 according to github

const users: number[] = [25, 5, 35, 2, 68, 15];

// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    for (const age of users) {
      
        if (age < 0) {
            console.log("The person is a baby.");
        } else if (age < 4) {
            console.log("The person is a toddler.");
        } else if (age < 13) {
            console.log("The person is a kid.");
        } else if (age < 20) {
            console.log("The person is a teenager.");
        } else if (age < 65) {
            console.log("The person is an adult.");
        } else {
            console.log("The person is an elder.");
        }
    }
}

