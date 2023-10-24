//Exercise number 17 according to GitHub.
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
//Important Notice!! for the shrinking in the guests list:
console.log("We're extremely sorry for the inconvenience, we've to shrink our guests lists to only 2guests, due to cancelation of new dinner table venue.");
//Removing guests and Sending them a message for the inconvenience.
console.log("".concat(guestList[5]), " We're extremly sorry, for not inviting you at dinner.");
guestList.pop();
console.log("".concat(guestList[4]), " We're extremly sorry, for not inviting you at dinner.");
guestList.pop();
console.log("".concat(guestList[3]), " We're extremly sorry, for not inviting you at dinner.");
guestList.pop();
console.log("".concat(guestList[2]), " We're extremly sorry, for not inviting you at dinner.");
guestList.pop();
//You are Still Invited
console.log("".concat(guestList[0]), "You're still invited to dinner, we'll be looking for you");
console.log("".concat(guestList[1]), "You're still invited to dinner, we'll be looking for you");
guestList.pop();
guestList.pop();
console.log(guestList);
