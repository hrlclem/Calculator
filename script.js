let currentInputA = [];
let currentInputB = [];
let savedInputA;
let savedInputB;
let characterInput;
let currentOperation = "";





// PSEUDOCODE
// if -savedInputA == NULL (it means it's the first input value )
//    If a number is clicked, push related value to -currentInputA array:
//    Click 2, push 2 to Array, click 3, push 3 to Array, click 7, push 7 to Array
//    => currentInputA = [2, 3, 7]
//
//    When character is clicked (- + * /), change array to integer value '237' as -savedInputA, change -currentInputA = [] 
//    and sets -characterInput to "+", "-", ...
//
//    If = is clicked, nothing happens
//
//  if -savedInputA > 0 (it means it's the second input value )
//    If a number is clicked, push related value to -currentInputB array:
//    Click 4, push 4 to Array, click 6, push 6 to Array, click 1, push 1 to Array
//    => currentInputB = [4, 6, 1]
//
//    When character is clicked (= ou - + * /), change array to integer value '461' as -savedInputB, change -currentInputB = [] 
//    and sets -characterInput to "+", "-", ...
//
//
//    Make the whole operation as a string and set to currentOperation (to be able to save the whole operation string)


// Calculation functions
const add = function(a, b) {
	result = a + b;
  return result;
};

const subtract = function(a, b) {
	result = a - b;
  return result;
};

const multiply = function(a, b) {
	result = a * b;
  return result;
};

const divide = function(a, b) {
	result = a / b;
  return result;
};


const operate = function(a,b, operator) {

    if (operator == "+") {
        add(a,b);
        return add;
    } else if (operator == "-") {
        subtract(a,b);
        return subtract;
    } else if (operator == "*") {
        multiply(a,b);
        return multiply;
    } else if (operator == "/") {
        divide(a,b);
        return divide;
    };
};



// const multiplyArray = function(array) {
//     let result = 1;
//       for (let i = 0; i < array.length; i++) {
//       result *= array[i];
//     }
//     return result;
//   };



  

// const sum = function(array) {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     result += array[i] 
//   }
//   return result;
// };

