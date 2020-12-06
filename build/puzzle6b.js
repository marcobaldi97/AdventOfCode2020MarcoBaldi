"use strict";
function puzzleDay6b() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay6.txt').toString().split("\r\n");
    var myRegistryLanes = [];
    var allLanes = ' ';
    myRegistryLanes.push('');
    var j = 0;
    for (var i = 0; i < myLines.length; i++) {
        if (myLines[i].charAt(0) == '') {
            allLanes = allLanes + '\r\n';
        }
        ;
        if (allLanes == '') {
            allLanes = allLanes + myLines[i];
        }
        else {
            allLanes = allLanes + ' ' + myLines[i];
        }
        ;
    }
    myRegistryLanes = allLanes.split('\r\n');
    var result = 0;
    myRegistryLanes.forEach(function (currentItem) {
        var lettersYes = [];
        currentItem = currentItem.trim();
        var myLinesGroups = currentItem.split(' ');
        var counter = 0;
        myLinesGroups.forEach(function (currentItem) {
            var currentYes = [];
            for (var i = 0; i < currentItem.length; i++) {
                if (counter == 0) {
                    lettersYes.push(currentItem.charAt(i));
                    currentYes.push(currentItem.charAt(i));
                }
                else {
                    currentYes.push(currentItem.charAt(i));
                }
                ;
            }
            ;
            lettersYes = lettersYes.filter(function (value) { return currentYes.includes(value); });
            counter++;
        });
        result = result + lettersYes.length;
    }); //reviso grupos
    return result;
}
console.log('-------------Begin------------------------------Begin------------------');
console.log(puzzleDay6b());
