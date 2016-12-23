//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/beautiful-days-at-the-movies)
//

// Running main function for output
main('20 23 6');


// Solution Starts
// ===============

// Main function
function main(input) {
    // Create an array of integers from input
    var arr = input.split(' ').map(Number);
    // Initialize required variables
    var k = arr[2], day, reverse, beautiful = 0;
    
    // Loop from first day, i, till last, j 
    for (day = arr[0]; day <= arr[1]; day++) {
        // Change the number to string, reverse it and get it as integer
        reverse = Number(day.toString().split('').reverse().join(''));
        // if |(day - reverse)| / k is a whole number then add 1 to beautifull
        if ((Math.abs(day - reverse) / k) % 1 == 0) beautiful++;
    }
    
    // Output
    console.log(beautiful)
}