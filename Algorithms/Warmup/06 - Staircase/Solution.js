//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/staircase)
//

// Original Input & Output
// =======================

// Input
var stdin = ['6'];
// Running main function for output
main(stdin);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main() {
	// Size of the staircase
	var n = parseInt(stdin[0]);

	// Two dimensional array concept
	for (var i = 0; i < n; i++) {
		// Clear the output after each loop
		var output = '';

		// Loop through, whenever (n-1-i) is bigger than j concat a space else #
		for (var j = 0; j < n; j++) {
			j < (n-1-i) ? output += ' ' : output += '#';
		}

		// Output
		console.log(output);
	}

}