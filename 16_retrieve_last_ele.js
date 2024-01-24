function retrieveEle(arr, n = 1) {

    let arr2 = [];

    if (n <= arr.length) {

        for (let i = 0; i < n; i++) {

            arr2.push(arr[arr.length - i - 1]);
        }
    }

    else {

        return "not possible";
    }

    return arr2;
}

console.log(retrieveEle([1, 2, 3, 4, 5], 3));