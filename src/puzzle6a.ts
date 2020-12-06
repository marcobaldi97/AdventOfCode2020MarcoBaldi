function puzzleDay6a():number{
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay6.txt').toString().split("\r\n");
    let myRegistryLanes:String[] = [];
    let allLanes:string = ' ';
    myRegistryLanes.push('');
    let j=0;
    for(let i = 0; i<myLines.length;i++){
        if(myLines[i].charAt(0)==''){
            allLanes= allLanes +'\r\n';
        };
        allLanes= allLanes + ' ' + myLines[i];
    }
    myRegistryLanes = allLanes.split('\r\n');
    let result = 0;
    myRegistryLanes.forEach(currentItem => {
        let lettersYes:string[] = [];
        for(let i = 0; i < currentItem.length;i++){
            console.log(currentItem[i]);       
            if (!lettersYes.includes(currentItem[i]) && currentItem[i] != ' ' && currentItem[i] != '') lettersYes.push(currentItem[i]);
        }
        result = result + lettersYes.length;
    });
    return result;
}
console.log('-------------Begin------------------------------Begin------------------');
console.log(puzzleDay6a());
