const reverseString = function(reverseThisString) {
    let arrayOfChars = reverseThisString.split("");
    let returnArray = [];

    for (let i = arrayOfChars.length - 1; i >= 0; i--) {
        returnArray.push(arrayOfChars[i]);
    }

    let returnString = returnArray.join("");
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
