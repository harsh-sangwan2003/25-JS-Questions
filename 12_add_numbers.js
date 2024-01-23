function addNumbers(arr) {

    return arr.reduce((acc, ele) => {

        if (typeof ele === 'number')
            acc += ele;

        return acc;

    }, 0)

}

console.log(addNumbers([1, 2, 3, "hehe"]));