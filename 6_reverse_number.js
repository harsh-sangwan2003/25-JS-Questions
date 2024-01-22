function reverseNumber(x) {

    return Number(x.toString().split('').reverse().join(''));
}

function reverseNumber2(x) {

    let res = 0;

    while (x != 0) {

        let digit = x % 10;
        x = Math.floor(x / 10);
        res = res * 10 + digit;
    }

    return res;
}

console.log(reverseNumber(12345));
console.log(reverseNumber2(12345));