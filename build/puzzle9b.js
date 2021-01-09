function puzzleDay9b(preamble) {
    function isThisNumberAnAddOfList(numberToTest, numbersToAdd) {
        let sums = [];
        for (let i = 0; i < numbersToAdd.length; i++) {
            let leftNumber = numbersToAdd[i];
            for (let j = i + 1; j < numbersToAdd.length; j++) {
                sums.push(leftNumber + numbersToAdd[j]);
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
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay9.txt').toString().split("\r\n");
    let j = 0;
    let evaluator = true;
    let resultPartA = 0;
    while (evaluator == true) {
        let preambleNumbers = [];
        let i = j;
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
    let myLinesInt = [];
    myLines.forEach(currentItem => {
        myLinesInt.push(parseInt(currentItem));
    });
    function searchContiguosAddToNumber(start, arrayToSearch, numberToSum) {
        let currentAdd = 0;
        let addedNumbers = [];
        let notEncountered = true;
        let index = start;
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
        addedNumbers.sort((a, b) => a - b);
        if (notEncountered == false) {
            let returnArray = [];
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
    let theFinalCut = searchContiguosAddToNumber(0, myLinesInt, resultPartA);
    console.log('The min is ' + theFinalCut[0] + ' and the max ' + theFinalCut[1]);
    return theFinalCut[0] + theFinalCut[1];
}
;
console.log('------------------------------------------------------');
function test9b() {
    const { performance } = require('perf_hooks');
    let ti = performance.now();
    console.log(puzzleDay9b(25));
    let tf = performance.now();
    console.log('The time was: ' + (tf - ti));
}
test9b();
