"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay3aImproved(steps, downNumber) {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay3.txt').toString().split("\r\n");
    let singleLineLength = myLines[0].length;
    let position = 0;
    let treesNumber = 0;
    for (let i = 0; i < myLines.length; i += downNumber) {
        let currentItem = myLines[i];
        let currentLine = currentItem.split('');
        position = position % singleLineLength;
        if (currentLine[position] == '#' && i != 0)
            treesNumber++;
        position = position + steps;
    }
    return treesNumber;
}
;
function puzzleDay3b() {
    let product = puzzleDay3aImproved(1, 1) * puzzleDay3aImproved(3, 1) * puzzleDay3aImproved(5, 1) * puzzleDay3aImproved(7, 1) * puzzleDay3aImproved(1, 2);
    return product;
}
;
console.log(puzzleDay3b());
