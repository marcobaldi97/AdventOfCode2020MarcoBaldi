"use strict";
function puzzleDay5a() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay5.txt').toString().split("\r\n");
    var result = 0;
    var resultValues = [];
    var numbers = [];
    for (var i = 0; i < 128; i++) {
        numbers.push(i);
    }
    myLines.forEach(function (currentItem) {
        var numbers2 = [0, 1, 2, 3, 4, 5, 6, 7];
        var myRows = [];
        var myColumns = [];
        for (var i = 0; i < currentItem.length; i++) {
            if (i < currentItem.length - 3) {
                myRows.push(currentItem.charAt(i));
            }
            else {
                myColumns.push(currentItem.charAt(i));
            }
        }
        var x = recursiveSearch(0, myRows, numbers);
        var y = recursiveSearch(0, myColumns, numbers2);
        result = x * 8 + y;
        resultValues.push(result);
    });
    result = resultValues[0];
    resultValues.forEach(function (currentItem) {
        if (currentItem > result)
            result = currentItem;
    });
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
console.log(puzzleDay5a());
var t1 = performance.now();
console.log('The time was: ' + (t1 - t0));
