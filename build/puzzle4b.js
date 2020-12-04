"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay4b() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay4.txt').toString().split("\r\n");
    var myPassportsLanes = [];
    var allLanes = ' ';
    myPassportsLanes.push('');
    var j = 0;
    //for(let i = 0; i<11;i++){
    for (var i = 0; i < myLines.length; i++) {
        if (myLines[i].charAt(0) == '') {
            allLanes = allLanes + '\r\n';
        }
        ;
        allLanes = allLanes + ' ' + myLines[i];
    }
    ;
    myPassportsLanes = allLanes.split('\r\n');
    var correctPassports = 0;
    var counter = 0;
    myPassportsLanes.forEach(function (currentItem) {
        console.log('Esta es la iteracion numero: ' + counter);
        counter++;
        var passPortsElements = 0;
        var cidIsHere = false;
        var thisIsValid = true;
        var separateElementsBySpace = currentItem.split(' ');
        var nothingCorrection = 2;
        passPortsElements = separateElementsBySpace.length;
        separateElementsBySpace.forEach(function (currentItem) {
            var separateElementsByDoubleStops = currentItem.split(':');
            switch (separateElementsByDoubleStops[0]) {
                case 'cid':
                    cidIsHere = true;
                    break;
                case 'byr':
                    var birthdayYear = parseInt(separateElementsByDoubleStops[1]);
                    if (!(1920 <= birthdayYear && birthdayYear <= 2002))
                        thisIsValid = false;
                    break;
                case 'iyr':
                    var issueYear = parseInt(separateElementsByDoubleStops[1]);
                    if (!(2010 <= issueYear && issueYear <= 2020))
                        thisIsValid = false;
                    break;
                case 'eyr':
                    var expirationYear = parseInt(separateElementsByDoubleStops[1]);
                    if (!(2020 <= expirationYear && expirationYear <= 2030))
                        thisIsValid = false;
                    break;
                case 'hgt':
                    var splittedHeight = splitHeight(separateElementsByDoubleStops[1]);
                    var height = parseInt(splittedHeight[0]);
                    if ((splittedHeight[1] == 'cm') && !(150 <= height && height <= 193))
                        thisIsValid = false;
                    if ((splittedHeight[1] == 'in') && !(59 <= height && height <= 76))
                        thisIsValid = false;
                    if (!(splittedHeight[1] == 'cm' || splittedHeight[1] == 'in'))
                        thisIsValid = false;
                    break;
                case 'hcl':
                    var hairColor = separateElementsByDoubleStops[1];
                    if (!(verifyHairColor(hairColor)))
                        thisIsValid = false;
                    console.log('Inside hcl :' + thisIsValid);
                    ;
                    break;
                case 'ecl':
                    var eyeColor = separateElementsByDoubleStops[1];
                    if (!(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(eyeColor)))
                        thisIsValid = false;
                    break;
                case 'pid':
                    var passportId = separateElementsByDoubleStops[1];
                    if (!(passportId.length == 9))
                        thisIsValid = false;
                    console.log(thisIsValid);
                    break;
                default:
            }
            ;
        });
        if (passPortsElements - nothingCorrection == 8 && thisIsValid == true) {
            correctPassports++;
            console.log('here!');
        }
        ;
        if ((passPortsElements - nothingCorrection == 7 && cidIsHere == false) && thisIsValid == true) {
            correctPassports++;
            console.log('Actually here!' + thisIsValid);
        }
        ;
    });
    return correctPassports;
}
;
function splitHeight(param) {
    var aux = [];
    var height = '';
    var medida = '';
    for (var i = 0; i < param.length; i++) {
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
        var aux = param.split('#');
        return aux[1];
    }
    ;
}
;
function verifyHairColor(param) {
    var newparam = splitHashtag(param);
    var allOk = true;
    if (newparam.length != 6)
        allOk = false;
    for (var i = 0; i < newparam.length; i++) {
        var letter = newparam.charAt(i);
        var condition = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(letter);
        if (!(condition))
            allOk = condition;
    }
    return allOk;
}
;
console.log('-------------Begin------------------------------Begin------------------');
console.log(puzzleDay4b());
