var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Assignment 18 according to GitHub
// Define the array of places
var places = [
    "Tokyo",
    "Paris",
    "Sydney",
    "New York",
    "Rome"
];
// Print the array in its original order
console.log("Original Order:", places);
// Print the array in alphabetical order without modifying it
console.log("Alphabetical Order:", [places].sort());
// Print the array to show it's still in its original order
console.log("Original Order:", places);
// Print the array in reverse alphabetical order without modifying it
console.log("Reverse Alphabetical Order:", __spreadArray([], places, true).sort().reverse());
// Print the array to show it's still in its original order
console.log("Original Order:", places);
// Reverse the order of the list
places.reverse();
console.log("Reversed Order:", places);
// Reverse the order of the list again
places.reverse();
console.log("Original Order:", places);
// Sort the array in alphabetical order
places.sort();
console.log("Alphabetically Sorted:", places);
// Sort the array in reverse alphabetical order
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetically Sorted:", places);
