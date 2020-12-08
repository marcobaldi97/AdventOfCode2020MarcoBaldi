"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay8b() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay8.txt').toString().split("\r\n");
    var SingleInstruction = /** @class */ (function () {
        function SingleInstruction(ins, par) {
            this.instruction = ins;
            this.parameter = par;
        }
        SingleInstruction.prototype.setInstruction = function (nins) {
            this.instruction = nins;
        };
        return SingleInstruction;
    }());
    ;
    var myInstructions = [];
    myLines.forEach(function (currentItem) {
        currentItem = currentItem.trim();
        var splittedIns = currentItem.split(' ');
        var instructionToAdd = new SingleInstruction(splittedIns[0], parseInt(splittedIns[1]));
        myInstructions.push(instructionToAdd);
    }); //The saving is correct.
    function getAllFalseArray(root) {
        var aux = [];
        root.forEach(function (currentItem) {
            aux.push(false);
        });
        return aux;
    }
    var lineChecker = [];
    myInstructions.forEach(function (currentItem) {
        lineChecker.push(false);
    }); //initialize lineChecker with false for each of my instructions
    function simulateCode(index, acum, miIns, lineC, prevIndex) {
        if (index < lineC.length) {
            if (lineC[index]) {
                var response = [];
                response.push(acum);
                response.push(prevIndex);
                return response;
            }
            else {
                //code this shit;
                lineC[index] = true;
                switch (miIns[index].instruction) {
                    case 'nop':
                        return simulateCode(index + 1, acum, miIns, lineC, index);
                    case 'acc':
                        return simulateCode(index + 1, acum + miIns[index].parameter, miIns, lineC, index);
                    case 'jmp':
                        return simulateCode(index + miIns[index].parameter, acum, miIns, lineC, index);
                }
                ;
            }
            ;
        }
        else {
            var response = [];
            response.push(acum);
            response.push(index);
            return response;
        }
    }
    ;
    var instructionsToChange = [];
    var counter = 0;
    myInstructions.forEach(function (currentItem) {
        if (currentItem.instruction == 'jmp' || currentItem.instruction == 'nop')
            instructionsToChange.push(counter);
        counter++;
    }); //load the instructions to change.
    var lastIndex = 0;
    var instructionToChangeIndex = 0;
    var resultArray = [];
    var _loop_1 = function () {
        console.log('Testing changing the line :' + instructionsToChange[instructionToChangeIndex]);
        var auxFalseArray = getAllFalseArray(lineChecker);
        var mCI = [];
        var i = 0;
        myInstructions.forEach(function (currentItem) {
            if (i == instructionsToChange[instructionToChangeIndex]) {
                switch (currentItem.instruction) {
                    case 'nop':
                        if (currentItem.parameter != 0) {
                            var aux_1 = new SingleInstruction('jmp', currentItem.parameter);
                            mCI.push(aux_1);
                        }
                        else {
                            mCI.push(currentItem);
                        }
                        break;
                    case 'jmp':
                        var aux = new SingleInstruction('nop', currentItem.parameter);
                        mCI.push(aux);
                        break;
                }
            }
            else {
                mCI.push(currentItem);
            }
            i++;
        });
        resultArray = simulateCode(0, 0, mCI, auxFalseArray, 0);
        lastIndex = resultArray[1];
        instructionToChangeIndex++;
    };
    while (lastIndex < myInstructions.length && instructionToChangeIndex < instructionsToChange.length) {
        _loop_1();
    }
    ;
    console.log('The search stopped at : ' + resultArray[1]);
    return resultArray[0];
}
console.log('-------------------------------------Begin--------------------------------------------------');
console.log('The acumulator ends in: ' + puzzleDay8b());
/*function simulateCode(index:number, acum:number, jmpAhead:number):number{
    if (index >= myInstructions.length) {
        console.log(myInstructions);
        console.log('The final index is '+ index--);
        return acum;
    } else {
        switch (myInstructions[index].instruction) {
            case 'nop':
                return simulateCode(index+1,acum,jmpAhead);
            case 'acc':
                return simulateCode(index+1,acum+myInstructions[index].parameter,jmpAhead);
            case 'jmp':
                console.log(jmpAhead);
                if (jmpAhead + myInstructions[index].parameter <= 0){
                    myInstructions[index].setInstruction('nop');
                    console.log('hi');
                    return simulateCode(index, acum, jmpAhead);
                };
                return simulateCode(index+myInstructions[index].parameter, acum,jmpAhead+myInstructions[index].parameter);
        };
    };
};This aproach is misguided*/ 
