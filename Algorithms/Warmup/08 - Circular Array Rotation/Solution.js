//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/circular-array-rotation)
//

// Original Input & Output
// =======================

// Input
var stdin = ['3 2 3', '1 2 3', '0', '1', '2'];
// Running main function for output
main(stdin);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main() {
    // Creating array of integers for the first two lines of input.
    var n_arr = stdin[0].split(' ').map(Number), 
        m_arr = stdin[1].split(' ').map(Number);

    // Creating N, K and Q variables from the first input.
    var N = n_arr[0],   // Array Size
        K = n_arr[1],   // Number of operations
        Q = n_arr[2],   // Number of queries
        rot = K % N;    // Rotation amount
    
    // Run Q queries 
    for (var i = 0; i < Q; i++) {
        // Read index position from input
        var m = Number(stdin[i+2]);
        // If the index and rotation difference is bigger than 0, log that from the main array
        if ((m - rot) >= 0) console.log(m_arr[m - rot]);
        // Else log the oposite index
        else console.log(m_arr[m - rot + m_arr.length]);
    }
}