const sumAll = function(int1, int2) {
    let sum = 0;
    max = Math.max(int1, int2);
    min = Math.min(int1, int2);
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
