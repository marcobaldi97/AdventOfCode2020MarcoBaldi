import { throws } from "assert";

function puzzleDay14a(input:string[]){
    class MemoryAllocator {
        private location:number[] = [];
        constructor() {};
        public allocateMem(bitMask:string, input:string){
            let aux = input.split(' = ');
            let loc:number = parseInt(aux[0].split('[')[1].split(']')[0]);
            let val:number = parseInt(aux[1]);
            val = applyBitMask(bitMask, val);
            while (this.location.length < loc + 1){
                this.location.push(0);
            };
            this.location[loc] = val;
        };
        public additiveOfAllValuesInMemory(){
            let r = 0;
            this.location.forEach(location => {
                r = r + location;
            });
            return r;
        };
    }; //MemoryAllocator
    function applyBitMask(bmask:string, val:number){
        let binaryRep:string = '';
        let aux = val;
        while (aux > 1) {
            let m = aux % 2;
            binaryRep = m + binaryRep;
            aux = Math.trunc(aux / 2);
        };
        if (val != 0) binaryRep = '1' + binaryRep;
        while (binaryRep.length < 36) {
            binaryRep = '0' + binaryRep;
        };
        let appliedMask:string[] = [];
        for (let i = 0; i < bmask.length; i++){
            if (bmask.charAt(i) != 'X'){
                appliedMask.push(bmask.charAt(i));
            } else appliedMask.push(binaryRep.charAt(i));
        };
        let newDecimalValue:number = 0;
        appliedMask = appliedMask.reverse();
        for (let i = 0; i < appliedMask.length; i++){
            if (appliedMask[i] == '1') {
                newDecimalValue = newDecimalValue + (2 ** i);
            };
        };
        return newDecimalValue;
    };
    class InstructionBlock {
        private mask:string;
        private instructions:string[] = [];
        constructor(rawInput:string[]){
            this.mask = rawInput[0];
            for (let j = 1; j < rawInput.length; j++) {
                this.instructions.push(rawInput[j]);
            };
        };
        public getMask() {return this.mask};
        public getInstructions() {return this.instructions};
    }; // InstructionBlock
    let mA:MemoryAllocator = new MemoryAllocator();
    let instructionBlocks:InstructionBlock[] = [];
    for (let inp of input){
        if (inp != '') {
            let aux = inp.split('\r\n');
            let ib = new InstructionBlock(aux);
            instructionBlocks.push(ib);    
        }
    };
    instructionBlocks.forEach(insBlock => {
        let bitmask = insBlock.getMask();
        let instructions = insBlock.getInstructions();
        instructions.forEach(currentIns => {
            if (currentIns != ''){
                mA.allocateMem(bitmask,currentIns);
            } console.log(currentIns);
        });   
    });
    return mA.additiveOfAllValuesInMemory();
};
function test14a(){
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/inputDay14.txt').toString().split("mask = ");
    console.log('----------------------------------START----------------------------------');
    console.log(puzzleDay14a(myLines));
};
test14a();
