function puzzle10a(input:number[]):number{
    let diffsOf3:number = 0;
    let diffsOf2:number = 0;
    let diffsOf1:number = 0;
    let adaptersSelected:number[] = [];
    let possibleAdaptersToRemove:number[] = []
    let currentJolt = 0;
    for (let i = 0; i < input.length; i++){
        if (input[i] - currentJolt < 4){
            if ((input[i] - currentJolt) == 1) {
                diffsOf1++;
                adaptersSelected.push(input[i]);
                possibleAdaptersToRemove.push(input[i]);
                currentJolt = input[i];
            };
            if ((input[i] - currentJolt) == 2) {
                diffsOf2++;
                adaptersSelected.push(input[i]);
                possibleAdaptersToRemove.push(input[i]);
                currentJolt = input[i];
            };
            if ((input[i] - currentJolt) == 3) {
                diffsOf3++;
                adaptersSelected.push(input[i]);
                currentJolt = input[i];
            };
        }
    };
    diffsOf3++; //The default adapter
    console.log(adaptersSelected);
    console.log(possibleAdaptersToRemove);
    //console.log('The differences of 3 are: '+diffsOf3+' and the differences of 1 are: '+diffsOf1);
    return diffsOf1*diffsOf3;
};
function loadNumberArrayFromInput(fileName:string):number[]{
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/'+fileName+'.txt').toString().split("\r\n");
    let aux:number[] = [];
    myLines.forEach(currentItem => {
        aux.push(parseInt(currentItem));
    });
    return aux;
}
const inputUnsortedInString:number[] = loadNumberArrayFromInput('inputDay10'); 
inputUnsortedInString.sort((a,b) => a - b );
console.log(puzzle10a(inputUnsortedInString));