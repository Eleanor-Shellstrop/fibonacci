// For Array Variation

// Pattern: F(n) = F(n-1) + F(n-2)

let fibArray = [];

function populateFibArray (number) {
    for (let i = 0; i < number; i++) {
        let firstNum = 0;
        let secondNum = 1;
        let numberToPush;

        while(number > 0) {
            numberToPush = firstNum + secondNum;
            fibArray.push(numberToPush);

            firstNum = secondNum;
            secondNum = numberToPush;

            number -= 1;
        }
    }
}

populateFibArray(10);

console.log(fibArray);