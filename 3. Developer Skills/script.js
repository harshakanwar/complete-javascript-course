'use strict';

/*
// const s = '90';
// //console.log(s);
// const calcAge = birthYear => 2024 - birthYear;

// //console.log(calcAge(1998));

// /////////////////////////////////////
// // Using Google Stack OverFlow and MDN

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [13, -2, -6, -1, 'error', 9, 13, -17, -15, -14, 19, 5];
// Find Temperature Amplitude - Difference between Highest and Lowest Temperatures
// Sometimes there is a sensor Error please ignore it

const calcTempAmplitude = function (t1, t2) {
  let a = t1.concat(t2);
  let i, min, max;

  for (i = 0; i < a.length; i++) {
    if (typeof a[i] !== 'number') continue;
    else {
      min = a[i];
      max = a[i];
      break;
    }
  }
  for (i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
      //console.log('Min changes to ', min);
    }
    if (a[i] > max) {
      max = a[i];
      //console.log('Max changes to ', max);
    }
  }
  console.log(max, min);
  console.log(max - min);
};

calcTempAmplitude(temperatures);

///// Now the function will take in 2 arrays instead of one and you need to find out the 1 min and 1 max from both of them combined

// Solution: We merge the Arrays to keep the logic same

calcTempAmplitude(temperatures, temperatures2);

///////////////////////////////////////////////////
// 61.Debugging with console and breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    //value: Number(prompt('Degrees celcius :')),
    value: 10,
    // All values returned by PROMPT function are of type String no matter what you enter
  };
  //console.table(measurement);  COOL way to log
  console.log(typeof measurement.value);
  // So here we have the issue value if of type String,

  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/
///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

*/

const arr = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];
let str = '';

const printForecast = function (data) {
  for (let i = 0; i < data.length; i++) {
    str = str.concat(` ${data[i]} °C in  ${i + 1} days ... `);
  }
  console.log('...' + str);
};
printForecast(arr);
