//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/simple-array-sum)
//

// Original Input & Output
// ===============

// Input
var stdin = ['6', '1 2 3 4 10 11'];
// Running main function for output
main(stdin)


// Solution Starts
// ===============

// Main function
function main() {
	// Size of the array
	var n = stdin[0];
	// Creating an array of integers from the input
	var arr = stdin[1].split(' ').map(Number);
	// Adding the integers in array using Array.prototype.reduce() 
	var sum = arr.reduce(function(a, b) { return a + b; }, 0);

	// Output
	console.log(sum);
}