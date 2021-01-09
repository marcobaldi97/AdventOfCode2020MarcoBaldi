"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay5b() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay5.txt').toString().split("\r\n");
    let result = 0;
    let resultValues = [];
    let numbers = [];
    for (let i = 0; i < 128; i++) {
        numbers.push(i);
    } //The front row and the back row does not actually exists.
    myLines.forEach(currentItem => {
        let numbers2 = [0, 1, 2, 3, 4, 5, 6, 7];
        let myRows = [];
        let myColumns = [];
        for (let i = 0; i < currentItem.length; i++) {
            if (i < currentItem.length - 3) {
                myRows.push(currentItem.charAt(i));
            }
            else {
                myColumns.push(currentItem.charAt(i));
            }
        }
        let x = recursiveSearch(0, myRows, numbers);
        let y = recursiveSearch(0, myColumns, numbers2);
        result = x * 8 + y;
        if (x > 0 && x < 127 && result > 5 && result < 1016)
            resultValues.push(result);
    });
    result = 0;
    let lastItem = 0;
    resultValues.sort((a, b) => a - b);
    let wflag = true;
    let i = 21;
    while (i < 997 && wflag) {
        let j = i - 21;
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
            let nextNumbers = [];
            let newSize = numbers.length / 2;
            for (let i = 0; i < newSize; i++) {
                nextNumbers.push(numbers[i]);
            }
            ;
            return recursiveSearch(index, data, nextNumbers);
            break;
        }
        case 'B': {
            index++;
            let nextNumbers = [];
            let newSize = numbers.length / 2;
            for (let i = newSize; i < numbers.length; i++) {
                nextNumbers.push(numbers[i]);
            }
            ;
            return recursiveSearch(index, data, nextNumbers);
            break;
        }
        case 'L': {
            index++;
            let nextNumbers = [];
            let newSize = numbers.length / 2;
            for (let i = 0; i < newSize; i++) {
                nextNumbers.push(numbers[i]);
            }
            ;
            return recursiveSearch(index, data, nextNumbers);
            break;
        }
        case 'R': {
            index++;
            let nextNumbers = [];
            let newSize = numbers.length / 2;
            for (let i = newSize; i < numbers.length; i++) {
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
const { performance } = require('perf_hooks');
let t0 = performance.now();
console.log(puzzleDay5b());
let t1 = performance.now();
console.log('The time was: ' + (t1 - t0));
