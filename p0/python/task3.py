
import csv
import re
with open('../utils/texts.csv', 'r') as f:
    reader = csv.reader(f)
    texts = list(reader)

with open('../utils/calls.csv', 'r') as f:
    reader = csv.reader(f)
    calls = list(reader)

"""
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
"""

codeAreas = []
total_bangalore_calls_count = 0
total_bangalore_received_calls = 0

def isFromBangalore(num):
    return num.startswith("(080)")

def isFixedLine(num):
    return num.startswith("(0")

def isMobilePhone(num):
    return num.find(" ") > 0 and num[0] in ['7','8','9']

def isTelemarketer(num):
    return num.startswith("140")

def getCodeArea(phone):
    if isFixedLine(phone):
        return phone[phone.find("(") + 1 : phone.find(")")]
    elif isMobilePhone(phone):
        return phone[:4]
    elif isTelemarketer(phone):
        return "140"

for call in calls:
    if isFromBangalore(call[0]):
        total_bangalore_calls_count += 1
        code = getCodeArea(call[1])

        if code not in codeAreas:
            codeAreas.append(code)
        
        if isFromBangalore(call[1]):
            total_bangalore_received_calls += 1

print('The numbers called by people in Bangalore have codes:')

for code in sorted(codeAreas):
    print(code)

call_percentage = (total_bangalore_received_calls * 1.0 / total_bangalore_calls_count * 1.0) * 100

print('{:.2f} percent of calls from fixed lines in Bangalore are calls to other fixed lines in Bangalore.'.format( call_percentage ))