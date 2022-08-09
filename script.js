
// Event Listeners for buttons

const contents = document.getElementsByClassName('text');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const history = document.getElementsByClassName('history');
const clear = document.getElementsByClassName('clear');
const answer = document.getElementsByClassName('equals');

// Calculator Object
const calculator = {
    firstNumber: ``,
    operator: null,
    secondNumber: ``,
 }
 

//Loop to update Display with numbers
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function(event) {    
let display = contents[0].innerHTML
            if( calculator.operator != null ) {
                let value = display + numbers[i].innerHTML;     
                contents[0].innerHTML = value;
                calculator.secondNumber = contents[0].innerHTML;
                console.log(`Calculator Second Number is now set to ${calculator.secondNumber}`)
                history[0].innerHTML = `${calculator.firstNumber} ${calculator.operator}`

          }
                else {
         let value = display + numbers[i].innerHTML;
         contents[0].innerHTML = value;
         calculator.firstNumber = contents[0].innerHTML;
         console.log(`Calculator First Number is now set to ${calculator.firstNumber}`)
         history[0].innerHTML = `${calculator.firstNumber}`

                }
     })
}

//Loop to catch operator press and log variable
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function(event) {
            console.log(`You have pressed: ${operators[i].innerHTML}`)
            calculator.operator = operators[i].innerHTML
            console.log(`Calculator Operator is now set to ${calculator.operator}`)
            history[0].innerHTML = `${calculator.firstNumber} ${calculator.operator}`
            contents[0].innerHTML = ``
        } ) 
    }


//Clear button logic
for (let i = 0; i < clear.length; i++) {
    clear[i].addEventListener('click', function(event) {
    console.log("Clearing calculator object...!");
    calculator.firstNumber = ``;
    calculator.operator = null;
    calculator.secondNumber = ``;
    console.log('Cleared calculator object, clearing display...');
    contents[0].innerHTML = ``;
    history[0].innerHTML = ``;
    console.log('Cleared display. All set for new data');
})
}

//Answer button logic
for (let i = 0; i < answer.length; i++) {
    answer[i].addEventListener('click', function(event) {
        console.log(`Doing math! ${calculator.firstNumber} ${calculator.operator} ${calculator.secondNumber}`);
        parseFloat(calculator.firstNumber);
        parseFloat(calculator.secondNumber);
        contents[0].innerHTML = add(calculator.firstNumber, calculator.secondNumber);
    })

}

// Math Functions

function add(num1, num2) {
    parseFloat()
	let answer = (num1 += num2);
    calculator.firstNumber = answer;
    calculator.operator = null
    calculator.secondNumber = null
    contents[0].innerHTML = answer
  return answer;
};

function subtract(num1, num2) {
	let answer = (num1 - num2);
  return answer;
};

function divide(num1, num2) {
    
    if (num2 == 0) {
        console.log('Impossible')
    }   else {
    
    let answer = (num1 / num2);
    
    return answer;
    }
};

function multiply(num1, num2) {
    let answer = (num1 * num2)
    return answer;
};

function operate(num1, operator, num2) {
    if (operator == 'x'){
        return multiply(num1, num2)
        
    }
    if (operator == '/'){
        return divide(num1, num2)
    }
    if (operator == '+'){
        return add(num1, num2)
    }
    if (operator == '-'){
        return subtract(num1, num2)
    } 

}
