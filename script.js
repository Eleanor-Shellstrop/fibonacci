// For Array Variation

// Pattern: F(n) = F(n-1) + F(n-2)

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

function fillFibonacciDiv () {

    populateFibArray(25, fibDiv);
    for (let i = 0; i < fibDiv.length; i++) {
       let li = document.createElement('li');
       li.innerText = fibDiv[i];
        document.getElementById("fib_numbers").appendChild(li); 
    }
}

fillFibonacciDiv();
