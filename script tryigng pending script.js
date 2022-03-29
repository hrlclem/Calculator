let operator1 = '';                // First operator as string
let operator2 = '';                // Second operator as string
let firstCalculation;              // First part of operation as Number (sum of all operator1, operator2...)
let currentCalculation;            // Currently inputed part (operator2 as number)
let pendingString = '';
let fullInput = '0';               // String to display calculation
let signInput;                     // Sign used to use calculate()
let finalResult;                   // Result after = sign, is duplicated as firstCalculation in case a new sign is selected

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
        if (signInput === undefined) 
        {
          console.log('1')
          let buttonValue = button.textContent;
          operator1 += buttonValue;
          fullInput = operator1;
          firstCalculation = Number(operator1);
          screenResult.innerHTML = fullInput;
        } 
        else if (signInput != undefined) 
        {
          console.log('2')
          let buttonValue = button.textContent;
          operator2 += buttonValue;
          fullInput = firstCalculation + ' ' + signInput + ' ' + operator2;
          currentCalculation = Number(operator2);
          screenResult.innerHTML = fullInput;
        } 
        else if (signInput != undefined && firstCalculation != undefined && currentCalculation != undefined) 
        {
          console.log('3')
          let buttonValue = button.textContent;
          operator2 += buttonValue;
          currentCalculation = operator2;
          fullInput = firstCalculation + ' ' + signInput + ' ' + currentCalculation;
          currentCalculation = Number(operator2);
          screenResult.innerHTML = fullInput;
        }
  })
});

// Select sign
  opeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (signInput === undefined && fullInput != '0')           // First sign chosen
      { 
        console.log('4')
        let buttonValue = button.textContent;
        signInput = buttonValue;
        fullInput = firstCalculation + ' ' + signInput;
        screenResult.innerHTML = fullInput;
        operator1 = '';
        operator2 = '';
      } 
      else if (signInput != undefined)       // Sign chosen again
      {
        console.log('5')
        let buttonValue = button.textContent;
        signInput = buttonValue;
        operate(firstCalculation, currentCalculation, signInput);
        firstCalculation = result;
        // Add sign to the result
        fullInput = firstCalculation + ' ' + signInput;
        screenResult.innerHTML = fullInput;
        operator1 = '';
        operator2 = '';
      } 
      else if (finalResult != undefined) 
      {
        console.log('7')
        operator1 = finalResult;
        firstCalculation = finalResult;
        currentCalculation = undefined;
        let buttonValue = button.textContent;
        signInput = buttonValue;
        fullInput = firstCalculation + ' ' + signInput;
        screenResult.innerHTML = fullInput;
        operator1 = '';
        operator2 = '';
    }
    else if (signInput === undefined && fullInput == '0' && operator1 == '') 
    {
        return;
    };
  })
});


//Equal click
equalBtn.forEach((button) => {
    button.addEventListener('click', () => {
      if (currentCalculation === undefined || signInput === undefined) { 
          console.log('8')
          return;
      } else if (currentCalculation != undefined) {
        console.log('9')
        operate(firstCalculation, currentCalculation, signInput);
        finalResult = result;
        firstCalculation = finalResult;
        screenResult.innerHTML = finalResult;
        screenOpe.innerHTML = fullInput;
        operator1 = '';
        operator2 = '';
        signInput = undefined;
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

// AC button
ACBtn.addEventListener('click', () => {
  if( fullInput.charAt(fullInput.length - 1) == '+' || 
      fullInput.charAt(fullInput.length - 1) == '-' || 
      fullInput.charAt(fullInput.length - 1) == '*' || 
      fullInput.charAt(fullInput.length - 1) == '/' ) {
        fullInput = fullInput.slice(0, -1);
        screenResult.innerHTML = fullInput;
        signInput = undefined;
      } else {
          if (signInput === undefined) 
          {
            fullInput = operator1.slice(0, -1);
            firstCalculation = Number(operator1.slice(0, -1));
            screenResult.innerHTML = fullInput;
          } 
          else if (signInput != undefined) 
          {
            operator2 = operator2.slice(0, -1);
            fullInput = firstCalculation + ' ' + signInput + ' ' + operator2;
            currentCalculation = Number(operator2);
            screenResult.innerHTML = fullInput;
          } 
          else if (signInput != undefined && firstCalculation != undefined && currentCalculation != undefined) 
          {
            operator2 = operator2.slice(0, -1);
            currentCalculation = operator2;
            fullInput = firstCalculation + ' ' + signInput + ' ' + currentCalculation;
            currentCalculation = Number(operator2);
            screenResult.innerHTML = fullInput;
          }
      }
    });





// Each sign functions
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


// Calculation function
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