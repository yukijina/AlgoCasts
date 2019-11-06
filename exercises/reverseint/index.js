// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My solution
// function reverseInt(n) {
//     const str = n.toString().split("")
//     if (str.includes("-")) {
//         str.shift();
//         str.reverse().unshift("-")
//         const result = str.join("")    
//         return parseInt(result, 10);
//     } else {
//         const result = str.reverse().join("")
//         return parseInt(result, 10)
//     }
// }

// 1st solution
// function reverseInt(n) {
//     const result = n.toString().split("").reverse().join("")
//     return n < 0 ? parseInt(result) * -1 : parseInt(result)
// }

//2nd solution
function reverseInt(n) {
    const result = n.toString().split("").reverse().join("")
    return parseInt(result) * Math.sign(n)
}

module.exports = reverseInt;
