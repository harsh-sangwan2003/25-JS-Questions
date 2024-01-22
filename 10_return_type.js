function returnType(param) {

    return typeof param;
}


console.log(returnType(null));
console.log(returnType(undefined));
console.log(returnType(returnType));
console.log(returnType(NaN));
console.log(returnType(Infinity));
