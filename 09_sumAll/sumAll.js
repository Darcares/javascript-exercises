const sumAll = function(numberOne, numberTwo) {

    if(numberOne < 0 || numberTwo < 0) return "ERROR";
    if(!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) return "ERROR";
    if(Number.isNaN(numberOne) || Number.isNaN(numberTwo)) return "ERROR";

    let smallNumber = 0;
    let bigNumber = 0;
    let sum = 0;
    if(numberOne > numberTwo) {
        bigNumber = numberOne;
        smallNumber = numberTwo;
    }

    else {
        bigNumber = numberTwo;
        smallNumber = numberOne;
    }

    for(let index = smallNumber; index <= bigNumber; index++) {
        sum += index;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
