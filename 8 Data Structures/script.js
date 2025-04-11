'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
 
  const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order : function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // returns an array with the selected items
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`); // logs the order details
    },

  // orderDelivery: function(obj){
  //   console.log(obj); // logs the object passed as argument
  // },
  openingHours,

  // as you can see orderPasta : function(ing1,ing2,ing3) is a method of the restaurant object
  // and the new Syntax has simplified the code
  orderPasta(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`); // logs the ingredients of the pasta
  },

  orderPizza : function(mainIngredient,...otherIngredients){
    console.log(mainIngredient); 
    console.log(otherIngredients); 
  }
};


/*
// VIDEO 108 : DESTRUCTURING OBJECTS AND ARRAYS

const arr = [1, 2, 3];

//const [a, b, c] = arr; // destructuring assignment
//console.log(a, b, c); // 1 2 3

//const [first, second] = restaurant.categories; 
//console.log(first, second); // Italian Pizzeria

let [main, , secondary] = restaurant.categories; 
//console.log(main, secondary); // Italian Vegetarian

// Easy way to swap variables
/*
const temp = main;
main = secondary;
secondary = temp; // swapping variables
console.log(main, secondary); // Vegetarian Italian


// Swapping variables using destructuring assignment

[main, secondary] = [secondary, main]; // destructuring assignment for swapping
//console.log(main, secondary); // Italian Vegetarian


//console.log(restaurant.order(2, 0)); // calling the order method with arguments 2 and 0

const [starter, mainCourse] = restaurant.order(2, 0); // destructuring assignment for the order method
//console.log(starter, mainCourse); // Garlic Bread Pizza


// Nested destructuring
const nested = [2,4,[5,6]];
const[i,,j] =  nested; // destructuring assignment for nested array

//console.log(i, j); // 2 [5, 6]


const [x,, [y,z]] = nested; // destructuring assignment for nested array
//console.log(x, y, z); // 2 5 6

const [p = 1, q = 1, r = 1]= [8,9] ;// destructuring assignment with default values
//console.log(p, q, r); // 8 9 1
// Default values in destructuring assignment

//if it was const [p,q,r] = [8,9] ; it would be 8 9 undefined
// because r is not defined in the array


const {name,openingHours, categories} = restaurant; // destructuring assignment for restaurant object
//console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}}

//const {name : name, openingHours : hours, categories : tags} = restaurant;
//console.log(name, hours, tags); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}}

const {menu = [], starterMenu: starters = []} = restaurant; // destructuring assignment with default values
//console.log(menu, starters); // [] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//// Mutating variables

let a = 7;
let b = 9; // declaring variables a and b
const obj = {a: 23, b: 7, c: 14}; // declaring an object with properties a, b and c
//console.log(a, b); // 7 9

({a,b} = obj); // destructuring assignment for object
//console.log(a, b); // 23 7

const { fri : {open : o, close : c}} = openingHours; // destructuring assignment for object
//console.log(o, c); // 11 23

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // calling the orderDelivery method with an object as argument

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
}); 



/// VIDEO 109 : THE SPREAD OPERATOR
const arr1 = [7,8,9]; // declaring an array
const badNewArr = [1,2, arr1[0], arr1[1], arr1[2]]; // creating a new array with elements from arr1
//console.log(badNewArr); // [1, 2, 7, 8, 9]
// This approach is not flexible and not recommended for larger arrays

const newArr = [1,2,...arr1]; // using spread operator to create a new array with elements from arr1
//console.log(newArr); // [1, 2, 7, 8, 9]

const newArr2 = [1,2, arr1]
//console.log(newArr2); // [1, 2, [7, 8, 9]]
// This approach creates a nested array instead of flattening it

//So that is why we use the spread operator to flatten the array

//console.log(...newArr1);  // 1 2 7 8 9
// This will log the elements of the array instead of the array itself
// So you see no square brackets
// This is useful when you want to pass the elements of an array as separate arguments to a function

const newMenu = [...restaurant.mainMenu, "Gnocci"]; // creating a new array with elements from restaurantMenu and adding a new element
//console.log(newMenu); // [ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]

const mainMenuCopy = [...restaurant.mainMenu]; // creating a copy of the main menu array
//console.log(mainMenuCopy); // [ 'Pizza', 'Pasta', 'Risotto' ]

const menu1 = [...restaurant.starterMenu , ...restaurant.mainMenu]; // creating a copy of the main menu array
console.log(menu1); // [ 'Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]


// Iterables: arrays, strings, maps, sets. NOT objects
// Strings are also iterable, so we can use the spread operator on strings

const str = "Harsha";
const letters = [...str, ' ', 'S'];

console.log(letters); // [ 'H', 'a', 'r', 's', 'h', 'a' ]
// This creates an array of characters from the string str

const ingredients = [
  // prompt("lets's make pasta ! Ingredient 1 ?"),
  // prompt("Ingredient 2 ?"),
  // prompt("Ingredient 3 ?")
];
console.log(ingredients); // logs the ingredients entered by the user

restaurant.orderPasta(...ingredients); // calling the orderPasta method with the ingredients array using spread operator


// Since 2018 ES6 works on objects too
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: "Giuseppe"};
 // creating a new object with properties from restaurant and adding a new property

 console.log(newRestaurant);

 const restaurantCopy = {...restaurant}; // creating a copy of the restaurant object
 restaurantCopy.name = "Ristorante Roma"; // changing the name property of the copied object
 console.log(restaurantCopy); // {name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), mainMenu: Array(3), …}

 

// VIDEO 110 : REST PATTERN AND PARAMETERS

/// DESTRUCTURING ASSIGNMENT WITH REST OPERATOR
// SPRED because on the right side of the assignment operator
const arr = [1,2, ...[3,4]]; // using spread operator to create a new array
//console.log(arr); // [1, 2, 3, 4]

// REST Pattern because on the left side of the assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5]; // destructuring assignment with rest operator
//console.log(a, b, others); // 1 2 [3, 4, 5]


const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]; // destructuring assignment with rest operator
//console.log(pizza, risotto, otherFood); // Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// the Rest operator element otehrFood must be the last element in the destructuring assignment
// otherwise it will throw an error
// because it will not know how many elements to assign to otherFood
// Also there can be only one rest operator in the destructuring assignment
// otherwise it will throw an error

const {sat, ...weekdays} = restaurant.openingHours; // destructuring assignment with rest operator
console.log(sat, weekdays); // {thu: {…}, fri: {…}}


//// FUNCTIONS WITH REST PARAMETERS
const add = function(...numbers) { // defining a function with rest parameters

  let sum = 0;
  for(let i = 0; i< numbers.length ; i ++){
      sum += numbers[i];
  }
 console.log(sum); 
}


add(2,3); // 2 arguments
add(5,6,7,8); // 4 arguments
add(5,6,7,8,9,10); //  6 arguments
add(5,6,7,8,9,10,11); // 7 arguments


const x = [1,2,3,4,5,6,7,8,9,10]; 
add(...x);

restaurant.orderPizza("Mushrooms", "Spinach", "Olives"); 


// VIDEO 111 : SHORT CIRCUITING (|| AND &&)

console.log('--- OR ---'); // logs the string 'OR'
// Operators || and && can return any data type, not just boolean
// They can use any data type as operands
console.log( 3 || 'Harsha'); 
console.log('' || 'Harsha'); // empty string is falsy
console.log(true || 0); // true is truthy
console.log(" Here both are false " + (undefined || null)); // undefined is falsy
console.log(null || 0); // null is falsy
console.log(undefined || "" || 0 || "Hello"|| 23 || null); // returns the first truthy value it finds

// 3 is a number and 'Harsha' is a string
// The || operator returns the first truthy value it finds
// So in this case it returns 3 because it is truthy, does not evaluate the second operand
// And when first operand is falsy, it returns the second operand
// without even evaluating the second operand
// this is called short circuiting



const guests1 = restaurant.numGuests ? restaurant.numGuests : 10 ;
console.log(guests1); // 10


const guests2 = restaurant.numGuests || 10; // using || operator to set default value
console.log(guests2); // 10

console.log('--- AND ---');

console.log(0 && 'Harsha'); // 0 is falsy, so it returns 0
console.log(7 && 'Harsha'); // 7 is truthy, so it returns 'Harsha'

// returns the first falsy value it finds
// If all are truthy, it returns the last value
console.log('Hello' && 23 && null && 'Harsha'); // null is falsy, so it returns null


// Practcal example
 if(restaurant.orderPizza) {
 // restaurant.orderPizza("Mushrooms", "Spinach"); // calling the orderPizza method with arguments
 }


// restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Spinach"); // using && operator to call the method if it exists
// This is a shorthand way of writing the above if statement

// VIDEO 112 : THE NULLISH COALESCING OPERATOR (??)


restaurant.numGuests = 0; // setting numGuests to 0
const guests3 = restaurant.numGuests ? restaurant.numGuests : 10 ;

const guests4 = restaurant.numGuests ?? 10; // using || operator to set default value
console.log(guests3); // 10
console.log(guests4); //  0
// This is because 0 is falsy in JS
// But we want to set default value only when the value is null or undefined
// So we use ?? operator instead of || operator
// This is called nullish coalescing operator
// It returns the right operand when the left operand is null or undefined



// VIDEO 113 : LOGICAL ASSIGNMENT OPERATORS

const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,

};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//rest1.numGuests = rest1.numGuests || 10; // setting default value using || operator
//rest2.numGuests = rest2.numGuests || 10; // setting default value using || operator
//console.log(rest1); // {name: 'Capri', numGuests: 10}
//console.log(rest2); // {name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}
// this is the long way of doing it

// we can use logical assignment operators to do the same thing in a shorter way
//rest1.numGuests ||= 10; // setting default value using ||= operator 
//rest2.numGuests ||= 10; // setting default value using ||= operator


rest1.numGuests ??= 10; // setting default value using ??= operator
rest2.numGuests ??= 10; // setting default value using ??= operator

rest1.owner &&= '<ANONYMOUS>'; // setting owner to <ANONYMOUS> if it exists
rest2.owner &&= '<ANONYMOUS>'; // setting owner to <ANONYMOUS> if it exists

console.log(rest1); //
console.log(rest2); 
*/


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


