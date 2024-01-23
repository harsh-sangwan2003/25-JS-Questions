function cloneArray(arr) {

    return [...arr];
}

function cloneArray2(arr) {

    let arr2 = [];

    arr.forEach(ele => {
        arr2.push(ele);
    });

    return arr2;
}

function cloneArray3(arr) {

    return arr.map(ele => ele);
}

console.log(cloneArray([1, 2, 3]));
console.log(cloneArray2([1, 2, 3]));
console.log(cloneArray3([1, 2, 3]));