"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay2a() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay2.txt').toString().split("\n");
    var ConcreteLineData = /** @class */ (function () {
        function ConcreteLineData(min, max, letter, word) {
            this.min = min;
            this.max = max;
            this.letter = letter;
            this.word = word;
        }
        ;
        return ConcreteLineData;
    }());
    ;
    var myConcreteLines = [];
    //for(let i:number = 0; i<15;i++) {//Line for testing
    for (var i = 0; i < myLines.length; i++) {
        //console.log(array[i]);
        var str = myLines[i];
        var splittedLine = str.split(" ");
        str = splittedLine[0];
        var splittedMinMax = str.split("-"); //split min and max
        str = splittedLine[1];
        var splittedLetter = str.split(":"); //split letter from :
        str = splittedLine[2];
        var splittedWord = str.split("\r"); //split letter from :
        var objectToAddToArray = new ConcreteLineData(parseInt(splittedMinMax[0]), parseInt(splittedMinMax[1]), splittedLetter[0], splittedWord[0]);
        myConcreteLines.push(objectToAddToArray);
    }
    ;
    var correctOnes = 0;
    myConcreteLines.forEach(function (currentItem) {
        var counterToOut = 0;
        var charactersInWord = currentItem.word.split('');
        for (var i = 0; i < charactersInWord.length; i++) {
            if (i + 1 == currentItem.min && charactersInWord[i] == currentItem.letter)
                counterToOut++;
            if (i + 1 == currentItem.max && charactersInWord[i] == currentItem.letter)
                counterToOut++;
        }
        ;
        if (counterToOut == 1)
            correctOnes++;
    });
    return correctOnes;
}
console.log(puzzleDay2a());
