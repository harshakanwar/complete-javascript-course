/*
let js = "amazing";

// console.log(98 - 23 - 12);
// console.log("Apple");

// let firstName = "Matilda Kanwar";
// console.log("Names is ", firstName);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log("Type Of javaScriptIsFun", typeof javaScriptIsFun);
// console.log("Type Of", typeof true);
// console.log("Type Of", typeof 2333);
// console.log("Type Of", typeof "firstName");

javaScriptIsFun = "YES";
console.log(javaScriptIsFun);
console.log("Type Of javaScriptIsFun", typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1998;
console.log(typeof year);

// This is a bug in javascript, null is not of Object Type, This is never removed due to legacy reasons.

console.log(typeof null); // Result is Object


// BEST PLACE TO LEARN CONST VAR LET DIFFERENCE
// https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/

// => LET CONST VAR

let age = 25;
age = 26;
// Totally allowed to reassign

const birthDate = 1998;
// birthDate = 2000; Error here Const variables cannot be reassigned

// const job; Const Variables must be initialized

var job = "Programmer";
job = "Coder";


// MATHEMATICAL OPERATORS
const now = 2024;
const ageHarsha = now - 1998;
const ageGaje = now - 1993;
const ageSarah = now - 2020;
console.log(ageGaje * 2, ageHarsha / 2, 2 ** 3);

const firstName = "Harsha";
const lastName = "Kanwar";
console.log(firstName + " " + lastName);

// ASSIGNMENT OPERATORS
let x = 10 + 5; // 15
x -= 10; // x = x + 10 => x = 25
x *= 4;
x++;
x--;
x--;
console.log(x);

// COMPARISON OPERATORS
console.log(ageGaje > ageHarsha); // >, <, <=, >=
console.log(ageGaje >= 18);

const isFullAge = ageSarah >= 18;

//console.log(now - 1993 > now - 1998);

let p, y;
p = y = 25 - 10 - 5;

//console.log(p, y);
const averageAge = (ageGaje + ageHarsha) / 2;
console.log(ageGaje, ageHarsha, averageAge);


const firstName = "Harsha";
const job = "Programmer";
const birthYear = 1998;
const year = 2024;

const result =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(result);
const resultNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(resultNew);

console.log(` Just a regular string .......`);

// Multiline String

console.log("String with \nmultiple \nlines");
console.log(`String with
multiple
lines`);


const age = 14;

if (age >= 18) {
  console.log("Sarah can start driving license 😁");
} else {
  const yearsLeft = 18 - age;

  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

birthYear = 1998;
let century = 20;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

////////////////////////////////////////////////////////////////////

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
  //break;
  case "Tuesday":
    console.log("Prepare Theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write Code Examples");
    break;
  case "Friday":
    console.log("Record Videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend :D !");
  default:
    console.log("Not a valid day");
}
*/

////////////////////////////////////////////////////////////////////

const age = 18;
const drink = age >= 18 ? "Wine 🍷!" : "Water 💧";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "Wine 🍷!" : "Water 💧"}`);

const bill = 275;

/* Write your code below. Good luck! 🙂 */

let tip = bill;
console.log(bill * 0.15);
tip = tip <= 300 && tip >= 50 ? tip * 0.15 : tip * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
