// New script

// Event Listeners for buttons

const display = document.getElementById('display');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const history = document.getElementById('history');
const clear = document.getElementById('clear');
const answer = document.getElementById('equals')
const decimal = document.getElementById('decimal')
const buttons = document.getElementsByClassName('button')
const backspace = document.getElementById('backspace')

// Calculator Object

const calculator = {
    numOne: ``,
    operator: ``,
    numTwo: ``,
}

//Keep display and numbers short
// if(calculator.numOne.length >=12 ) {

// }
//Loop to update Display with numbers
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function(event) {
let pressedNum = numbers[i].innerHTML; 
        if ( (calculator.operator == ``) && ( calculator.numTwo == `` ) ) {
            calculator.numOne = calculator.numOne + pressedNum;
            display.innerHTML = calculator.numOne
            console.log(`button clicked! setting num one ${calculator.numOne}`);

        }  else {
            calculator.numTwo = calculator.numTwo + pressedNum
            display.innerHTML = calculator.numTwo
            console.log(`button clicked! setting num two to ${calculator.numTwo}`);

        }
    }
    )
}

//Adding Decimal points.
decimal.addEventListener(`click`, function(event) {
    console.log('test')
    if ( (calculator.numTwo == ``) && (calculator.numOne % 1 == 0) ) {
        console.log(`Numtwo is empty`);
        let decimalNum = parseFloat(calculator.numOne);
        calculator.numOne = decimalNum += "."
        display.innerHTML = calculator.numOne;

    }

    if ( (calculator.numTwo !== ``) && (calculator.numTwo % 1 == 0) ) {
        let decimalNum = parseFloat(calculator.numTwo);
        calculator.numTwo = decimalNum +="."
        display.innerHTML = calculator.numTwo
    }
})

//Loop to update Operator
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function(event) {
    console.log( `${calculator.numOne} ${calculator.operator}`)
    if ( calculator.operator !== `` && calculator.numTwo !== ``) {
        console.log(`Performing Operate: ${calculator.numOne} ${calculator.operate} ${calculator.numTwo}`)
        operate(calculator.numOne, calculator.operator, calculator.numTwo)
        calculator.numTwo = ``
        calculator.operator = operators[i].innerHTML
        history.innerHTML = `${calculator.numOne} ${calculator.operator}`
        display.innerHTML = calculator.numTwo

    } else if (calculator.operator !== `` && calculator.numTwo == `` ){
        calculator.operator = operators[i].innerHTML
        history.innerHTML = `${calculator.numOne} ${calculator.operator}`
    } else if (calculator.operator == `` && calculator.numTwo == ``) {
            calculator.operator = operators[i].innerHTML
            history.innerHTML = `${calculator.numOne} ${calculator.operator}`
            
        
    }
    })
}

//clear button logic


    clear.addEventListener('click', function(event) {
    console.log("Clearing calculator object...!");
    calculator.numOne = ``;
    calculator.operator = ``;
    calculator.numTwo = ``;
    console.log('Cleared calculator object, clearing display...');
    display.innerHTML = ``;
    history.innerHTML = ``;
    console.log('Cleared display. All set for new data');
})
//backspace button

    backspace.addEventListener('click', function(event) {
        if ( (calculator.operator == ``) && ( calculator.numTwo == `` ) ) {
            let slicedNumOne = calculator.numOne.toString().slice(0, -1)
            console.log(`Sliced numOne. It's now ${slicedNumOne}`)
            calculator.numOne = slicedNumOne
            display.innerHTML = slicedNumOne
        } else { 
            let slicedNumTwo = calculator.numTwo.toString().slice(0, -1)
            console.log(`Sliced numTwo. It's now ${slicedNumTwo}`)
            display.innerHTML = calculator.numTwo
            calculator.numTwo = slicedNumTwo
            display.innerHTML = slicedNumTwo

        }
    }) 

//Answer button logic

    answer.addEventListener('click', function(event) {
        console.log(`Pressed Equals: ${calculator.numOne} ${calculator.operator} ${calculator.numTwo}`);
        if (calculator.numTwo == 0 && calculator.operator == '/' ) {
            console.log('Impossible')
            display.innerHTML = 'Impossible';
            console.log('test')
            calculator.numTwo = ``;
            return `You Fool!`;
        }           
        if ((calculator.numTwo == ``)&&(calculator.operator == ``) ) {
            console.log('nothing')
        }
            operate(calculator.numOne, calculator.operator, calculator.numTwo);
            calculator.numTwo = ``
        display.innerHTML = calculator.numTwo
        calculator.operator = ``

    })


//operate
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

// Math Functions
function add(num1, num2) {
	let answer = parseFloat(num1) + parseFloat(num2);
    calculator.numOne = answer;
    display.innerHTML = answer
    history.innerHTML = `${answer} ${calculator.operator}`
  return answer;
};

function subtract(num1, num2) {
	let answer = (num1 - num2);
    calculator.numOne = answer;
    display.innerHTML = answer
    history.innerHTML = `${answer} ${calculator.operator}`
  return answer;
};

function divide(num1, num2) {
    
   
    let answer = (num1 / num2);
    calculator.numOne = answer;
    display.innerHTML = answer
    history.innerHTML = `${answer} ${calculator.operator}`
    calculator.numTwo = display.innerHTML
    return answer;
    
};

function multiply(num1, num2) {
    let answer = (num1 * num2)
    calculator.numOne = answer;
    display.innerHTML = answer
    history.innerHTML = `${answer} ${calculator.operator}`
    calculator.numTwo = display.innerHTML
    return answer;
};


//Hover-over and hover-leave style changes
//
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function(event) {
        buttons[i].style.backgroundColor = "#525252";
    }
)
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseleave', function(event) {
        buttons[i].style.backgroundColor = "#454545";
    }
)
}
answer.addEventListener('mouseover', function(event) {
    answer.style.backgroundColor = "#76c347";
}
)
answer.addEventListener('mouseleave', function(event) {
    answer.style.backgroundColor = "#6db442";
}
)
clear.addEventListener('mouseover', function(event) {
    clear.style.backgroundColor = "#f28d81"
})
clear.addEventListener('mouseleave', function(event) {
    clear.style.backgroundColor = "#DD8378"
})