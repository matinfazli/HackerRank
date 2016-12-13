//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/plus-minus)
//

// Original Input & Output
// ===============

// Input
var stdin = ['6', '-4 3 -9 0 4 1'];
// Running main function for output
main(stdin);


// Solution Starts
// ===============

// Main function
function main() {
	// Size of the array
	var n = stdin[0];
	// Creating an array of integers from the input
	var arr = stdin[1].split(' ').map(Number);
	// Initializing variables for positive, negative and zero counts.
	var pCount = 0, nCount = 0, zCount = 0, sum = arr.length;

	// Looping through the array and counting.
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) pCount += 1;
		else if (arr[i] < 0) nCount += 1;
		else zCount += 1;
	}

	// Output
	console.log(Number(pCount / sum).toFixed(6));
	console.log(Number(nCount / sum).toFixed(6));
	console.log(Number(zCount / sum).toFixed(6));
}