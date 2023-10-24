//Ex.21 according to github
// Define objects for different categories
const mountains = [
    {
      name: "Mount Everest",
      height: 8848,
      location: "Nepal/China"
    },
    {
      name: "K2",
      height: 8611,
      location: "Pakistan/China"
    },
    {
      name: "Kangchenjunga",
      height: 8586,
      location: "Nepal/India"
    }
  ];
  
  const rivers = [
    {
      name: "Nile",
      length: 6650,
      countries: ["Egypt", "Sudan", "South Sudan"]
    },
    {
      name: "Amazon",
      length: 6992,
      countries: ["Brazil", "Peru", "Colombia"]
    },
    {
      name: "Yangtze",
      length: 6300,
      countries: ["China"]
    }
  ];
  
  const countries = [
    {
      name: "United States",
      population: 331002651,
      capital: "Washington, D.C."
    },
    {
      name: "India",
      population: 1380004385,
      capital: "New Delhi"
    },
    {
      name: "Russia",
      population: 145934462,
      capital: "Moscow"
    }
  ];
  
  const cities = [
    {
      name: "Tokyo",
      population: 37393129,
      country: "Japan"
    },
    {
      name: "New York",
      population: 8175133,
      country: "United States"
    },
    {
      name: "Mumbai",
      population: 20069457,
      country: "India"
    }
  ];
  
  const languages = [
    {
      name: "English",
      speakers: "1.3 billion",
      countriesSpoken: ["United States", "United Kingdom", "India"]
    },
    {
      name: "Spanish",
      speakers: "460 million",
      countriesSpoken: ["Spain", "Mexico", "Argentina"]
    },
    {
      name: "Mandarin",
      speakers: "918 million",
      countriesSpoken: ["China", "Taiwan", "Singapore"]
    }
  ];
  
  // Print objects
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
  