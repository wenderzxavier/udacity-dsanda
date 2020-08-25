/*
 * TASK 0:
 * What is the first record of texts and what is the last record of calls?
 * Print messages:
 * "First record of texts, <incoming number> texts <answering number> at time <time>"
 * "Last record of calls, <incoming number> calls <answering number> at time <time>, lasting <during> seconds"
 * */

const { readFromFile } = require('./utils');

const textFile = readFromFile('texts.csv').split('\n');
const callsFile = readFromFile('calls.csv').split('\n');

const firstTextRecord = textFile[0].split(',');

const lastCallRecord = callsFile[callsFile.length - 1].split(',');

console.log(`First record of texts ${firstTextRecord[0]} texts ${firstTextRecord[1]} at time ${new Date(firstTextRecord[2])}`);
console.log(`Last record of calls ${lastCallRecord[0]} texts ${lastCallRecord[1]} at time ${lastCallRecord[2]}, lasting ${lastCallRecord[3]} seconds`);