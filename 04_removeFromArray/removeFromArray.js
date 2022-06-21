const removeFromArray = function(arrayOfValues, ...args) {
    let valuesToRemove =  Array.from(args);

    let returnArray = [...arrayOfValues];

    for (let value of valuesToRemove) {
        if (returnArray.includes(value)) {
            let pos = returnArray.indexOf(value);
            returnArray = [].concat(returnArray.slice(0, pos), returnArray.slice(pos+1, returnArray.length));
        } 
    }

    return returnArray;
};

removeFromArray([1], 5, 3, 6, 76, 3);

// Do not edit below this line
module.exports = removeFromArray;
