import fs from 'fs';
function puzzleDay2a(){
    let fs = require('fs');
    let myLines: string[] = fs.readFileSync('./input/inputDay2.txt').toString().split("\n");
    class ConcreteLineData {
        min:number;
        max:number;
        letter:string;
        word:string;
        constructor(min:number,max:number,letter:string,word:string){
            this.min=min;
            this.max=max;
            this.letter=letter;
            this.word=word;
        };
    };
    let myConcreteLines = [];
    //for(let i:number = 0; i<11;i++) {//Line for testing
    for(let i:number = 0; i<myLines.length;i++) {
        //console.log(array[i]);
        let str = myLines[i];
        let splittedLine:string[] = str.split(" ");
        str = splittedLine[0];
        let splittedMinMax:string[] = str.split("-");//split min and max
        str = splittedLine[1];
        let splittedLetter:string[] = str.split(":");//split letter from :
        str = splittedLine[2];
        let splittedWord:string[] = str.split("\r");//split letter from :
        let objectToAddToArray = new ConcreteLineData(
            parseInt(splittedMinMax[0]),
            parseInt(splittedMinMax[1]),
            splittedLetter[0],
            splittedWord[0]
        );
        myConcreteLines.push(objectToAddToArray);
    };
    let correctOnes:number = 0;
    myConcreteLines.forEach(currentItem => {
        let countLetterInstances = 0;
        let charactersInWord = currentItem.word.split('');
        for (let i:number = 0; i < charactersInWord.length; i++) {
            if(charactersInWord[i] == currentItem.letter) countLetterInstances++;
        };
        if(currentItem.min<=countLetterInstances && countLetterInstances<=currentItem.max) correctOnes++;
    });
    return correctOnes;
}
console.log(puzzleDay2a());
