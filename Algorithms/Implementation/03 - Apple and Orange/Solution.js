//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/apple-and-orange)
//

// Running main function for output
main(['7 11', '5 15', '3 2', '-2 2 1', '5 -6']);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main(stdin) {
    // Get each line and turn them into array of integers.
    var housePos = stdin[0].split(' ').map(Number),
        treePos = stdin[1].split(' ').map(Number),
        fallCount = stdin[2].split(' ').map(Number),
        applesPos = stdin[3].split(' ').map(Number),
        orangesPos = stdin[4].split(' ').map(Number);
    
    // Create a an object with position of house and trees and
    // an object for counts (totals and falls on the range of house)
    var pos = {
        'house': {'left': housePos[0], 'right': housePos[1]},
        'trees': {'apple': treePos[0], 'orange': treePos[1]}
    }, count = {
        'total': {'apple': fallCount[0], 'orange': fallCount[1]},
        'onHouse': {'apple': 0, 'orange': 0}
    };
    
    // For the count of apples fallen:
    for (var i = 0; i < count.total.apple; i++) {
        // Calculate the fallen position
        var fallPos = pos.trees.apple + applesPos[i];
        // If it lands on the house, +1 the count of it in the object
        if (pos.house.left <= fallPos && pos.house.right >= fallPos) count.onHouse.apple++;
    }
    
    // Repeat the same process for oranges.  
    for (var i = 0; i < count.total.orange; i++) {
        var fallPos = pos.trees.orange + orangesPos[i];
        if (pos.house.left <= fallPos && pos.house.right >= fallPos) count.onHouse.orange++;
    }
    
    // Output
    console.log(count.onHouse.apple + '\n' + count.onHouse.orange);
}