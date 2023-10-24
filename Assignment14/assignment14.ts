//Exercise number 16 according to GitHub.
let guestList = ["Mr. Bilal", "Mr. Hilal", "Mr. Yousuf"];
let invitationMessage = "This invitation is sent from Soorty Corporation, to:";
let furtherMessage = "this message is to inform that we would like your presence at our Dinner Party, tomorrow at 8PM sharp. Regards,";

// Mr. Hilal won't be able to make it for the dinner, due to a medical problem, now we need to replace the invitation.
guestList.splice(1, 1, "Mr. Zakariya");

console.log(`${invitationMessage} ${guestList[0]}, ${furtherMessage}`);
console.log(`${invitationMessage} ${guestList[1]}, ${furtherMessage}`);
console.log(`${invitationMessage} ${guestList[2]}, ${furtherMessage}`);

// Inform that you found a bigger dinner table
console.log("Good news! We've found a bigger dinner table.");

// Adding a new guest to the beginning of the array
guestList.unshift("Mr. Ali");

// Adding a new guest to the middle of the array
guestList.splice(2, 0, "Mr. Ahmad");

// Using append() to add a new guest to the end of the list
guestList.push("Mr. Zain");

// Print a new set of invitation messages for each person in the list
console.log(`${invitationMessage} ${guestList[0]}, ${furtherMessage}`);
console.log(`${invitationMessage} ${guestList[1]}, ${furtherMessage}`);
console.log(`${invitationMessage} ${guestList[2]}, ${furtherMessage}`);
console.log(`${invitationMessage} ${guestList[3]}, ${furtherMessage}`);
console.log(`${invitationMessage} ${guestList[4]}, ${furtherMessage}`);
console.log(`${invitationMessage} ${guestList[5]}, ${furtherMessage}`);
