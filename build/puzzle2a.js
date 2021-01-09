"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay2a() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay2.txt').toString().split("\n");
    class ConcreteLineData {
        constructor(min, max, letter, word) {
            this.min = min;
            this.max = max;
            this.letter = letter;
            this.word = word;
        }
        ;
    }
    ;
    let myConcreteLines = [];
    //for(let i:number = 0; i<11;i++) {//Line for testing
    for (let i = 0; i < myLines.length; i++) {
        //console.log(array[i]);
        let str = myLines[i];
        let splittedLine = str.split(" ");
        str = splittedLine[0];
        let splittedMinMax = str.split("-"); //split min and max
        str = splittedLine[1];
        let splittedLetter = str.split(":"); //split letter from :
        str = splittedLine[2];
        let splittedWord = str.split("\r"); //split letter from :
        let objectToAddToArray = new ConcreteLineData(parseInt(splittedMinMax[0]), parseInt(splittedMinMax[1]), splittedLetter[0], splittedWord[0]);
        myConcreteLines.push(objectToAddToArray);
    }
    ;
    let correctOnes = 0;
    myConcreteLines.forEach(currentItem => {
        let countLetterInstances = 0;
        let charactersInWord = currentItem.word.split('');
        for (let i = 0; i < charactersInWord.length; i++) {
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
