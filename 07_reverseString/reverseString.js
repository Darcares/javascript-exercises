const reverseString = function(string) {
    const array = string.split("");
    console.log(array);
    let reversedArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        reversedArray.push(array[index]);    
    }
    const reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
