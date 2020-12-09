function puzzleDay9a(preamble) {
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
    var result = 0;
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
            result = parseInt(myLines[i]);
        j++;
    }
    ;
    return result;
}
;
console.log('------------------------------------------------------');
function test9a() {
    var performance = require('perf_hooks').performance;
    var ti = performance.now();
    console.log(puzzleDay9a(25));
    var tf = performance.now();
    console.log('The time was: ' + (tf - ti));
}
test9a();
