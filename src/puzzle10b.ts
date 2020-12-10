function puzzle10b(input:number[]):number{
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
                currentJolt = input[i];
            };
            if ((input[i] - currentJolt) == 2) {
                diffsOf2++;
                adaptersSelected.push(input[i]);
                currentJolt = input[i];
            };
            if ((input[i] - currentJolt) == 3) {
                diffsOf3++;
                adaptersSelected.push(input[i]);
                currentJolt = input[i];
            };
        }
    };
    adaptersSelected.push(0);
    adaptersSelected.sort( (a,b) => a - b);
    adaptersSelected.push(adaptersSelected[adaptersSelected.length-1] + 3);
    for (let i = 1; i < adaptersSelected.length-1; i++){
        let ableToRemove = false;
        if (adaptersSelected[i+1] - adaptersSelected[i-1] < 4) ableToRemove = true;
    };
    
    diffsOf3++;
    let contiguos:number[] = [1];
    let contiguosIndex:number = 0;
    console.log(adaptersSelected);
    let resolvea:number = 1;
    for (let i = 0; i < adaptersSelected.length - 1; i++){
        let currentVal = adaptersSelected[i];
        let diff = adaptersSelected[i+1] - currentVal;
        if (diff == 1) contiguos[contiguosIndex]++;
        if (diff > 1) {
            contiguosIndex++;
            contiguos.push(1);
        };    
    };
    console.log(contiguos);
    for (let i = 0; i < contiguosIndex+1; i++){
        if (contiguos[i] > 2){
            if (contiguos[i] == 3) resolvea = resolvea * 2;
            if (contiguos[i] == 4) resolvea = resolvea * 4;
            if (contiguos[i] == 5) resolvea = resolvea * 7;       
        };
    }
    return resolvea;
};
function loadNumberArrayFromInput(fileName:string):number[]{
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/'+fileName+'.txt').toString().split("\r\n");
    let aux:number[] = [];
    myLines.forEach(currentItem => {
        aux.push(parseInt(currentItem));
    });
    return aux;
};
const inputDay10UnsortedInString:number[] = loadNumberArrayFromInput('inputDay10'); 
inputDay10UnsortedInString.sort((a,b) => a - b );
console.log(puzzle10b(inputDay10UnsortedInString));