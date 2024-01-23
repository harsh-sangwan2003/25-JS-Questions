let arr = [
    { name: "harsh", gender: "male" },
    { name: "jane", gender: "female" },
    { name: "smith", gender: "male" },
    { name: "julie", gender: "female" },
]

function filterGender(arr) {

    return arr.filter(obj => obj['gender'] === "male");
}

console.log(filterGender(arr));