const [players1, players2 ] = [...game.players];
//console.log(players1, players2); // logs the players of both teams

const[...allPlayers] = [...players1, ...players2];
//console.log(allPlayers); // logs all players of both teams

const [gk, ...players3] = players1;
//console.log(gk, players3); // logs the goalkeeper and field players of team 1

const [...players5] =  [...players1,'Thiago', 'Coutinho', 'Perisic']; // adding new players to the team
console.log(players5); // logs the players of team 1 after adding new players


// VIDEO 114 : THE FOR-OF LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // creating a new array with elements from restaurantMenu and adding a new element
for (const item of menu) {
  console.log(item); // logs each item in the menu array
}

for (const [i,el] of menu.entries()) {
  console.log(`${i + 1} : ${el}` ); // logs each item in the menu array
}


// VIDEO 117 : OPTIONAL CHAINING (?.)

if(restaurant.openingHours && restaurant.openingHours.mon){

  console.log(restaurant.openingHours.mon.open); // logs the opening hours of the restaurant on Monday
}


//console.log(restaurant.openingHours.mon.open); 
//console.log(restaurant.openingHours?.mon?.open);  // logs undefined if the property does not exist

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; // array of days of the week

for (const day of days){

  const open = restaurant.openingHours[day]?.open ?? 'closed';

  //console.log( `On ${day} we open at ${open} `); // logs the opening hours of the restaurant on each day of the week

}


