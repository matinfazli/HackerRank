//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/compare-the-triplets)
//

// Original Input & Output
// ===============

// Input
var stdin = ['5 6 7', '3 6 10'];
// Running main function for output
main(stdin)


// Solution Starts
// ===============

// Main function
function main() {
	var aliceTemp = stdin[0].split(' ').map(Number);
	var bobTemp = stdin[1].split(' ').map(Number);
		
	var aliceScore = 0, bobScore = 0;
		
	for (var i = 0; i < aliceTemp.length; i++) {
		if (aliceTemp[i] > bobTemp[i]) aliceScore += 1;
		if (aliceTemp[i] < bobTemp[i]) bobScore += 1;
	}
		
	console.log(aliceScore, bobScore);
}