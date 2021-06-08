//* Pattern: F(n) = F(n-1) + F(n-2)

//  -----------------------------------------------------------------------------
// For Array Variation
let fibArray = [];
let fibDiv = [];

function fibonacciArray (numberInput, array) {
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
    } else if (x > 100) {
        alert("Number too large, enter number less than 100");
    } else {
        return recursiveFibonacci(x - 1) + recursiveFibonacci(x -2);
    }
}


//  -----------------------------------------------------------------------------
// Input calculations

const recursiveInput = document.getElementById("recursive_input").value;
const recursiveIndex = parseInt(recursiveInput);
const arrayButton = document.getElementById('array_button');
const recursiveButton = document.getElementById('recursive_button');

arrayButton.addEventListener('click', () => {
    const arrayInput = document.getElementById("array_input").value - 1;
    const arrayIndex = parseInt(arrayInput);
    fibonacciArray(arrayIndex, fibArray);
    console.log(fibArray.pop());
});


recursiveButton.addEventListener('click', () => {
    const recursiveInput = document.getElementById("recursive_input").value -1;
    const recursiveIndex = parseInt(recursiveInput);
    console.log(recursiveFibonacci(recursiveIndex));
});



//  -----------------------------------------------------------------------------
// Fill Div with Sequence
function fillFibonacciDiv () {
    fibonacciArray(25, fibDiv);
    for (let i = 0; i < fibDiv.length; i++) {
       let li = document.createElement('li');
       li.innerText = fibDiv[i];
        document.getElementById("fib_numbers").appendChild(li); 
    }
}

fillFibonacciDiv();
