"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay5b() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay5.txt').toString().split("\r\n");
    var result = 0;
    var resultValues = [];
    var numbers = [];
    for (var i_1 = 0; i_1 < 128; i_1++) {
        numbers.push(i_1);
    } //The front row and the back row does not actually exists.
    myLines.forEach(function (currentItem) {
        var numbers2 = [0, 1, 2, 3, 4, 5, 6, 7];
        var myRows = [];
        var myColumns = [];
        for (var i_2 = 0; i_2 < currentItem.length; i_2++) {
            if (i_2 < currentItem.length - 3) {
                myRows.push(currentItem.charAt(i_2));
            }
            else {
                myColumns.push(currentItem.charAt(i_2));
            }
        }
        var x = recursiveSearch(0, myRows, numbers);
        var y = recursiveSearch(0, myColumns, numbers2);
        result = x * 8 + y;
        if (x > 0 && x < 127 && result > 5 && result < 1016)
            resultValues.push(result);
    });
    result = 0;
    var lastItem = 0;
    resultValues.sort(function (a, b) { return a - b; });
    var wflag = true;
    var i = 21;
    while (i < 997 && wflag) {
        var j = i - 21;
        if (resultValues[j] != i) {
            result = i;
            wflag = false;
        }
        ;
        i++;
    }
    return result;
}
function recursiveSearch(index, data, numbers) {
    if (numbers.length == 1)
        return numbers[0];
    switch (data[index]) {
        case 'F': {
            index++;
            var nextNumbers = [];
            var newSize = numbers.length / 2;
            for (var i = 0; i < newSize; i++) {
                nextNumbers.push(numbers[i]);
            }
            ;
            return recursiveSearch(index, data, nextNumbers);
            break;
        }
        case 'B': {
            index++;
            var nextNumbers = [];
            var newSize = numbers.length / 2;
            for (var i = newSize; i < numbers.length; i++) {
                nextNumbers.push(numbers[i]);
            }
            ;
            return recursiveSearch(index, data, nextNumbers);
            break;
        }
        case 'L': {
            index++;
            var nextNumbers = [];
            var newSize = numbers.length / 2;
            for (var i = 0; i < newSize; i++) {
                nextNumbers.push(numbers[i]);
            }
            ;
            return recursiveSearch(index, data, nextNumbers);
            break;
        }
        case 'R': {
            index++;
            var nextNumbers = [];
            var newSize = numbers.length / 2;
            for (var i = newSize; i < numbers.length; i++) {
                nextNumbers.push(numbers[i]);
            }
            ;
            return recursiveSearch(index, data, nextNumbers);
            break;
        }
    }
    return 0;
}
console.log('-------------Begin------------------------------Begin------------------');
var performance = require('perf_hooks').performance;
var t0 = performance.now();
console.log(puzzleDay5b());
var t1 = performance.now();
console.log('The time was: ' + (t1 - t0));
