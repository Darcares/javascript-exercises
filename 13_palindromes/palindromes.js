const palindromes = function (string) {
    const cleanedString = remove(string).toLowerCase();
    const array = cleanedString.split("");
    const reversedArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        reversedArray.push(array[index]);
    }
    const reversedString = reversedArray.join("");
    if(cleanedString === reversedString) return true;
    return false;



    function remove(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        let character = str.charAt(i);
        if (!checkPunctuation(character)) {
            res += character;
        }
    }
    return res;
}

function checkPunctuation(char) {
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    return punctuation.includes(char);
}
};

// Do not edit below this line
module.exports = palindromes;
