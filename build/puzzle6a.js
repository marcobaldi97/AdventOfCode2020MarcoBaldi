"use strict";
function puzzleDay6a() {
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
        allLanes = allLanes + ' ' + myLines[i];
    }
    myRegistryLanes = allLanes.split('\r\n');
    var result = 0;
    myRegistryLanes.forEach(function (currentItem) {
        var lettersYes = [];
        for (var i = 0; i < currentItem.length; i++) {
            console.log(currentItem[i]);
            if (!lettersYes.includes(currentItem[i]) && currentItem[i] != ' ' && currentItem[i] != '')
                lettersYes.push(currentItem[i]);
        }
        result = result + lettersYes.length;
    });
    return result;
}
console.log('-------------Begin------------------------------Begin------------------');
console.log(puzzleDay6a());
