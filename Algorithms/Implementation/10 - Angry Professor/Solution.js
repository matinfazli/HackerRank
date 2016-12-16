//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/angry-professor)
//

// Running main function for output
main(['2', '4 3', '-1 -3 4 2', '4 2', '0 -1 2 1']);


// Solution Starts
// ===============
// IMP: In HackerRank replace input[](s) with readLine()

// Main function
function main(input) {
    // Initialize required variables
    var i, j, l, threshold, arrivals, onTime, testCase = [];

    // Warning: Change this loop to the readLine() method for HackerRank
    // Loop through the input, ignoring the first variable, taking out 2 input at a time
    for (i = 0; i < input.length; i++) if (i != 0 && i % 2) {
        // Creat integer arrays for each input
        var temp1 = input[i].split(' ').map(Number), 
            temp2 = input[i+1].split(' ').map(Number);
      
        // Add each set to the testCase array, [n, k, a]
        testCase.push([temp1[0], temp1[1], temp2]);
    }
    
    // Loop through the test cases
    for (j in testCase) {
        // Set the variables accordingly and on time students to 0.
        threshold = testCase[j][1], arrivals = testCase[j][2], onTime = 0;
        // Loop through the case arrivals, if its on time, add 1 to onTime
        for (l in arrivals) if (arrivals[l] <= 0) onTime++;
            
        // Output    
        // If threshold is bigger than students on time, log YES else NO
        console.log(threshold > onTime ? 'YES' : 'NO');
    }
}