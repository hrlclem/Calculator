let operator1 = '';           // First operator as string
let operator2 = '';           // Second operator as string
let firstNum;                 // First part of operation as Number
let secondNum;
let fullInput = '0';
let signInput;
let finalResult;
let currentOperation = "";    // Displayed operation as string

const body = document.body;
const calculator = document.getElementById('calculator');
const nbrButtons = document.querySelectorAll('.numberBtn');
const opeButtons = document.querySelectorAll('.opeBtn');
const equalBtn = document.querySelectorAll('.equal');
const screenOpe = document.getElementById('screenOpe');
const screenResult = document.getElementById('screenResult');
const ACBtn = document.getElementById('AC');
const DELBtn = document.getElementById('DEL');





// Show 0 by default on screen
screenResult.innerHTML = fullInput;


// Numbers click
nbrButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // First number chosen
      if (signInput === undefined) {
          let buttonValue = button.textContent;
              operator1 += buttonValue;
              if (operator1 === ".") {
                fullInput = operator1;
                screenResult.innerHTML = fullInput;
              } else {
                firstNum = Number(operator1);
                fullInput = firstNum;
                screenResult.innerHTML = fullInput;
              }
        // After sign chosen
    } else if (signInput != undefined) {
        let buttonValue = button.textContent;
            operator2 += buttonValue;
            if (operator2 === ".") {
              fullInput = firstNum + ' ' + signInput + ' ' + secondNum  + ' ';
              screenResult.innerHTML = fullInput;
            } else {
              secondNum = Number(operator2);
              fullInput = operator1 + ' ' + signInput + ' ' + operator2  + ' ';
              screenResult.innerHTML = fullInput;
            }
    }
  })
});


// Signs click
opeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // First sign chosen
      if (signInput == undefined) { 
            firstNum = operator1;
        let buttonValue = button.textContent;
            signInput = buttonValue;
            fullInput = operator1 + ' ' + signInput + ' ' ;
            screenResult.innerHTML = fullInput;
      // Sign chosen again
      } else if (signInput != undefined) {
            //Calculate 2 first operators
            operate(firstNum, secondNum, signInput);
            firstNum = result;
            // Display result in upper screen
            // screenOpe.innerHTML = fullInput;
            // Add sign to the result
            firstNum = result + ' ' + signInput + ' ' ;
            screenResult.innerHTML = firstNum;
            signInput = undefined;
      } else if (finalResult != undefined) {
            operator1 = finalResult;
            firstNum = finalResult;
            secondNum = undefined;
        let buttonValue = button.textContent;
            signInput = buttonValue;
            fullInput = fullInput + ' ' + signInput + ' ' ;
            screenResult.innerHTML = fullInput;
    };
  })
});


//Equal click
equalBtn.forEach((button) => {
    button.addEventListener('click', () => {
      if (secondNum === undefined || signInput == '=') { 
          return;
      } else if (secondNum != undefined) {
        operate(firstNum, secondNum, signInput);
        finalResult = result;
        signInput = undefined;
        screenResult.innerHTML = finalResult;
        screenOpe.innerHTML = fullInput;
      };
  })
});


// DEL button
DELBtn.addEventListener('click', () => {
  fullInput = '0';
  screenOpe.innerHTML = '';
  screenResult.innerHTML = fullInput;
  operator1 = '';
  operator2 = '';
  firstNum = undefined;
  secondNum= undefined;
  signInput = undefined;
  finalResult = undefined;
  currentOperation = "";
});








// PSEUDOCODE

// OR just set currentInputA then if number is clicked, operatorA += clicked button value.

// Operation function:
// if -firstNumber == NULL (it means it's the first input value )
//    If a numberBtn is clicked, push related value to -operatorA array:
//    Click 2, push 2 to Array, click 3, push 3 to Array, click 7, push 7 to Array
//    => operatorA = [2, 3, 7]
//
//    When opeBtn is clicked (- + * /), change array to type integer value '237' as -firstNumber, change -operatorA = [] 
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
//    When opeBtn ou equal is clicked (= ou - + * /), change array to type integer value '461' as -secondNumber, change -operatorB = [] 
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
  
	result = Number(a) + Number(b);
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