// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution #1
// function palindrome(str) {
//     const result = str.split("").reverse().join("")
//     return str === result;
// }

// solution #2
// function palindrome(str) {
//     let result = "";
//     for (const char of str) {
//         result = char + result
//     }
//     return str === result;
// }

// solution #3
function palindrome(str) {
    const result = str.split("").reduce((reversed, char) => char + reversed, "")
    return str === result;
}

module.exports = palindrome;
