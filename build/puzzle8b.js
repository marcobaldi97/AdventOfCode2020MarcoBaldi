function puzzleDay8b() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay8.txt').toString().split("\r\n");
    class SingleInstruction {
        constructor(ins, par) {
            this.instruction = ins;
            this.parameter = par;
        }
        setInstruction(nins) {
            this.instruction = nins;
        }
    }
    ;
    let myInstructions = [];
    myLines.forEach(currentItem => {
        currentItem = currentItem.trim();
        let splittedIns = currentItem.split(' ');
        let instructionToAdd = new SingleInstruction(splittedIns[0], parseInt(splittedIns[1]));
        myInstructions.push(instructionToAdd);
    }); //The saving is correct.
    function getAllFalseArray(root) {
        let aux = [];
        root.forEach(currentItem => {
            aux.push(false);
        });
        return aux;
    }
    let lineChecker = [];
    myInstructions.forEach(currentItem => {
        lineChecker.push(false);
    }); //initialize lineChecker with false for each of my instructions
    function simulateCode(index, acum, miIns, lineC, prevIndex) {
        if (index < lineC.length) {
            if (lineC[index]) {
                let response = [];
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
            let response = [];
            response.push(acum);
            response.push(index);
            return response;
        }
    }
    ;
    let instructionsToChange = [];
    let counter = 0;
    myInstructions.forEach(currentItem => {
        if (currentItem.instruction == 'jmp' || currentItem.instruction == 'nop')
            instructionsToChange.push(counter);
        counter++;
    }); //load the instructions to change.
    let lastIndex = 0;
    let instructionToChangeIndex = 0;
    let resultArray = [];
    while (lastIndex < myInstructions.length && instructionToChangeIndex < instructionsToChange.length) {
        console.log('Testing changing the line :' + instructionsToChange[instructionToChangeIndex]);
        let auxFalseArray = getAllFalseArray(lineChecker);
        let mCI = [];
        let i = 0;
        myInstructions.forEach(currentItem => {
            if (i == instructionsToChange[instructionToChangeIndex]) {
                switch (currentItem.instruction) {
                    case 'nop':
                        if (currentItem.parameter != 0) {
                            let aux = new SingleInstruction('jmp', currentItem.parameter);
                            mCI.push(aux);
                        }
                        else {
                            mCI.push(currentItem);
                        }
                        break;
                    case 'jmp':
                        let aux = new SingleInstruction('nop', currentItem.parameter);
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
    }
    ;
    console.log('The search stopped at : ' + resultArray[1]);
    return resultArray[0];
}
console.log('-------------------------------------Begin--------------------------------------------------');
console.log('The acumulator ends in: ' + puzzleDay8b());
