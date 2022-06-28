const fibonacci = function(n) {
    if (n < 1) {
        return 'OOPS';
    }
    let returnThis = 1;
    let addThis = 0;
    for (let i = 0; i < n-1; i++) {
        let prev = returnThis;
        returnThis += addThis;
        addThis = prev;
    }
    return returnThis;
};

// Do not edit below this line
module.exports = fibonacci;
