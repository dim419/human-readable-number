module.exports = function toReadable (number) {
    let ones = ['','one','two','three','four', 'five','six','seven','eight','nine'];
    let oneTen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let tens = ['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    let numString = number.toString();
    
    if (number === 0) {
    return 'zero';
    }
    if (number < 10) {
        return ones[number];
    }
    if (number >= 10 && number < 20) {
        return oneTen[number - 10];
    }
    if (number >= 20 && number <= 99) {
        return (tens[numString[0]] + ' ' + ones[numString[1]]).trim();
    }
    if (number >= 100 && number <= 999) {
        if (numString[1] == 0 && numString[2] == 0) {
            return ones[numString[0]] + ' ' + 'hundred';
        }
        if (numString[1] == 0 && numString[2] > 0) {
            return ones[numString[0]] + ' ' + 'hundred' + ' ' + ones[numString[2]];
        }
        if (numString[1] == 1) {  
            return ones[numString[0]] + ' ' + 'hundred' + ' ' + oneTen[numString[2]];
        } else {
            return (ones[numString[0]] + ' ' + 'hundred' + ' ' + tens[numString[1]] + ' ' + ones[numString[2]]).trim();
        }
    }
}
