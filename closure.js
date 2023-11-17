/**
 * Write a function that takes in a number and returns another function
 * that takes in a second number and returns the sum of the two numbers.
 */

function a(num1) {
  return function (num2) {
    return num1 + num2;
  };
}
const addFive = a(5);
console.log(addFive(3));

/**
 * Write a function that takes in a string and returns another
 * function that takes in a second string and concatenates the two strings.
 */

// function str(s) {
//   return function (ss) {
//     return s + ss;
//   };
// }

// const stri = str("bharti");
// console.log(stri);
// console.log(stri("sharma"));

// /**
//  * Write a function that takes in an array of numbers and returns another function
//  * that takes in a second array of numbers and returns the intersection of the two arrays.
//  */

// function arr(arr1){
//     return function(arr2){
//         return arr1.filter(num => arr2.includes(num));

//     }
// }

// const intersection= arr([1,2,3,4,5]);
// console.log(intersection([2,4,5,8]));

// /**
//  * Write a function that takes in a number and returns a function that generates 
//  * a sequence of numbers that are multiples of the original number.
//  */

// function generateMultiples(num) {
//     let counter = 1;
//     return function() {
//       const multiple = num * counter;
//       counter++;
//       return multiple;
//     }
//   }

// const sequence = generateMultiples(4);
// console.log(sequence());
// console.log(sequence());