let guestList = ["Mr.Bilal" , "Mr.Hilal", "Mr.Yousuf"];
let invitationMessage = "This invitation is sent from Soorty Corporation, to: ";
let furtherMessage = "this message is to inform that we would like your presence at our Dinner Party, tommorow at 8PM sharp, Regard ";

//Mr.Hilal won't be able to make it for the dinner, due to medical problem, now we need to replace the invitation.
guestList.splice(1,1, "Mr.Zakariya")



console.log(`${invitationMessage} ${guestList[0]}, ${furtherMessage}`);
console.log(`${invitationMessage} ${guestList[1]}, ${furtherMessage}`);
console.log(`${invitationMessage} ${guestList[2]}, ${furtherMessage}`);
