//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/kangaroo)
//

// Original Input & Output
// =======================

// Input
var stdin = ['0 3 4 2'];
// Running main function for output
main(stdin);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main() {
    // Get input and turn it into array of integers.
    var arr = stdin[0].split(' ').map(Number);
    // Create required variables
    var x1 = arr[0], v1 = arr[1],
        x2 = arr[2], v2 = arr[3];
    
    // If kangaroo 1 jumps longer than 2 and the remainder of difference 
    // of their starting positions and velocities are 0, then output YES else NO.
    var output = (v1 > v2 && (x2 - x1) % (v1 - v2) == 0) ? "YES" : "NO";
    
    // Output
    console.log(output);
}