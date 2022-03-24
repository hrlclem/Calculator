let operation = [];
let currentOperation = [];
let typedValye = [];


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

