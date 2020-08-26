/*
    TASK 2: Which telephone number spent the longest time on the phone
    during the period? Don't forget that time spent answering a call is
    also time spent on the phone.
    Print a message:
    "<telephone number> spent the longest time, <total time> seconds, on the phone during 
    September 2016.".
*/

const { readFromFile } = require('./utils');

const callsFile = readFromFile('calls.csv').split('\n');

let totalTimePerNumber = {};
let longestUse = 0
let phoneWithLongestUse = ''

const numberIsMapped = (numberToCheck) => numberToCheck in totalTimePerNumber;

callsFile.map(textRecord => {
    const recordData = textRecord.split(',')

    const phoneNumber1 = recordData[0];
    const phoneNumber2 = recordData[1];
    const duration = parseInt(recordData[3]);

    numberIsMapped(phoneNumber1) ? 
        totalTimePerNumber[phoneNumber1] += duration : totalTimePerNumber[phoneNumber1] = duration

    numberIsMapped(phoneNumber2) ? 
        totalTimePerNumber[phoneNumber2] += duration : totalTimePerNumber[phoneNumber2] = duration
});

for ( let phoneNumber in totalTimePerNumber ){
    if (totalTimePerNumber[phoneNumber] > longestUse) {
        longestUse = totalTimePerNumber[phoneNumber];
        phoneWithLongestUse = phoneNumber
    }
};

console.log(`${phoneWithLongestUse} spent the longest time, ${longestUse} seconds, on the phone during September 2016.`);