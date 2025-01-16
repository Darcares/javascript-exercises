const fibonacci = function(index) {
    const intIndex = +index;
    if(intIndex < 0) return `OOPS`;
    let fibonacciSeries = [0, 1, 1];
    for(let i = 2; i < intIndex; i++) {
        const nextNumber = fibonacciSeries[i] + fibonacciSeries[i-1];
        fibonacciSeries.push(nextNumber);
    }
    return fibonacciSeries[intIndex];
};

// Do not edit below this line
module.exports = fibonacci;
