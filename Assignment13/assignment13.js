var guestList = ["Mr.Bilal", "Mr.Hilal", "Mr.Yousuf"];
var invitationMessage = "This invitation is sent from Soorty Corporation, to: ";
var furtherMessage = "this message is to inform that we would like your presence at our Dinner Party, tommorow at 8PM sharp, Regard ";
//Mr.Hilal won't be able to make it for the dinner, due to medical problem, now we need to replace the invitation.
guestList.splice(1, 1, "Mr.Zakariya");
console.log("".concat(invitationMessage, " ").concat(guestList[0], ", ").concat(furtherMessage));
console.log("".concat(invitationMessage, " ").concat(guestList[1], ", ").concat(furtherMessage));
console.log("".concat(invitationMessage, " ").concat(guestList[2], ", ").concat(furtherMessage));
