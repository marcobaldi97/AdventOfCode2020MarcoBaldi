function puzzle10a(input) {
    var diffsOf3 = 0;
    var diffsOf2 = 0;
    var diffsOf1 = 0;
    var adaptersSelected = [];
    var possibleAdaptersToRemove = [];
    var currentJolt = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] - currentJolt < 4) {
            if ((input[i] - currentJolt) == 1) {
                diffsOf1++;
                adaptersSelected.push(input[i]);
                possibleAdaptersToRemove.push(input[i]);
                currentJolt = input[i];
            }
            ;
            if ((input[i] - currentJolt) == 2) {
                diffsOf2++;
                adaptersSelected.push(input[i]);
                possibleAdaptersToRemove.push(input[i]);
                currentJolt = input[i];
            }
            ;
            if ((input[i] - currentJolt) == 3) {
                diffsOf3++;
                adaptersSelected.push(input[i]);
                currentJolt = input[i];
            }
            ;
        }
    }
    ;
    diffsOf3++; //The default adapter
    console.log(adaptersSelected);
    console.log(possibleAdaptersToRemove);
    //console.log('The differences of 3 are: '+diffsOf3+' and the differences of 1 are: '+diffsOf1);
    return diffsOf1 * diffsOf3;
}
;
function loadNumberArrayFromInput(fileName) {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/' + fileName + '.txt').toString().split("\r\n");
    var aux = [];
    myLines.forEach(function (currentItem) {
        aux.push(parseInt(currentItem));
    });
    return aux;
}
var inputUnsortedInString = loadNumberArrayFromInput('inputDay10');
inputUnsortedInString.sort(function (a, b) { return a - b; });
console.log(puzzle10a(inputUnsortedInString));
