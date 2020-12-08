function puzzleDay8a() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay8.txt').toString().split("\r\n");
    var SingleInstruction = /** @class */ (function () {
        function SingleInstruction(ins, par) {
            this.instruction = ins;
            this.parameter = par;
        }
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
    var lineChecker = [];
    myInstructions.forEach(function (currentItem) {
        lineChecker.push(false);
    }); //initialize lineChecker with false for each of my instructions.
    function simulateCode(index, acum) {
        if (index < lineChecker.length) {
            if (lineChecker[index]) {
                console.log(index);
                return acum;
            }
            else {
                //code this shit;
                lineChecker[index] = true;
                switch (myInstructions[index].instruction) {
                    case 'nop':
                        return simulateCode(index + 1, acum);
                    case 'acc':
                        return simulateCode(index + 1, acum + myInstructions[index].parameter);
                    case 'jmp':
                        var nextIndex = index + myInstructions[index].parameter;
                        /*if (lineChecker[nextIndex]){
                            myInstructions[index].instruction = 'nop';
                            lineChecker[index] = false;
                            return simulateCode(index, acum);
                        }//si el siguiente es uno que ya fue visitado, es hora de cambiar el jmp a not*/
                        return simulateCode(index + myInstructions[index].parameter, acum);
                }
                ;
            }
            ;
        }
    }
    ;
    return simulateCode(0, 0);
}
console.log('The acumulator ends in: ' + puzzleDay8a());
