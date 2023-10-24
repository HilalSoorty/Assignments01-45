//Ex.20 according to Github
// Define arrays for different categories
const mountains: string[] = [
  "Mount Everest",
  "K2",
  "Kangchenjunga",
  "Matterhorn",
  "Aconcagua",
  "Denali",
  "Mount Fuji"
];

const rivers: string[] = [
  "Nile",
  "Amazon",
  "Yangtze",
  "Mississippi",
  "Danube",
  "Ganges",
  "Volga"
];

const countries: string[] = [
  "United States",
  "Canada",
  "China",
  "India",
  "Brazil",
  "Russia",
  "Australia"
];

const cities: string[] = [
  "New York",
  "Tokyo",
  "Paris",
  "London",
  "Mumbai",
  "Sydney",
  "Rio de Janeiro"
];

const languages: string[] = [
  "English",
  "Spanish",
  "Mandarin",
  "Hindi",
  "French",
  "Russian",
  "Arabic"
];

// Print lists
console.log("List of mountains:");
mountains.forEach(mountain => {
  console.log(mountain);
});

console.log("\nList of rivers:");
rivers.forEach(river => {
  console.log(river);
});

console.log("\nList of countries:");
countries.forEach(country => {
  console.log(country);
});

console.log("\nList of cities:");
cities.forEach(city => {
  console.log(city);
});

console.log("\nList of languages:");
languages.forEach(language => {
  console.log(language);
});
