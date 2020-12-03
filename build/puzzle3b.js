"use strict";
function puzzleDay3aImproved(steps, downNumber) {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay3.txt').toString().split("\r\n");
    var singleLineLength = myLines[0].length;
    var position = 0;
    var treesNumber = 0;
    for (var i = 0; i < myLines.length; i += downNumber) {
        var currentItem = myLines[i];
        var currentLine = currentItem.split('');
        position = position % singleLineLength;
        if (currentLine[position] == '#' && i != 0)
            treesNumber++;
        position = position + steps;
    }
    /*myLines.forEach(currentItem => {
        let currentLine: string[] = currentItem.split('');
        position = position % singleLineLength;
        if (currentLine[position] == '#') treesNumber++;
        position = position + steps;
    });*/
    return treesNumber;
}
;
function puzzleDay3b() {
    var product = puzzleDay3aImproved(1, 1) * puzzleDay3aImproved(3, 1) * puzzleDay3aImproved(5, 1) * puzzleDay3aImproved(7, 1) * puzzleDay3aImproved(1, 2);
    return product;
}
;
console.log(puzzleDay3b());
