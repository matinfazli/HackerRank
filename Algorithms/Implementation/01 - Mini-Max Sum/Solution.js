//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/mini-max-sum)
//

// Original Input & Output
// =======================

// Input
var stdin = ['1 2 3 4 5'];
// Running main function for output
main(stdin);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main() {
    // Get the input as an array of integers
    var arr = stdin[0].split(' ').map(Number);
    // Initialize required variables
    var i, j, min, max, temp_sum, sum = 0;

    // Loop through the numbers
    for (i in arr) {
        // Set temporary sum to 0 at first of each loop
        temp_sum = 0;
        
        // For each number, loop again but miss that number
        // and add that number to our temporary sum
        for (j in arr) if (i != j) temp_sum += arr[j];
        
        // If max/min is undefined or is bigger/smaller than
        // the temporary sum, set that sum as max/min.
        if (max < temp_sum || !max) max = temp_sum;
        if (min > temp_sum || !min) min = temp_sum;
    }

    // Output
    console.log(min, max);
}