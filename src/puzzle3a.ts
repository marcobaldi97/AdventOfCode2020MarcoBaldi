function puzzleDay3a(){
    let fs = require('fs');
    let myLines: string[] = fs.readFileSync('./input/inputDay3.txt').toString().split("\r\n");
    let singleLineLength = myLines[0].length;
    let position:number = 0;
    let treesNumber:number = 0;
    myLines.forEach(currentItem => {
        let currentLine: string[] = currentItem.split('');
        position = position % singleLineLength; 
        if (currentLine[position] == '#') treesNumber++;
        position = position + 3;
    });
    return treesNumber;
};
console.log(puzzleDay3a());