// METHODS 

console.log(restaurant.order?.(1,2) ?? 'Method does not exist'); //
console.log(restaurant.orderRissotto?.(1,2) ?? 'Method does not exist'); // Method does not exist

// ARRAYS

const users = [{name: 'Jonas', email : 'HelloJonas'}];

console.log(users[0]?.name ?? 'User array empty'); // logs the name of the first user in the array


// VIDEO 118 : LOOPING OBJECTS : OBJECT KEYS, VALUES AND ENTRIES

const properties = Object.keys(openingHours); // getting the keys of the openingHours object
let openStr = `We are open on ${properties.length} days`; // logs the number of days the restaurant is open

for(const day of Object.keys(openingHours)){
  openStr += ` ${day},`;
} 

console.log(openStr); // logs the days the restaurant is open


// If we want values

const values = Object.values(openingHours); // getting the values of the openingHours object
console.log(values); // logs the values of the openingHours object

const entries = Object.entries(openingHours); // getting the entries of the openingHours object
console.log(entries); // logs the entries of the openingHours object

for(const [key, {open, close}] of entries){ // destructuring the entries of the openingHours object
  console.log(`On ${key} we open at ${open} and close at ${close}`); // logs the opening and closing hours of the restaurant on each day of the week
}


// VIDEO 119 : SETS

