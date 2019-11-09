// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution 1
// function steps(n) {
//     let string = ""
//     for (let i = 0; i < n; i++) {
//       console.log(string = "#".repeat(i + 1) + " ".repeat(n-(i+1)))
//     }
// }

// solution 2 
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stairs = ""
//         for(let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stairs += "#"
//             } else {
//                 stairs += " "      
//             }
//         }
//         console.log(stairs)
//     }
// }

// solution 3 (recursion)
function steps(n, row = 0, result = "") {
    if (n === row) {
        return
    }

    if (n === result.length) {
        console.log(result)
        steps(n, row + 1)
        return
    }

    if (result.length <= row) {
        result += "#"
    } else {
        result += " "
    }
    steps(n, row, result)
}

module.exports = steps;
