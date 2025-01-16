const palindromes = function (originalString) {
    const originalArray = originalString.split(``);
    const filteredArray = originalArray.filter((item) => {
        if(item.charCodeAt(0) >= 32 && item.charCodeAt(0) <= 47) return false;
        if(item.at(0) === ` `) return false;
        return true;
    });
    const straightString = filteredArray.join(``).toLowerCase();
    const reversedString = filteredArray.toReversed().join(``).toLowerCase();
    if(straightString === reversedString) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
