const palindromes = function (term) {
    // clean up string to leave only letters and convert to all the same case 
    let termFixed = term.split(' ').join('');
    for (char of termFixed) {
        if (char.toUpperCase() === char.toLowerCase()) {
            termFixed = termFixed.slice(0, termFixed.indexOf(char)) + termFixed.slice(termFixed.indexOf(char) + 1);
        }
    }
    termFixed = termFixed.toUpperCase();

    // reverse the string and compare 
    for (let i = 0; i < termFixed.length; i++) {
        if (termFixed[i] !== termFixed[termFixed.length - (i+1)]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
