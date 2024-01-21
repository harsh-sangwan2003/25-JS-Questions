var str = "hello how are you";

var savedStr = str.split(" ").map(word => word.split("").reverse().join("")).join(" ");

console.log(savedStr);