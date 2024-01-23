function retrieve(arr, n = 1) {

    let res = [];

    if (n <= arr.length) {

        for (let i = 0; i < n; i++)
            res.push(arr[i]);
    }

    else {

        return "not available";
    }

    return res;
}

console.log(retrieve([1, 2, 3, 4], 3));