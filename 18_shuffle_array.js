function shuffleArray(arr) {

    let shuffleArea = arr.length;

    while (shuffleArea > 0) {

        shuffleArea--;
        let indexExchange = Math.floor(Math.random() * shuffleArea);

        let temp = arr[shuffleArea];
        arr[shuffleArea] = arr[indexExchange];
        arr[indexExchange] = temp;
    }

    return arr;
}

console.log(shuffleArray([1, 2, 3, 4]));