const repeatString = function(strToRepeat, repeatAmount) {
    let returnString = "";

    // negative numbers won't work with for loop
    if (repeatAmount < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < repeatAmount; i++) {
        returnString += strToRepeat;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
