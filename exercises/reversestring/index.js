// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 1st solution
// function reverse(str) {
//     let reversed = "";
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed
// }   

// 2nd solution
// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// 3rd solution
function reverse(str) {
    return str.split("").reduce((reversed, char) => char + reversed, "")
}

module.exports = reverse;
