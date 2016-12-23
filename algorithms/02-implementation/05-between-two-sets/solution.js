//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/between-two-sets)
//

// Running main function for output
main(['2 3', '2 4', '16 32 96']);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main(stdin) {
    // Get inputs and turn them into array of integers.
    var counts = stdin[0].split(' ').map(Number),
        setA = stdin[1].split(' ').map(Number),
        setB = stdin[2].split(' ').map(Number);

    // Create required variables, get LCM of set A, and GCD of set B
    var i, j, intCount = 0, lcmA = lcmList(setA), gcdB = gcdList(setB);
    
    // Whenever the GDC of set B doesn't have a remainder over 
    // the LCM of set A * loop count then add 1 to our intCount
    for (i = lcmA, j = 2; i <= gcdB; i = lcmA * j, j++){
        if (gcdB % i == 0) intCount++;
    }
    
    // Output
    console.log(intCount);
}

// GCD function
// Gets the GCD between two given Int
function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}
// Gets the GCD between a list of numbers
function gcdList(list) {
    var devisor = list[0];
    list.forEach(function(n) { devisor = gcd(devisor, n) });
    return devisor;
}

// LCM function
// Gets the LCM between two given Ints
function lcm(a, b) {
    return (a * b) / gcd(a, b);   
}
// Gets the LCM between a list of Ints
function lcmList(list) {
    var multiple = list[0];
    list.forEach(function(n) { multiple = lcm(multiple, n) });
    return multiple;
}