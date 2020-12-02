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
    //for(let i:number = 0; i<11;i++) {//Line for testing
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
        var countLetterInstances = 0;
        var charactersInWord = currentItem.word.split('');
        for (var i = 0; i < charactersInWord.length; i++) {
            if (charactersInWord[i] == currentItem.letter)
                countLetterInstances++;
        }
        ;
        if (currentItem.min <= countLetterInstances && countLetterInstances <= currentItem.max)
            correctOnes++;
    });
    return correctOnes;
}
console.log(puzzleDay2a());
