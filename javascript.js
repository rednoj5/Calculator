//variables:

const display = document.querySelector('#digits');
const buttons = Array.from(document.querySelectorAll('.button'));

let firstNumber = '';
let secondNumber = '';
let operator = '';

const isNumber = /\d/;

//operators:

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a / b;
};

function multiply(a, b) {
    return a * b;
};

function bcspc() {
    console.log('delete')
    if (display.textContent == firstNumber) {
        firstNumber = firstNumber.toString().slice(0, -1);
        display.textContent = firstNumber;
        if (firstNumber == '') {
          display.textContent = 0;
        };
    } else if (display.textContent == secondNumber) {
        secondNumber = secondNumber.toString().slice(0, -1);
        display.textContent = secondNumber;
        if (secondNumber == '') {
            display.textContent = 0;
          };
    };
};

function sqrt() {
    let first = Number.parseFloat(firstNumber);
    let second = Number.parseFloat(secondNumber); 
    if (display.textContent == first) {
        firstNumber = Math.sqrt(first);
        display.textContent = firstNumber;
    } else if (display.textContent == second) {
        secondNumber = Math.sqrt(second);
        display.textContent = secondNumber;
    };
};

function prc() {
    let first = Number.parseFloat(firstNumber);
    let second = Number.parseFloat(secondNumber); 
    if (display.textContent == first) {
        firstNumber = first / 100;
        display.textContent = firstNumber;
    } else if (display.textContent == second) {
        secondNumber = second / 100;
        display.textContent = secondNumber;
    };
};

function clear() {
    display.textContent = 0;
    firstNumber = '';
    secondNumber = '';
    operator = '';
};

function checkIfTooLong(number) {
    if (number.toString().length > 15) {
        return true;
    } else {
        return false;
    }
};

//operating functions:

function operate() {
    let outcome = 0;
    let first = Number.parseFloat(firstNumber);
    let second = Number.parseFloat(secondNumber);
    if (operator == '+') {
        outcome = add(first, second);
    } else if (operator == '-') {
        outcome = substract(first, second);
    } else if (operator == 'X') {
        outcome = multiply(first, second);
    } else if (operator == '/') {
        outcome = divide(first, second);
    };
    clear();
    firstNumber = outcome;
    display.textContent = firstNumber;
}

function assignButton() {
    let button = this.textContent;
    if(isNumber.test(button) || button == '.') {
        assignNumber(button);
    } else if (button == '=') {
        if(firstNumber != '' && secondNumber != '' && operator != '') {
            operate()
        };
    } else {
        switch (button) {
            case 'backspace':
              bcspc();
              break;
            case '√':
              sqrt();
              break;
            case '%':
              prc()
              break;
            case '+':
                if (operate != '' && secondNumber != '') {
                    operate();
                    operator = '+';
                } else {
                    operator = '+';
                };
              break;
            case '-':
                if (operate != '' && secondNumber != '') {
                    operate();
                    operator = '-';
                } else {
                    operator = '-';
                };
              break;
            case 'X':
                if (operate != '' && secondNumber != '') {
                    operate();
                    operator = 'X';
                  } else {
                    operator = 'X';
                  };
                break;
            case '/':
                if (operate != '' && secondNumber != '') {
                    operate();
                    operator = '/';
                } else {
                    operator = '/';
                };
                break;
            case 'C/CE':
              clear();
              break;
        }
    }
};

function assignNumber(button) {
    //appending First Number
    if (operator == '' && display.textContent.length < 15) {
        if (button == '.' && firstNumber.includes('.')) {
                return
            } else {
            firstNumber += button;
            display.textContent = firstNumber;
            };
    //appending Second Number
    } else if (operator != '' && display.textContent.length < 15) {
        if (button == '.' && secondNumber.includes('.')) {
            return
        } else {
        secondNumber += button;
        display.textContent = secondNumber;
        };
    }
};
//events
display.textContent = 0;

buttons.forEach((item) => item.addEventListener('click', assignButton));