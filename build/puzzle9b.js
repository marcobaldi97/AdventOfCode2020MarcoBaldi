function puzzleDay9b(preamble) {
    function isThisNumberAnAddOfList(numberToTest, numbersToAdd) {
        var sums = [];
        for (var i = 0; i < numbersToAdd.length; i++) {
            var leftNumber = numbersToAdd[i];
            for (var j_1 = i + 1; j_1 < numbersToAdd.length; j_1++) {
                sums.push(leftNumber + numbersToAdd[j_1]);
            }
            ;
        }
        ;
        if (sums.includes(numberToTest)) {
            return true;
        }
        else {
            return false;
        }
        ;
    }
    ;
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay9.txt').toString().split("\r\n");
    var j = 0;
    var evaluator = true;
    var resultPartA = 0;
    while (evaluator == true) {
        var preambleNumbers = [];
        var i = j;
        while (i < preamble + j) {
            preambleNumbers.push(parseInt(myLines[i]));
            i++;
        }
        ;
        evaluator = isThisNumberAnAddOfList(parseInt(myLines[i]), preambleNumbers);
        if (!evaluator)
            resultPartA = parseInt(myLines[i]);
        j++;
    }
    ;
    var myLinesInt = [];
    myLines.forEach(function (currentItem) {
        myLinesInt.push(parseInt(currentItem));
    });
    function searchContiguosAddToNumber(start, arrayToSearch, numberToSum) {
        var currentAdd = 0;
        var addedNumbers = [];
        var notEncountered = true;
        var index = start;
        while (index < arrayToSearch.length && notEncountered) {
            if (arrayToSearch[index] != numberToSum) {
                currentAdd = currentAdd + arrayToSearch[index];
                addedNumbers.push(arrayToSearch[index]);
            }
            ;
            if (currentAdd == numberToSum)
                notEncountered = false;
            index++;
        }
        ;
        addedNumbers.sort(function (a, b) { return a - b; });
        if (notEncountered == false) {
            var returnArray = [];
            returnArray.push(addedNumbers[0]);
            returnArray.push(addedNumbers[addedNumbers.length - 1]);
            return returnArray;
        }
        else {
            return searchContiguosAddToNumber(start + 1, arrayToSearch, numberToSum);
        }
        ;
    }
    ;
    var theFinalCut = searchContiguosAddToNumber(0, myLinesInt, resultPartA);
    console.log('The min is ' + theFinalCut[0] + ' and the max ' + theFinalCut[1]);
    return theFinalCut[0] + theFinalCut[1];
}
;
console.log('------------------------------------------------------');
function test9b() {
    var performance = require('perf_hooks').performance;
    var ti = performance.now();
    console.log(puzzleDay9b(25));
    var tf = performance.now();
    console.log('The time was: ' + (tf - ti));
}
test9b();
