const sumAll = function(int1, int2) {
    let sum = 0;
    if(    int1 < 0 
        || int2 < 0 
        || !Number.isInteger(int1) 
        || !Number.isInteger(int2)
        || Number.isNaN(int1)
        || Number.isNaN(int2) 
      ) return "ERROR";    
      
    else {
        max = Math.max(int1, int2);
        min = Math.min(int1, int2);
        for(let i = min; i <= max; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
