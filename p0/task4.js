/*
    TASK 4:
    The telephone company want to identify numbers that might be doing
    telephone marketing. Create a set of possible telemarketers:
    these are numbers that make outgoing calls but never send texts,
    receive texts or receive incoming calls.
    Print a message:
    "These numbers could be telemarketers: "
    <list of numbers>
    The list of numbers should be print out one per line in lexicographic order with no duplicates.
*/

const { readFromFile } = require('./utils');

const textFile = readFromFile('texts.csv').split('\n');
const callsFile = readFromFile('calls.csv').split('\n');

let possibleMarketers = []

callsFile.map( callRecord => {
    const recordData = callRecord.split(',')

    if (!possibleMarketers.includes(recordData[0]))
        possibleMarketers.push(recordData[0]) 
});

callsFile.map( callRecord => {
    const recordData = callRecord.split(',')

    if (possibleMarketers.includes(recordData[1]))
        possibleMarketers = possibleMarketers.filter( number => number !== recordData[1])
});

textFile.map( textRecord => {
    const recordData = textRecord.split(',')

    if (possibleMarketers.includes(recordData[0]))
        possibleMarketers = possibleMarketers.filter( number => number !== recordData[1])
    
    if (possibleMarketers.includes(recordData[1]))
        possibleMarketers = possibleMarketers.filter( number => number !== recordData[1])
});


console.log('These numbers could be telemarketers:');
possibleMarketers.sort().map( marketer => console.log(marketer))