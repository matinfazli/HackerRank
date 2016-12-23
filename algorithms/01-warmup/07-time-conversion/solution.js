//
// HackerRank Adventures (https://github.com/matinfazli/hackerrank)
//
// Author - Matin Fazli (https://github.com/matinfazli)
// Original challenge (https://www.hackerrank.com/challenges/time-conversion)
//

// Running main function for output
main(['07:05:45PM']);


// Solution Starts
// ===============
// IMP: In HackerRank replace stdin(s) with readLine()

// Main function
function main(stdin) {
    // Convert old time string '07:05:45PM' to an array like [07,05,45,PM].
    var time = stdin[0].match(/(\d+):(\d+):(\d+)(..)/);

    // Create an object with hour, minute, second and meridian.
    var timeObj = {
        'hh': Number(time[1]),
        'mm': Number(time[2]),
        'ss': Number(time[3]), 
        'meridian': time[4]
    };

    // Change 12-Hour format to 24-Hour.
    if (timeObj.meridian == 'PM' && timeObj.hh < 12) timeObj.hh += 12;
    else if (timeObj.meridian == 'AM' && timeObj.hh == 12) timeObj.hh -= 12;

    // If hour, minute or second value is below 10 add a 0 infront.
    if (timeObj.hh < 10) timeObj.hh = "0" + timeObj.hh;
    if (timeObj.mm < 10) timeObj.mm = "0" + timeObj.mm;
    if (timeObj.ss < 10) timeObj.ss = "0" + timeObj.ss;

    // Output the new formatted time.
    console.log(timeObj.hh + ':' + timeObj.mm + ':' + timeObj.ss); 
}