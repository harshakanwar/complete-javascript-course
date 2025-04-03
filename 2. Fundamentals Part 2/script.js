"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//const interface = "Audio"; //Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:9:7)
//const private = "private"; //Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:9:7)


////////////////////////////////////////////////////////////////////

//Functions

function logger() {
  console.log("My name is Harsha Kanwar");
}

//Calling Running or Invoking the function

logger();
logger(23); // Wont affect the result
logger();

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor("my", "his");
console.log(appleOrangeJuice);
const num = Number("25");


////////////////////////////////////////////////////////////////////

// Function Declaration
function calculateAge(birthYear) {
  return 2024 - birthYear;
}

const age1 = calculateAge(1993);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1998);
console.log(age1, age2);


////////////////////////////////////////////////////////////////////
// Arrow Functions

const calcAge3 = (birthYeah) => 2024 - birthYeah;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1998, "Harsha"));
console.log(yearsUntilRetirement(1993, "Gaje"));



////////////////////////////////////////////////////////////////////
// Functions calling other functions

function cutFruitPieces(fruit) {
  return 4 * fruit;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


////////////////////////////////////////////////////////////////////
// Reviewing Functions

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 60 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  //return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1994, "Harsha"));
console.log(yearsUntilRetirement(1947, "Bhanwar Singh Chouhan"));


////////////////////////////////////////////////////////////////////
// Arrays

const family = ["Harsha", "Gaje", "Gopu"];
const years = new Array(1998, 1993, 2020);
console.log(family[0]);
console.log(years[0]);

console.log(family[1]);
console.log(family.length);
console.log(family[family.length - 1]);

family[2] = "Kaalu";
console.log(family);
// family = ["Harsha", "Gaje", "Gopu"]; Illegal not allowed

const harsha = ["Harsha", "Kanwar", 2024 - 1998, "Developer", family];
console.log(harsha);

function calcAge(birthYear) {
  return 2024 - birthYear;
}

const years2 = [calcAge(1998), calcAge(1993), calcAge(2020)];
console.log(years2);


// Array Methods

const family = ["Harsha", "Gaje", "Gopu"];

const newLength = family.push("Pallu");
console.log(newLength);
console.log(family);

family.unshift("Gopu");
console.log(family);

const popped = family.pop();
console.log(popped);
console.log(family);

family.shift();
console.log(family);

console.log(family.indexOf("Harsha"));
console.log(family.indexOf("Gopu"));

family.push(23);
console.log(family.includes("Harsha"));
console.log(family.includes("Gopu"));

console.log(family.includes("23"));
//  Returns false as 23 number is added and it compares strictly so it looks for 23 string

console.log(family.includes(23)); // TRUE

if (family.includes("Gaje")) {
  console.log("You have a family member named Gaje.");
}


// Intro to Objects

const harshaArray = [
  "Harsha",
  "Kanwar",
  2024 - 1998,
  "Developer",
  ["Pallu", "Gopu"],
];

//In objects we have key value pairs

const harsha = {
  firstName: "Harsha",
  lastName: "Kanwar",
  age: 2024 - 1998,
  job: "Developer",
  family: ["Pallu", "Gopu"],
};

console.log(harsha.lastName);
console.log(harsha["lastName"]);

const nameKey = "Name";

console.log(harsha["first" + nameKey]);
console.log(harsha["last" + nameKey]);

//console.log(harsha."last" + nameKey) Invalid Syntax

const interestedIn = prompt(
  "What do you want to know about Harsha ? Choose between firstName, lastName, age, job and family"
);
console.log(harsha.interestedIn); // Undefined because there is no property named interestedIn
console.log(harsha[interestedIn]);

if (harsha[interestedIn]) {
  console.log(harsha[interestedIn]);
} else {
  console.log("Wrong Request");
}

harsha.location = "India";
harsha["instagram"] = "@harshakanwar";

console.log(harsha);

// Challenge
// Harsha has 3 family members and her best family member is Gopu.

console.log(
  `${harsha.firstName} has ${harsha.family.length} family members and her best family member is ${harsha.family[1]}`
);


///////////////////////////////////////////////////////////
// Object Methods

const harsha = {
  firstName: "Harsha",
  lastName: "Kanwar",
  birthYear: 1998,
  job: "Developer",
  family: ["Pallu", "Gopu"],
  hasDriversLicense: false,
  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // }
  // We used this keyword to use the current object birthYear

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    console.log(this);
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driving license`;
  },
};

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };
// The property calcAge is similar to the function Expression type declaration

//console.log(harsha.calcAge());

console.log("Harsha ki " + harsha.age); // Comes Undefined if you do not call the method calAge()
//which initialises the age variabe
console.log(harsha.calcAge());

// Challenge
// "Harsha is a 26-year old Developer, and she has a driving license"

console.log(harsha.getSummary());

///////////////////////////////////////////////////////////
// Iteration the for loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);
// }

const types = [];

const harsha = [
  "Harsha",
  "Kanwar",
  2024 - 1998,
  "Developer",
  ["Pallu", "Gopu"],
  true,
];

for (let i = 0; i < harsha.length; i++) {
  console.log(`${harsha[i]}`, typeof harsha[i]);
  // Filling types
  //types[i] = typeof harsha[i];
  types.push(typeof harsha[i]);
}

console.log(types);

const years = ["1969", "1972", "1994", "1998", "2000"];
const years2 = ["1966", "1970", "1988", "1989", "1993", "1998", "2016"];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

console.log(ages);

console.log("------ONLY STRINGS-------");

for (let i = 0; i < harsha.length; i++) {
  if (typeof harsha[i] !== "string") continue;
  // Will log only the string elements

  console.log(`${harsha[i]}`, typeof harsha[i]);
}

console.log("------BREAK IF NUMBER FOUND-------");

for (let i = 0; i < harsha.length; i++) {
  if (typeof harsha[i] == "number") break;

  console.log(`${harsha[i]}`, typeof harsha[i]);
}


///////////////////////////////////////////////////////////
//48. Looping Backwards and Loops in Loops

const harsha = [
  "Harsha",
  "Kanwar",
  2024 - 1998,
  "Developer",
  ["Pallu", "Gopu"],
  true,
];

// for (let i = harsha.length - 1; i >= 0; i--) {
//   console.log(i, harsha[i], typeof harsha[i]);
// }

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercose ${exercise} : Lifting Weight repetition ${rep}`);
  }
}


*/
///////////////////////////////////////////////////////////
//49. While Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting Weight repetition ${rep}`);
// }

let x = 1;

while (x <= 10) {
  //console.log(`WHILE : Lifting Weight repetition ${x}`);
  x++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) console.log(`Loop is about to end..............`);
}

function calAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + i;
  }
  return sum;
}
