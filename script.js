//* Pattern: F(n) = F(n-1) + F(n-2)

//  -----------------------------------------------------------------------------
// For Array Variation
let fibArray = [];
let fibDiv = [];

function fibonacciArray (numberInput, array) {
    if (numberInput > 25) {
        alert("Number too large, enter number less than 25");
    }
    for (let i = 0; i < numberInput; i++) {
        let firstNum = 1;
        let secondNum = 0;
        let numberToPush;

        while(numberInput >= 0) {
            numberToPush = firstNum;
            firstNum = firstNum + secondNum;
            secondNum = numberToPush;

            numberInput -= 1;
            array.push(secondNum);
        }
    }
}

//  -----------------------------------------------------------------------------
// For Recursive Method
function recursiveFibonacci (x) {
    if (x <= 1) {
        return 1;
    } else if (x > 25) {
        alert("Number too large, enter number less than 25");
    } else {
        return recursiveFibonacci(x - 1) + recursiveFibonacci(x -2);
    }
}


//  -----------------------------------------------------------------------------
// Input calculations

const recursiveInput = document.getElementById('recursive_input').value;
const recursiveIndex = parseInt(recursiveInput);
const arrayButton = document.getElementById('array_button');
const recursiveButton = document.getElementById('recursive_button');
const resultDiv = document.getElementById('result');
const form = document.getElementById('form');

arrayButton.addEventListener('click', () => {
    const arrayInput = document.getElementById('array_input').value - 1;
    const arrayIndex = parseInt(arrayInput);
    fibonacciArray(arrayIndex, fibArray);
    result.innerHTML = fibArray.pop();
    form.reset();
});


recursiveButton.addEventListener('click', () => {
    const recursiveInput = document.getElementById('recursive_input').value -1;
    const recursiveIndex = parseInt(recursiveInput);
    result.innerHTML = recursiveFibonacci(recursiveIndex);
    form.reset();
});



//  -----------------------------------------------------------------------------
// Fill Div with Sequence
function fillFibonacciDiv () {
    fibonacciArray(24, fibDiv);
    for (let i = 0; i < fibDiv.length; i++) {
       let li = document.createElement('li');
       li.innerText = fibDiv[i];
        document.getElementById('fib_numbers').appendChild(li); 
    }
}

fillFibonacciDiv();
