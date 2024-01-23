function countOccurance(str) {

    let obj = {};

    str.split("").forEach(ele => {

        if (obj[ele])
            obj[ele]++;

        else
            obj[ele] = 1;
    })

    return obj;
}

console.log(countOccurance("apple"));