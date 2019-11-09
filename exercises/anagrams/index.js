// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution 1
// function anagrams(stringA, stringB) {
//     let result = (string) => string.toLowerCase().split("").sort().filter((str) => str !== " " && str !== "!").join("")
//     return result(stringA) === result(stringB)
// }

// solution 2 
function anagrams(stringA, stringB) {
    let result = (string) => string.toLowerCase().replace(/[^\w]/g, "").split("").sort().join("")
    return result(stringA) === result(stringB)
}

module.exports = anagrams;
