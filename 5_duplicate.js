function duplicate(arr){

    return arr.concat(arr);
}

var arr = [1,2,3,4,5];
arr = duplicate(arr);
console.log(arr);