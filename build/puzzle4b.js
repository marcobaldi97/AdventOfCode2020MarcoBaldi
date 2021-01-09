"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay4b() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay4.txt').toString().split("\r\n");
    let myPassportsLanes = [];
    let allLanes = ' ';
    myPassportsLanes.push('');
    for (let i = 0; i < myLines.length; i++) {
        if (myLines[i].charAt(0) == '') {
            allLanes = allLanes + '\r\n';
        }
        ;
        allLanes = allLanes + ' ' + myLines[i];
    }
    ;
    myPassportsLanes = allLanes.split('\r\n');
    let correctPassports = 0;
    let counter = 0;
    myPassportsLanes.forEach(currentItem => {
        counter++;
        let passPortsElements = 0;
        let cidIsHere = false;
        let thisIsValid = true;
        let separateElementsBySpace = currentItem.split(' ');
        let nothingCorrection = 2;
        passPortsElements = separateElementsBySpace.length;
        let index = 0;
        while (index < separateElementsBySpace.length && thisIsValid) {
            currentItem = separateElementsBySpace[index];
            let separateElementsByDoubleStops = currentItem.split(':');
            switch (separateElementsByDoubleStops[0]) {
                case 'cid':
                    cidIsHere = true;
                    break;
                case 'byr':
                    let birthdayYear = parseInt(separateElementsByDoubleStops[1]);
                    if (!(1920 <= birthdayYear && birthdayYear <= 2002))
                        thisIsValid = false;
                    break;
                case 'iyr':
                    let issueYear = parseInt(separateElementsByDoubleStops[1]);
                    if (!(2010 <= issueYear && issueYear <= 2020))
                        thisIsValid = false;
                    break;
                case 'eyr':
                    let expirationYear = parseInt(separateElementsByDoubleStops[1]);
                    if (!(2020 <= expirationYear && expirationYear <= 2030))
                        thisIsValid = false;
                    break;
                case 'hgt':
                    let splittedHeight = splitHeight(separateElementsByDoubleStops[1]);
                    let height = parseInt(splittedHeight[0]);
                    if ((splittedHeight[1] == 'cm') && !(150 <= height && height <= 193))
                        thisIsValid = false;
                    if ((splittedHeight[1] == 'in') && !(59 <= height && height <= 76))
                        thisIsValid = false;
                    if (!(splittedHeight[1] == 'cm' || splittedHeight[1] == 'in'))
                        thisIsValid = false;
                    break;
                case 'hcl':
                    let hairColor = separateElementsByDoubleStops[1];
                    if (!(verifyHairColor(hairColor)))
                        thisIsValid = false;
                    break;
                case 'ecl':
                    let eyeColor = separateElementsByDoubleStops[1];
                    if (!(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(eyeColor)))
                        thisIsValid = false;
                    break;
                case 'pid':
                    let passportId = separateElementsByDoubleStops[1];
                    if (!(passportId.length == 9))
                        thisIsValid = false;
                    break;
                default:
            }
            ;
            index++;
        }
        ;
        if (passPortsElements - nothingCorrection == 8 && thisIsValid == true) {
            correctPassports++;
        }
        ;
        if ((passPortsElements - nothingCorrection == 7 && cidIsHere == false) && thisIsValid == true) {
            correctPassports++;
        }
        ;
    });
    return correctPassports;
}
;
function splitHeight(param) {
    let aux = [];
    let height = '';
    let medida = '';
    for (let i = 0; i < param.length; i++) {
        if (param.charAt(i) == 'c' || param.charAt(i) == 'n' || param.charAt(i) == 'i' || param.charAt(i) == 'm') {
            medida = medida + param.charAt(i);
        }
        else {
            height = height + param.charAt(i);
        }
    }
    aux[0] = height;
    aux[1] = medida;
    return aux;
}
;
function splitHashtag(param) {
    if (param.charAt(0) != '#') {
        return '#Z';
    }
    else {
        let aux = param.split('#');
        return aux[1];
    }
    ;
}
;
function verifyHairColor(param) {
    let newparam = splitHashtag(param);
    let allOk = true;
    if (newparam.length != 6)
        allOk = false;
    for (let i = 0; i < newparam.length; i++) {
        let letter = newparam.charAt(i);
        let condition = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(letter);
        if (!(condition))
            allOk = condition;
    }
    return allOk;
}
;
console.log('-------------Begin------------------------------Begin------------------');
const { performance } = require('perf_hooks');
let t0 = performance.now();
console.log(puzzleDay4b());
let t1 = performance.now();
console.log('The time was: ' + (t1 - t0));
