"use strict";

//console.log(this)

const calcAge = function (birthYear){
  console.log(2024 - birthYear)
 // console.log(this)
}

calcAge(1998);


const calcAgeArrow = birthYear =>{
  //console.log(2024 - birthYear)
  //console.log(this)
}

calcAgeArrow(1998);

const harsha = {
  firstName: "Harsha",
  lastName: "Kanwar",
  birthYear: 1998,
 
  calcAge: function () {
    console.log(this); // harsha object
    console.log(2025 - this.birthYear); // 27
  }
};
console.log("Calling harsha.calcAge()")
harsha.calcAge();
 // in this case this refers to the harsha object
// because the function is called by the harsha object as you can see in the above line

console.log("Calling matilda methods")

const matilda = {
  birthYear : 2017
}

matilda.calcAge = harsha.calcAge ;
matilda.calcAge();

const f = harsha.calcAge; // f is a reference to the function calcAge
//f(); // undefined - because the function is called without any object reference
// undefined is coming because of the this keyword

//var firstName = "Harsha"; // global variable
const kanwar = {
  firstName: "Harsha",
  lastName: "Kanwar",
  birthYear: 1998,
 
  calcAge: function () {
    console.log(this); // harsha object
    console.log(2025 - this.birthYear); // 27

    const isMillenial = function () {
      console.log(2025 - this.birthYear >= 1981 && 2025 - this.birthYear <= 1996); // false
    }
    isMillenial(); // undefined - because the function is called without any object reference
  },
  greet: () => {
    console.log(this); // this is the global object
    console.log(` Hey ${this.firstName}`); 
    }
};


kanwar.greet(); 
console.log(this.firstName); // undefined - because this refers to the global object
// undefined - because the this keyword in arrow function does not refer to the kanwar object
// it refers to the global object which is window or undefined in strict mode
// and hence this.firstName is undefined

kanwar.calcAge();   // this is a regular function call and in a regular function call this keyword is undefined
// and hence this.birthYear is undefined