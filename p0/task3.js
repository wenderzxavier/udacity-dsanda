/*
TASK 3:
(080) is the area code for fixed line telephones in Bangalore.
Fixed line numbers include parentheses, so Bangalore numbers
have the form (080)xxxxxxx.)
Part A: Find all of the area codes and mobile prefixes called by people
in Bangalore.
 - Fixed lines start with an area code enclosed in brackets. The area
   codes vary in length but always begin with 0.
 - Mobile numbers have no parentheses, but have a space in the middle
   of the number to help readability. The prefix of a mobile number
   is its first four digits, and they always start with 7, 8 or 9.
 - Telemarketers' numbers have no parentheses or space, but they start
   with the area code 140.
Print the answer as part of a message:
"The numbers called by people in Bangalore have codes:"
 <list of codes>
The list of codes should be print out one per line in lexicographic order with no duplicates.

Part B: What percentage of calls from fixed lines in Bangalore are made
to fixed lines also in Bangalore? In other words, of all the calls made
from a number starting with "(080)", what percentage of these calls
were made to a number also starting with "(080)"?
Print the answer as a part of a message::
"<percentage> percent of calls from fixed lines in Bangalore are calls
to other fixed lines in Bangalore."
The percentage should have 2 decimal digits
*/

const { readFromFile } = require('./utils');

const callsFile = readFromFile('calls.csv').split('\n');

const codeNumberOfBangalore = new Set();
let totalCallsFromBangalore = 0;
let totalCallsReceivedFromBangalore = 0;

const isFromBangalore = (phoneNumber) => phoneNumber.startsWith('(080)')
const isFixedLine = (phoneNumber) => phoneNumber.startsWith('(0')
const isMobilePhone = (phoneNumber) => phoneNumber.includes(' ') && phoneNumber.match(/(7|8|9).*/);
const isTelemarketer = (phoneNumber) => phoneNumber.includes('140')

const getAreaCode = (phone) => {
  if (isFixedLine(phone)) {
    codeNumberOfBangalore.add(phone.match(/\(([^)]+)\)/)[1])
    if ( isFromBangalore(phone) ) totalCallsReceivedFromBangalore += 1;
  } else if (isMobilePhone(phone)) {
      codeNumberOfBangalore.add(phone.substring(0, 4))
  } else if (isTelemarketer(phone)) {
      codeNumberOfBangalore.add('140')
  }
}

callsFile.map( callRecord => {
    callDetails = callRecord.split(',');
    const caller = callDetails[0];
    const phoneCalled = callDetails[1]

    if (isFromBangalore(caller)) {
        totalCallsFromBangalore += 1;
        getAreaCode(phoneCalled);
    }
});

const sortedCodeNumbers = Array.from(codeNumberOfBangalore).sort();

console.log('The numbers called by people in Bangalore have codes:');
sortedCodeNumbers.forEach(code => console.log(code));

const callPercentage = (( totalCallsReceivedFromBangalore / totalCallsFromBangalore ) * 100 ).toFixed(2)
console.log(`${callPercentage} percent of calls from fixed lines in Bangalore are calls to other fixed lines in Bangalore.`)