var guestList = ["Mr. Bilal", "Mr. Hilal", "Mr. Yousuf"];
var invitationMessage = "This invitation is sent from Soorty Corporation, to:";
var furtherMessage = "this message is to inform that we would like your presence at our Dinner Party, tomorrow at 8PM sharp. Regards,";
// Mr. Hilal won't be able to make it for the dinner, due to a medical problem, now we need to replace the invitation.
guestList.splice(1, 1, "Mr. Zakariya");
console.log("".concat(invitationMessage, " ").concat(guestList[0], ", ").concat(furtherMessage));
console.log("".concat(invitationMessage, " ").concat(guestList[1], ", ").concat(furtherMessage));
console.log("".concat(invitationMessage, " ").concat(guestList[2], ", ").concat(furtherMessage));
// Inform that you found a bigger dinner table
console.log("Good news! We've found a bigger dinner table.");
// Adding a new guest to the beginning of the array
guestList.unshift("Mr. Ali");
// Adding a new guest to the middle of the array
guestList.splice(2, 0, "Mr. Ahmad");
// Using append() to add a new guest to the end of the list
guestList.push("Mr. Zain");
// Print a new set of invitation messages for each person in the list
console.log("".concat(invitationMessage, " ").concat(guestList[0], ", ").concat(furtherMessage));
console.log("".concat(invitationMessage, " ").concat(guestList[1], ", ").concat(furtherMessage));
console.log("".concat(invitationMessage, " ").concat(guestList[2], ", ").concat(furtherMessage));
console.log("".concat(invitationMessage, " ").concat(guestList[3], ", ").concat(furtherMessage));
console.log("".concat(invitationMessage, " ").concat(guestList[4], ", ").concat(furtherMessage));
console.log("".concat(invitationMessage, " ").concat(guestList[5], ", ").concat(furtherMessage));
