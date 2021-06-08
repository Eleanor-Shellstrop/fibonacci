//* Pattern: F(n) = F(n-1) + F(n-2)

//  -----------------------------------------------------------------------------
// For Array Variation
let fibArray = [];
let fibDiv = [];

function populateFibArray (number, array) {
    for (let i = 0; i < number; i++) {
        let firstNum = 0;
        let secondNum = 1;
        let numberToPush;

        while(number > 0) {
            numberToPush = firstNum + secondNum;
            array.push(numberToPush);

            firstNum = secondNum;
            secondNum = numberToPush;

            number -= 1;
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

console.log(recursiveFibonacci(5));

//  -----------------------------------------------------------------------------
// Fill Div with Sequence
function fillFibonacciDiv () {
    populateFibArray(25, fibDiv);
    for (let i = 0; i < fibDiv.length; i++) {
       let li = document.createElement('li');
       li.innerText = fibDiv[i];
        document.getElementById("fib_numbers").appendChild(li); 
    }
}

fillFibonacciDiv();
