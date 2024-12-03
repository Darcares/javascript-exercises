const removeFromArray = function(array, ...valuesToRemove) {
    for(let i = 0; i <= valuesToRemove.length; i++) {
        for(const valueToRemove of valuesToRemove) {
            for(const value of array) {
                if(value === valueToRemove) {
                    const indexOfValueToRemove = array.indexOf(valueToRemove);
                    array.splice(indexOfValueToRemove, 1);
                }
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

// const removeFromArray = function(array, ...valuesToRemove) {
//     for(let i = 0; i <= valuesToRemove.length; i++) {
//         for(const value of array) {
//             for(const valueToRemove of valuesToRemove) {
//                 if(value === valueToRemove) {
//                     const indexOfValueToRemove = array.indexOf(valueToRemove);
//                     array.splice(indexOfValueToRemove, 1);
//                 }
//             }
//         }
//     }
//     return array;
// };

//Both solutions work


