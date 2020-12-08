function puzzleDay8b(){
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/inputDay8.txt').toString().split("\r\n");
    class SingleInstruction {
        instruction:string;
        parameter:number;
        constructor(ins:string, par:number){
            this.instruction = ins;
            this.parameter = par;
        }
        setInstruction(nins:string){
            this.instruction = nins;
        }
    };
    let myInstructions:SingleInstruction[] = [];
    myLines.forEach(currentItem => {
        currentItem = currentItem.trim();
        let splittedIns:string[] = currentItem.split(' ');
        let instructionToAdd = new SingleInstruction(splittedIns[0],parseInt(splittedIns[1]));
        myInstructions.push(instructionToAdd);
    });//The saving is correct.
    function getAllFalseArray(root:boolean[]):boolean[]{
        let aux:boolean[] = [];
        root.forEach(currentItem => {
            aux.push(false);
        });
        return aux;
    }
    let lineChecker:boolean[] = [];
    myInstructions.forEach(currentItem => {
        lineChecker.push(false);
    });//initialize lineChecker with false for each of my instructions
    function simulateCode(index:number, acum:number, miIns:SingleInstruction[], lineC:boolean[], prevIndex:number):number[]{
        if (index < lineC.length) {
            if (lineC[index]) {
                let response:number[] = [];
                response.push(acum);
                response.push(prevIndex)
                return response;
            } else {
                //code this shit;
                lineC[index] = true;
                switch (miIns[index].instruction) {
                    case 'nop':
                        return simulateCode(index+1,acum, miIns, lineC,index);
                    case 'acc':
                        return simulateCode(index+1,acum+miIns[index].parameter, miIns, lineC,index);
                    case 'jmp':
                        return simulateCode(index+miIns[index].parameter, acum, miIns, lineC,index);
                };
            };
        } else {
            let response:number[] = [];
            response.push(acum);
            response.push(index)
            return response;
        }
    };
    let instructionsToChange:number[] = [];
    let counter = 0;
    myInstructions.forEach(currentItem => {
        if (currentItem.instruction == 'jmp'  || currentItem.instruction == 'nop') instructionsToChange.push(counter);
        counter++;
    });//load the instructions to change.
    let lastIndex:number = 0;
    let instructionToChangeIndex:number = 0;
    let resultArray:number[] = [];
    while (lastIndex<myInstructions.length && instructionToChangeIndex<instructionsToChange.length){
        console.log('Testing changing the line :'+instructionsToChange[instructionToChangeIndex]);
        let auxFalseArray = getAllFalseArray(lineChecker);
        let mCI:SingleInstruction[] = [];
        let i = 0;
        myInstructions.forEach(currentItem => {
            if (i == instructionsToChange[instructionToChangeIndex]){
                switch (currentItem.instruction){
                    case 'nop':
                        if (currentItem.parameter != 0) {
                            let aux:SingleInstruction = new SingleInstruction('jmp', currentItem.parameter);
                            mCI.push(aux);
                        } else {
                            mCI.push(currentItem);
                        }
                        break;
                    case 'jmp':
                        let aux:SingleInstruction = new SingleInstruction('nop', currentItem.parameter);
                        mCI.push(aux);
                        break;
                }
            } else {
                mCI.push(currentItem);
            }
            i++;
        });
        resultArray = simulateCode(0,0, mCI, auxFalseArray,0);
        lastIndex = resultArray[1];
        instructionToChangeIndex++;
    };
    console.log('The search stopped at : '+resultArray[1]);
    return resultArray[0];
}
console.log('-------------------------------------Begin--------------------------------------------------');
console.log('The acumulator ends in: '+puzzleDay8b());