function check(number) {
    var result = '';
    if (isFizz(number)) {
        result = 'Fizz';
    }
    if (isBuzz(number)) {
        result += 'Buzz';
    }
    return result || number.toString();
}

function isFizz(number) {
    return number % 3 == 0;
}

function isBuzz(number) {
    return number % 5 == 0;
}

exports.check = check;