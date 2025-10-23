const fibonacci = function(element) {
    const requiredElement = parseInt(element);
    if(requiredElement < 0) return "OOPS";

    const fibonacci = [0, 1, 1];

    if(requiredElement === 1 || requiredElement === 2) return 1;

    for(let index = 3; index <= requiredElement; index++) {
        fibonacci.push(fibonacci[index-1] + fibonacci[index-2])
    }

    return fibonacci[requiredElement];


};

// Do not edit below this line
module.exports = fibonacci;
