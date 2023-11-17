// for (let i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);

//   console.log("javascript");
// }

// function x(){

// for (var i = 1; i <= 5; i++) {
//   function y(a){
//     setTimeout(function () {
//         console.log(a);
//       }, a * 1000);
//   }
//   y(i);
//   }
//   console.log("javascript");

// }
// x();

/**
 * Write a function that takes in a message and a delay time and uses
 * setTimeout and a closure to log the message after the specified delay.
 */

// function messagelogged(message, delay){
//     setTimeout(function(){
//         console.log(message)
//     }, delay)
// }
// messagelogged('hello world', 2000)

/**
 * Write a function that takes in an array of strings and uses setTimeout and a
 * closure to log each string in the array after a specified delay.
 * The delay should be increased by one second for each subsequent string.
 */

function displayStrings(arr) {
  for (var i = 0; i < arr.length; i++) {
    (function (index) {
      //This function creates a closure around the index
      // variable by using an IIFE (Immediately Invoked Function Expression)
      //to create a new function scope for each iteration of the loop.

      setTimeout(function () {
        console.log(arr[index]);
      }, (index + 1) * 1000);
    })(i);
  }
}

// Example usage:
var strings = ["Hello", "world", "how", "are", "you"];
displayStrings(strings); // Logs each string in the array with a delay that increases by one second for each subsequent string

/**
 * Write a function that returns a closure that calculates the sum of two numbers. 
 * The first call to the closure should take in the first number and return a
 *  function that takes in the second number and returns the sum of the two numbers.
//  */

// function sum(num1) {
//     return function(num2) {
//       return num1 + num2;
//     };
//   }
  
//   // Example usage:
//   var add5 = sum(5); // Returns a function that adds 5 to a number
//   console.log(add5(3)); // Logs 8
//   console.log(add5(7)); // Logs 12
//   console.log(sum(2)(4)); // Logs 6

