//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/save-the-prisoner)
//

// Running main function for output
main('1\n5 2 1');


// Solution Starts
// ===============

// Main function
function main(input) {
    // Get the input, split the lines, get the number of test cases
    var stdin = input.split('\n'), t = Number(stdin[0]);
    
    // For every testcase
    for (var i = 0; i < t; i++) {
        // Get its parameters in integer
        var tests = stdin[i+1].split(' ').map(Number),
            noPrisoners = tests[0], 
            noSweets = tests[1], 
            startID = tests[2];
        
        // Output
        // Get the remaineder of number of sweets + Starting ID
        // of prisoners - 2 over number of prisoners, + 1
        console.log((noSweets + startID - 2) % noPrisoners + 1);
    }    
}