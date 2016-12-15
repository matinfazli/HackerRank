//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/a-very-big-sum)
//

// Running main function for output
main(['5', '1000000001 1000000002 1000000003 1000000004 1000000005']);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main(stdin) {
	// Size of the array
	var n = stdin[0];
	// Creating an array of integers from the input
	var arr = stdin[1].split(' ').map(Number);
	// Adding the integers in array using Array.prototype.reduce() 
	var sum = arr.reduce(function(a, b) { return a + b; }, 0);
		
	// Output
	console.log(sum);
}