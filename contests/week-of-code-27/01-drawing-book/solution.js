//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/contests/w27/challenges/drawing-book)
//

// Running main function for output
main(['6', '2']);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main(stdin) {
    // Get the variables from the input
    var pageCount = parseInt(stdin[0]),
        targetPage = parseInt(stdin[1]);

    // If start from left, divide target page by 2,
    // If start from right, divide page count by 2 and minus it by leftStart
    var leftStart = Math.floor(targetPage / 2),
        rightStart = Math.floor(pageCount / 2) - leftStart;
     
    // Output the bigger value
    console.log(leftStart > rightStart ? rightStart : leftStart);
}