function puzzle10b(input) {
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
                currentJolt = input[i];
            }
            ;
            if ((input[i] - currentJolt) == 2) {
                diffsOf2++;
                adaptersSelected.push(input[i]);
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
    adaptersSelected.push(0);
    adaptersSelected.sort(function (a, b) { return a - b; });
    adaptersSelected.push(adaptersSelected[adaptersSelected.length - 1] + 3);
    for (var i = 1; i < adaptersSelected.length - 1; i++) {
        var ableToRemove = false;
        if (adaptersSelected[i + 1] - adaptersSelected[i - 1] < 4)
            ableToRemove = true;
    }
    ;
    diffsOf3++;
    var contiguos = [1];
    var contiguosIndex = 0;
    console.log(adaptersSelected);
    var resolvea = 1;
    for (var i = 0; i < adaptersSelected.length - 1; i++) {
        var currentVal = adaptersSelected[i];
        var diff = adaptersSelected[i + 1] - currentVal;
        if (diff == 1)
            contiguos[contiguosIndex]++;
        if (diff > 1) {
            contiguosIndex++;
            contiguos.push(1);
        }
        ;
    }
    ;
    console.log(contiguos);
    for (var i = 0; i < contiguosIndex + 1; i++) {
        if (contiguos[i] > 2) {
            if (contiguos[i] == 3)
                resolvea = resolvea * 2;
            if (contiguos[i] == 4)
                resolvea = resolvea * 4;
            if (contiguos[i] == 5)
                resolvea = resolvea * 7;
        }
        ;
    }
    return resolvea;
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
;
var inputDay10UnsortedInString = loadNumberArrayFromInput('inputDay10');
inputDay10UnsortedInString.sort(function (a, b) { return a - b; });
console.log(puzzle10b(inputDay10UnsortedInString));
