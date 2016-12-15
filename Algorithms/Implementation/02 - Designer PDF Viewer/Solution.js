//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/designer-pdf-viewer)
//

// Running main function for output
main(['1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5', 'abc']);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main(stdin) {
    // Get the heights as an array of integers, and word as array of string
    var h = stdin[0].split(' ').map(Number), word = stdin[1].split('');
    // Creating an alphabet array manually.
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // Initializing required variables.
    var i, height, width = 1, tallest = 1, area;
    
    // For every letter in the word
    for (i in word) {
        // Find the index of the word in the alphabets array
        // Check that against the heights array to get the height
        height = h[alphabet.indexOf(word[i])];
        // If the height is bigger than the tallest, set that as tallest.
        if (height > tallest) tallest = height;
    }
    
    // Calculate the area 
    area = word.length * width * tallest;

    // Output
    console.log(area);
}