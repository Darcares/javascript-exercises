const removeFromArray = function(array, ...elementsToRemove) {

    for (let index = 0; index < array.length; index++) {

        elementsToRemove.forEach((elementToRemove) => {
            if(array[index] === elementToRemove) {

                array.splice(index, 1);
                index--;
            }
        })
        
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
