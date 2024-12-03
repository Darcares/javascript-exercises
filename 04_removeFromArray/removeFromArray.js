const removeFromArray = function(array, value) {
    let currentValue;
    let splicedArray = [];
    for(let i = 0; i <= array.length; i++) {
        currentValue = array[i];
        if(currentValue === value) {
            splicedArray = array.toSpliced(i, 1);
        }            
    }
    return splicedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
