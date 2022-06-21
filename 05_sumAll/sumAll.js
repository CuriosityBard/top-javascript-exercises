const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    let bigNum = 0;
    let smallNum = 0;

    if (a > b) {
        bigNum = a;
        smallNum = b;
    } else if (b > a) {
        bigNum = b;
        smallNum = a;
    } else {
        return a;
    }

    let total = 0;

    let numOfNums = bigNum - smallNum;
    for (let i = 0; i < numOfNums; i++) {
        total += smallNum;
        smallNum++;
    }
    total += bigNum;

    return total;
};

// Do not edit below this line
module.exports = sumAll;
