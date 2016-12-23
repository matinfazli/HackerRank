//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/sock-merchant)
//

// Running main function for output
main(['9', '10 20 20 10 10 30 50 10 20']);

// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main(input) {
    // Get input and turn it into arrays of integers.
    var socks = input[1].split(' ').map(Number);
    // Initialize required variables
    var i, pairs = 0;
    
    // Loop through the socks
    for (i = 0; i < socks.length; i++) {
        // Find the index of the pair for current sock
        var pairIdx = socks.indexOf(socks[i], i + 1);
        // If the pair exists:
        if (pairIdx > -1) {
            // Remove both from the array
            socks.splice(i, 1);
            socks.splice(pairIdx - 1, 1);
            // Add 1 to pair and reset the loop
            pairs++, i = -1;
        }
    }
    
    // Output
    console.log(pairs);
}