//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/utopian-tree)
//

// Running main function for output
main(['3', '0', '1', '4']);


// Solution Starts
// ===============
// IMP: In HackerRank replace input[](s) with readLine()

// Main function
function main(input) {
    // Initializing required variables.
    var i, j, cycles = [], height;
    // Creating array of cycles, collecting all the inputs after 0.
    for (i in input) if (i != 0) cycles.push(Number(input[i]));
        
    // Loop through the cycles
    for (j in cycles) {
        // Initial tree height is always 1
        height = 1;
        // Loop through cycle count, if its odd, height + 1 else height * 2
        for (k = 0; k < cycles[j]; k++) (k % 2 > 0) ? height++ : height *= 2;
        // Output
        console.log(height);
    }
}