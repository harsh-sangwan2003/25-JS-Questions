function freqEle(arr) {

    let obj = {};

    for (let val of arr) {

        if (obj[val])
            obj[val]++;

        else
            obj[val] = 1;
    }

    console.log(obj);

    let res = -1;
    Object.keys(obj).reduce((acc, key) => {

        if (obj[key] > acc) {
            acc = obj[key];
            res = key;
        }

        return acc;
    }, 0)

    return res;
}

console.log(freqEle([1, 1, 2, 3]));