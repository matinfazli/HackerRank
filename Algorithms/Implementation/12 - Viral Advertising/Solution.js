//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/strange-advertising)
//

// Running main function for output
main('3');


// Solution Starts
// ===============

// Main function
function main(input) {
    // Initialize required variables
    var i, days = Number(input), people = 5, sum = 0;

    // Loop through the days
    for (i = 0; i < days; i++) {
        // Calculate people who liked
        people = Math.floor(people / 2);
        // Add likers to sum and share it with 3 new people
        sum += people, people *= 3;
    }
    
    // Output
    console.log(sum);
}