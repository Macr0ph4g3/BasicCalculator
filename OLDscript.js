
// Event Listeners for buttons

const contents = document.getElementsByClassName('text');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const history = document.getElementsByClassName('history');
const clear = document.getElementsByClassName('clear');
const answer = document.getElementsByClassName('equals');
const decimal = document.getElementsByClassName('decimal');

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
                console.log(`Calculator Operator is ${calculator.operator}`)
                let value = display + numbers[i].innerHTML;     
                contents[0].innerHTML = value.replace(/\D/g,'');
                calculator.secondNumber = value.replace(/\D/g,'');
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
            if(calculator.secondNumber != `` && calculator.firstNumber != ``) {
                console.log('THIS IS THE IF FOR OPERATOR')

                operate(calculator.firstNumber, calculator.operator, calculator.secondNumber)
                calculator.secondNumber = ``;
            } 
            if (calculator.firstNumber != undefined ) {
            console.log('THIS IS THE ELSE FOR OPERATOR')
            calculator.operator = operators[i].innerHTML
            console.log(`Calculator Operator is now set to ${calculator.operator}`)
            history[0].innerHTML = `${calculator.firstNumber} ${calculator.operator}`
            console.log(`setting history to ${calculator.firstNumber} ${calculator.operator}`)
            contents[0].innerHTML = ``
            console.log('Setting contents to blank')
            }
            }
         ) 
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
        console.log(`Pressed Equals: ${calculator.firstNumber} ${calculator.operator} ${calculator.secondNumber}`);
        operate(calculator.firstNumber, calculator.operator, calculator.secondNumber);
    })

}

// Math Functions



function add(num1, num2) {
	let answer = parseFloat(num1) + parseFloat(num2);
    calculator.firstNumber = answer;
    contents[0].innerHTML = answer
    history[0].innerHTML = `${answer} ${calculator.operator}`
    calculator.secondNumber = contents[0].innerHTML
  return answer;
};

function subtract(num1, num2) {
	let answer = (num1 - num2);
    calculator.firstNumber = answer;
    contents[0].innerHTML = answer
    history[0].innerHTML = `${answer} ${calculator.operator}`
    calculator.secondNumber = contents[0].innerHTML

  return answer;
};

function divide(num1, num2) {
    
    if (num2 == 0) {
        console.log('Impossible')
        contents[0].innerHTML = 'Impossible';
        console.log('test')
        return `You Fool!`
    }   else {
    
    let answer = (num1 / num2);
    calculator.firstNumber = answer;
    contents[0].innerHTML = answer
    history[0].innerHTML = `${answer} ${calculator.operator}`
    calculator.secondNumber = contents[0].innerHTML

    return answer;
    }
};

function multiply(num1, num2) {
    let answer = (num1 * num2)
    calculator.firstNumber = answer;
    contents[0].innerHTML = answer
    history[0].innerHTML = `${answer} ${calculator.operator}`
    calculator.secondNumber = contents[0].innerHTML
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
