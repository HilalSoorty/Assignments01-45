// ex.24 according to github
// Tests for equality and inequality with strings
let string1: string = 'hello';
let string2: string = 'world';

console.log("Are strings equal? I predict False.");
console.log(string1 === string2);

console.log("Are strings not equal? I predict True.");
console.log(string1 !== string2);

//  Tests using the lower case function
console.log("Is 'hello' lowercase? I predict True.");
console.log(string1.toLowerCase() === 'hello');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1: number = 10;
let number2: number = 20;

console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2);

console.log("Is number1 greater than or equal to number2? I predict False.");
console.log(number1 >= number2);

//  Tests using "and" and "or" operators
let isTrue: boolean = true;
let isFalse: boolean = false;

console.log("Is isTrue and isFalse both true? I predict False.");
console.log(isTrue && isFalse);

console.log("Is isTrue or isFalse true? I predict True.");
console.log(isTrue || isFalse);

let array = [1, 2, 3, 4, 5];
//Test whether an item is in a array
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));

// • Test whether an item is not in a array
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6));
