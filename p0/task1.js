/*
 * TASK 1:
 * How many different telephone numbers are there in the records? 
 * Print a message:
 * "There are <count> different telephone numbers in the records."
*/

const { readFromFile } = require('./utils');

const textFile = readFromFile('texts.csv').split('\n');
const callFile = readFromFile('calls.csv').split('\n');

let phoneNumberRecords = new Set();

textFile.map( textRecord => {
    const splittedTextRecord = textRecord.split(',');
    phoneNumberRecords.add(splittedTextRecord[0]);
    phoneNumberRecords.add(splittedTextRecord[1]);
});

callFile.map( callRecord => {
    const splittedCallRecord = callRecord.split(',');
    phoneNumberRecords.add(splittedCallRecord[0]);
    phoneNumberRecords.add(splittedCallRecord[1]);
});

console.log(`There are ${phoneNumberRecords.size} different telephone numbers in the records.`);
