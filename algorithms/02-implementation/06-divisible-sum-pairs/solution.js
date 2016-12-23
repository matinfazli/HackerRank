//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/divisible-sum-pairs)
//

// Running main function for output
main(['6 3', '1 3 2 6 1 2']);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main(stdin) {
    // Get inputs and turn them into array of integers.
    var nk = stdin[0].split(' ').map(Number),
        arr = stdin[1].split(' ').map(Number);

    // Initialize required variables
    var i, j, k = nk[1], count = 0;
    
    // Double loop through the numbers
    for (i in arr) {
        for (j in arr) {
            // If its bigger than the current loop count and 
            // the i, j pair divided by k has 0 remainder, +1 count.
            if (i < j && (arr[i] + arr[j]) % k == 0) count++; 
        }
    }
    
    // Output
    console.log(count);
}