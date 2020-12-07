function puzzleDay3a() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay3.txt').toString().split("\r\n");
    var singleLineLength = myLines[0].length;
    var position = 0;
    var treesNumber = 0;
    myLines.forEach(function (currentItem) {
        var currentLine = currentItem.split('');
        position = position % singleLineLength;
        if (currentLine[position] == '#')
            treesNumber++;
        position = position + 3;
    });
    return treesNumber;
}
;
console.log(puzzleDay3a());
