let currentInputA = [];
let currentInputB = [];
let firstInput = '';
let nextInput;
let characterInput;
let currentOperation = "";

const body = document.body;
const calculator = document.getElementById('calculator');
const nbrButtons = document.querySelectorAll('.numberBtn');
const opeButtons = document.querySelectorAll('.opeBtn');
const screen = document.getElementById('screen');

nbrButtons.forEach((button) => {
    if (firstInput == '') {
      button.addEventListener('click', () => {
        let buttonValue = button.textContent;
        firstInput += buttonValue;
        firstInput = Number(firstInput);
        console.log(typeof firstInput);
        screen.innerHTML = firstInput;
    });
  } 
});

opeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (characterInput == undefined) { 
        let buttonValue = button.textContent;
        screen.innerHTML = firstInput + buttonValue;
      } else if (characterInput == undefined) {
        return;
      };
  });
});
// PSEUDOCODE

// OR just set currentInputA then if number is clicked, currentInputA += clicked button value.

// Operation function:
// if -firstNumber == NULL (it means it's the first input value )
//    If a numberBtn is clicked, push related value to -currentInputA array:
//    Click 2, push 2 to Array, click 3, push 3 to Array, click 7, push 7 to Array
//    => currentInputA = [2, 3, 7]
//
//    When opeBtn is clicked (- + * /), change array to type integer value '237' as -firstNumber, change -currentInputA = [] 
//    and sets -characterInput to "+", "-", ...
//
//    If = is clicked, nothing happens [if (currentDigit === "" || prevOperator === "" || prevDigit === "") return;]
//
//
//
//  if -firstNumber > 0 (it means it's the second input value )
//    If a numberBtn is clicked, push related value to -currentInputB array:
//    Click 4, push 4 to Array, click 6, push 6 to Array, click 1, push 1 to Array
//    => currentInputB = [4, 6, 1]
//
//    When opeBtn ou equal is clicked (= ou - + * /), change array to type integer value '461' as -secondNumber, change -currentInputB = [] 
//    and sets -characterInput to "+", "-", ... ou '' is = is clicked.
//    Run the related operation function (add, substract...) depending on case, and return VALUE
//
//
//    Make the whole operation as a string and set to currentOperation (to be able to save the whole operation string)


//peration();

// function operation() {
//       console.log(2);
//   // if(firstNumber == undefined) {
//       buttons.forEach((buttonNbr) => {
//         buttonNbr.addEventListener('click', () => {
//           alert(button.id);
//         });
//       buttons.addEventListener('click', () => {
//           alert('hello');
//         });
//     }
//         //   document.getElementById('numberBtn').getAttribute('value');
//         // }
//       )}

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