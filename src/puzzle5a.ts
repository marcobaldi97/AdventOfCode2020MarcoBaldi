function puzzleDay5a(){
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/inputDay5.txt').toString().split("\r\n");
    let result:number = 0;
    let resultValues:number[] = [];
    let numbers:number[] = [];
    for (let i = 0;i<128;i++){
        numbers.push(i);
    }
    myLines.forEach(currentItem => {
        let numbers2:number[] = [0,1,2,3,4,5,6,7];
        let myRows:string[] = [];
        let myColumns:string[] = [];
        for (let i = 0; i<currentItem.length;i++){
            if (i<currentItem.length - 3){
                myRows.push(currentItem.charAt(i));
            }else{
                myColumns.push(currentItem.charAt(i));
            }
        }
        let x = recursiveSearch(0, myRows, numbers);
        let y = recursiveSearch(0, myColumns, numbers2);
        result = x * 8 + y;
        resultValues.push(result);
    });
    result = resultValues[0];
    resultValues.forEach(currentItem => {
        if (currentItem > result) result = currentItem;
    });
    return result;
}
function recursiveSearch(index:number, data:string[], numbers:number[]): number{
    if (numbers.length == 1) return numbers[0];
    switch(data[index]){
        case 'F':{
            index++;
            let nextNumbers:number[] = [];
            let newSize:number = numbers.length / 2;
            for(let i = 0; i < newSize;i++ ){
                nextNumbers.push(numbers[i]);
            };
            return recursiveSearch(index,data,nextNumbers);
            break;}
        case 'B':{
            index++;
            let nextNumbers:number[] = [];
            let newSize:number = numbers.length / 2;
            for(let i = newSize; i < numbers.length;i++ ){
                nextNumbers.push(numbers[i]);
            };
            return recursiveSearch(index,data,nextNumbers);
            break;}
        case 'L':{
            index++;
            let nextNumbers:number[] = [];
            let newSize:number = numbers.length / 2;
            for(let i = 0; i < newSize;i++ ){
                nextNumbers.push(numbers[i]);
            };
            return recursiveSearch(index,data,nextNumbers);
            break;}
        case 'R':{
            index++;
            let nextNumbers:number[] = [];
            let newSize:number = numbers.length / 2;
            for(let i = newSize; i < numbers.length;i++ ){
                nextNumbers.push(numbers[i]);
            };
            return recursiveSearch(index,data,nextNumbers);
            break;}
    }
    return 0;
}
console.log('-------------Begin------------------------------Begin------------------');
const { performance } = require('perf_hooks');
let t0:number = performance.now();
console.log(puzzleDay5a());
let t1:number = performance.now();
console.log('The time was: '+ (t1-t0));