const set = new Set(['Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta']); // creating a set with duplicate values
//console.log(set); // logs the set with unique values

//console.log(new Set('Harsha')); // logs the set with unique characters from the string 'Harsha'
//console.log(set.size); // logs the size of the set
//console.log(set.has('Pizza')); // logs true if the set has the value 'Pizza'
//console.log(set.has('Bread')); // logs false if the set does not have the value 'Bread'
set.add('Garlic Bread'); // adds the value 'Garlic Bread' to the set
set.add('Garlic Bread'); 
set.delete('Risotto'); // deletes the value 'Risotto' from the set
console.log(set); // logs the set with the new value added
//set.clear(); // clears the set


for(const order of set){
  console.log(order); // logs each order in the set
}

// Example

const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Manager']; // creating an array with duplicate values
//const staffSet = new Set(staff); // creating a set with unique values from the staff array
// BUT here we want and Array of unique values so we use spread operator to convert the set to an array


const staffUnique  = [...new Set(staff)]; // creating a new array with unique values from the staff array
console.log(staffUnique); // logs the array with unique values

console.log(new Set(['Waiter', 'Chef', 'Manager']).size); // logs the size of the set with unique values
console.log(new Set("Jonsassaeureyucbxcnxbcxncbnfdf").size); 


// VIDEO 124 : MAPS 1

const rest = new Map(); // creating a new map
rest.set('name', 'Classico Italiano'); // setting the key-value pair in the map
rest.set(1, 'Firenze, Italy'); // setting the key-value pair in the map
console.log(rest.set(2, 'Lisbon, Portugal')); // setting the key-value pair in the map
// set Method even returns the map in the above log
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']) 
.set('open', 11)
.set('close', 23)
.set(true, "We are Open") 
.set(false, "We are Closed") 

console.log(rest.get('name')); // getting the value of the key 'name' from the map
console.log(rest.get(1)); // getting the value of the key 1 from the map
//console.log(rest.get(true))
// chaining of set method

const time = 21; // setting the time

console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // logs the value of the key 'open' from the map

const arr = [1,2]; // creating an array
rest.set(arr, 'Test'); // setting the key-value pair in the map with array as key
//console.log(rest.get(arr)); // getting the value of the key arr from the map
// logs 'Test'
console.log(rest.get(arr));




// VIDEO 128 : WORKING WITH STRINGS PARt 1

const airline = "TAP Air Portugal"; // creating a string
const plane = 'A320'; // creating a string

console.log(plane[0]); // logs the first character of the string
console.log(plane[1]); // logs the second character of the string
console.log(plane[2]); // logs the third character of the string
console.log("B737"[0]); // logs the first character of the string 

console.log(airline.length); // logs the length of the string
console.log("B737".length);

