/*
byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
cid (Country ID)

The fourth passport is missing two fields, cid and byr. Missing cid is fine, but missing any other field is not, so this passport is invalid.

According to the above rules, your improved system would report 2 valid passports.

Count the number of valid passports - those that have all required fields. Treat cid as optional.
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay4a() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay4.txt').toString().split("\r\n");
    var myPassportsLanes = [];
    var allLanes = ' ';
    myPassportsLanes.push('');
    var j = 0;
    for (var i = 0; i < myLines.length; i++) {
        if (myLines[i].charAt(0) == '') {
            allLanes = allLanes + '\r\n';
        }
        ;
        allLanes = allLanes + ' ' + myLines[i];
    }
    myPassportsLanes = allLanes.split('\r\n');
    for (var i = 0; i < myPassportsLanes.length; i++) {
        console.log(myPassportsLanes[i]);
    }
    var correctPassports = 0;
    myPassportsLanes.forEach(function (currentItem) {
        var passPortsElements = 0;
        var cidIsHere = false;
        var separateElementsBySpace = currentItem.split(' ');
        var nothingCorrection = 2;
        passPortsElements = separateElementsBySpace.length;
        separateElementsBySpace.forEach(function (currentItem) {
            var separateElementsByDoubleStops = currentItem.split(':');
            if (separateElementsByDoubleStops[0] == 'cid')
                cidIsHere = true;
        });
        if (passPortsElements - nothingCorrection == 8)
            correctPassports++;
        if (passPortsElements - nothingCorrection == 7 && cidIsHere == false)
            correctPassports++;
    });
    return correctPassports;
}
console.log('-------------Begin------------------------------Begin------------------');
console.log(puzzleDay4a());
