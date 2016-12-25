//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited)
//

// Running main function for output
main('8 2', '0 0 1 0 0 1 1 0');


// Solution Starts
// ===============

// Main function
function main(input) {
    // Get input values and pass them to variabels
    var stdin = input[0].split(' '),
        noClouds = parseInt(stdin[0]), // Numver of clouds
        jump = parseInt(stdin[1]), // Jump value
        clouds = input[1].split(' ').map(Number); // Clouds array
    
    var energy = 100, // Initial enegry
        i = jump % noClouds; // Initial jump from 0
    
    energy -= clouds[i] * 2 + 1; // Initial energy loss
    
    // As long as current position is not equals to 0
    while (i != 0) {
        // Go to next cloud
        i = (i + jump) % noClouds;
        // Calculate the energy cost
        energy -= clouds[i] * 2 + 1;
    }
    
    // Output energy left
    console.log(energy);
}