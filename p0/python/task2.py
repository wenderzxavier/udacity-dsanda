"""
Read file into texts and calls.
It's ok if you don't understand how to read files
"""
import csv
with open('../utils/texts.csv', 'r') as f:
    reader = csv.reader(f)
    texts = list(reader)

with open('../utils/calls.csv', 'r') as f:
    reader = csv.reader(f)
    calls = list(reader)

"""
TASK 2: Which telephone number spent the longest time on the phone
during the period? Don't forget that time spent answering a call is
also time spent on the phone.
Print a message:
"<telephone number> spent the longest time, <total time> seconds, on the phone during 
September 2016.".
"""

totalTimePerNumber = {}
longestUse = 0
phoneWithLongestUse = ''

for call in calls:
    phone1 = call[0]
    phone2 = call[1]
    callDurattion = int(call[3])

    if totalTimePerNumber.has_key(phone1):
        totalTimePerNumber[phone1] += callDurattion
    else:
        totalTimePerNumber[phone1] = callDurattion

    if totalTimePerNumber.has_key(phone2):
        totalTimePerNumber[phone2] += callDurattion
    else:
        totalTimePerNumber[phone2] = callDurattion

for phone, duration in totalTimePerNumber.items():
    if duration > longestUse:
        longestUse = duration
        phoneWithLongestUse = phone

print( "{0} spent the longest time, {1} seconds, on the phone during September 2016.".format( phoneWithLongestUse, longestUse ) )