//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/bon-appetit)
//

// Running main function for output
main(['4 1\n3 10 2 9\n12']);

// Solution Starts
// ===============

// Main function
function main(input) {
    // Get input and turn it into arrays of integers.
    var stdin = input[0].split('\n'),
        nk = stdin[0].split(' ').map(Number),
        costs = stdin[1].split(' ').map(Number),
        charged = Number(stdin[2]);
    
    // Initialize required variables
    var i, k = nk[1], share = 0;
    
    // Sum all the food costs to share
    for (i in costs) share += costs[i];
    // Minus the food Anna didnt eat divided by 2 person
    share = (share - costs[k]) / 2;
    
    // Output
    // Charged amount > than actual share? log the difference else Bon Appetit
    console.log(charged > share ? charged - share : 'Bon Appetit');
}