console.log(airline.indexOf('r')); // logs the index of the first occurrence of 'A' in the string
console.log(airline.lastIndexOf('r')); // logs the index of the last occurrence of 'A' in the string
console.log(airline.indexOf('Portugal')); // logs -1 because 'B737' is not in the string


console.log(airline.slice(4)); // logs the substring from index 0 to 4
console.log(airline.slice(4, 7)); // logs the substring from index 0 to 4
// Index 7 is not included in the substring

console.log(airline.slice(0, airline.indexOf(" "))); // logs the last 2 characters of the string
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // logs the last 2 characters of the string

console.log(airline.slice(-2)); // logs the last 2 characters of the string = al
console.log(airline.slice(1, -1)); // logs the substring from index 1 to -1 =  AP Air Portuga


const checkMiddleSeat = function(seat) { // defining a function to check if the seat is a middle seat
  
    const s = seat.slice(-1); // getting the last character of the string
    if(s === 'B' || s === 'E') { // checking if the last character is B or E
      console.log(`You got the middle seat with seat ` + seat); // logs the message if the condition is true
    } else {
      console.log(`You got lucky with seat ` + seat); // logs the message if the condition is false
    }
  }

checkMiddleSeat('11B'); // calling the function with argument 11B
checkMiddleSeat('23C'); // calling the function with argument 23C
checkMiddleSeat('3E'); // calling the function with argument 3E
checkMiddleSeat('9D'); // calling the function with argument 9D



// VIDEO 129 : WORKING WITH STRINGS PART 2


const airline = "TAP Air Portugal";

console.log(airline.toLowerCase()); // logs the string in lowercase
console.log("harsha".toUpperCase()); // logs the string in uppercase


// Capitalize the first letter of a string  
const passenger = "hArShA"; // creating a string
const passengerLower = passenger.toLowerCase(); // converting the string to lowercase
const passengerCorrect = passengerLower[0].toUpperCase () + passengerLower.slice(1);
console.log(passengerCorrect); // logs the string with first letter capitalized

// Comparing Emails

const email = "hello@harsha.io";
const loginEmail = " Hello@HARSHA.io \n";


if (email.trim().toLowerCase === loginEmail.trim().toLowerCase) {
  console.log("Email is correct"); // logs the message if the condition is true
}


// Replacing Strings

const priceGB = "288,97£"; // creating a string
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // replacing the string £ with $ and , with .

const annoucement = "All passengers come to boarding door 23. Boarding door 23"; // creating a string

console.log(annoucement.replace('door', 'gate')); // Replaces 1st appearance of door with gate

console.log(annoucement.replaceAll('door', 'gate')); // Replaces all appearances of door with gate

console.log(annoucement.replace(/door/g, 'gate')); 

*/
// Boolean Methods : includes, startsWith, endsWith

const plane = 'Airbus A320neo'; // creating a string
console.log(plane.includes('A320')); // logs true if the string contains A320
console.log(plane.includes('Boeing')); // logs true if the string contains Boeing
console.log(plane.startsWith('Air')); // logs true if the string starts with Air

if(plane.startsWith('Airbus') && plane.endsWith('neo')) { // checking if the string starts with Air and ends with neo
  console.log('Part of the new Airbus family'); // logs the message if the condition is true
}

// Practice Exercise

const checkBaggage = function(items) { // defining a function to check the baggage
  
    const baggage = items.toLowerCase(); // converting the string to lowercase
    if(baggage.includes('knife') || baggage.includes('gun')) { // checking if the string contains knife or gun
      console.log("You are not allowed to board"); // logs the message if the condition is true
    } else {
      console.log("You are allowed to board"); // logs the message if the condition is false
    }
  }

checkBaggage (' I have a laptop, some food and a pocket Knife'); // calling the function with argument 11B
checkBaggage ('I have some snacks and a camera'); // calling the function with argument 23C
checkBaggage ('I have a laptop, some food and a pocket gun'); // calling the function with argument 3E