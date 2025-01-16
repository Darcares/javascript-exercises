const palindromes = function (originalString) {
    const straightString = originalString
    .split(``)
    .filter(item => !((item.charCodeAt(0) >= 32 && item.charCodeAt(0) <= 47) || item.at(0) === ` `))
    .join(``)
    .toLowerCase();
    const reversedString = straightString.split(``).toReversed().join(``);
    if(straightString === reversedString) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
