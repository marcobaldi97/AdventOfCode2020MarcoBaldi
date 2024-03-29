function puzzleDay9a(preamble) {
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
    let result = 0;
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
            result = parseInt(myLines[i]);
        j++;
    }
    ;
    return result;
}
;
console.log('------------------------------------------------------');
function test9a() {
    const { performance } = require('perf_hooks');
    let ti = performance.now();
    console.log(puzzleDay9a(25));
    let tf = performance.now();
    console.log('The time was: ' + (tf - ti));
}
test9a();
