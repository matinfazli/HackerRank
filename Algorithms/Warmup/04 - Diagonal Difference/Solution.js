//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/diagonal-difference)
//

// Original Input & Output
// =======================

// Input
var stdin = ['3', '11 2 4', '4 5 6', '10 8 -12'];
// Running main function for output
main(stdin);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main() {
    // Size of the array
    var n = stdin[0];
	
    // Initialize new array
    var arr = [];
	// Looping through input, creating and adding an array of integers for each.
	for (var i = 1; i < stdin.length; i++) {
		arr.push(stdin[i].split(' ').map(Number));
	}
	
	// Initializing variables
	var sum = 0, priSum = 0, secSum = 0;
	// Looping through the array and summing the diagonals.
	for (var j = 0; j < arr.length; j++) {
		// Calculating the primary diagonal.
		priSum += arr[j][j];
		// Reversing the second dimension of array to calculate secondary diagonal.
		secSum += arr[j][Math.abs(j - (arr.length - 1))];
	}

	// Calculating the absolute difference
	sum = Math.abs(priSum - secSum);

	// Output
	console.log(sum);
}