//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/find-digits)
//

// Running main function for output
main('2', '12', '1012');


// Solution Starts
// ===============

// Main function
function main(input) {
    // Get the number of test cases
    var t = parseInt(input[0]);
    
    // For HackeRank change i = 1 to 0 and t + 1 to t
    // Loop through the testcases
    for (var i = 1; i < t+1; i++) {
        var test = parseInt(input[i]),
            // Get test and split it
            nums = test.toString().split(''),
            // Initial count 0
            count = 0;
        
        // For every number in the split, if its devisable count up
        for (var n in nums) if (test % nums[n] == 0) count++;
        
        // Output the count
        console.log(count);
    }
}