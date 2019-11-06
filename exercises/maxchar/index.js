// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    let max = 0;
    let maxChar = "";

    for (const char of str) {
        if(obj[char]) {
            obj[char]++
        } else {
            obj[char]
        }
    }

    for (const key in obj) {
        if (max < obj[key]) {
            max = obj[key]
            maxChar = key
        }       
    }
    return maxChar
    
}

module.exports = maxChar;
