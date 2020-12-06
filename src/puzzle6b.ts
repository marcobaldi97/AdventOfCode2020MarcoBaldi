function puzzleDay6b():number{
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
        if(allLanes == '') {
            allLanes = allLanes + myLines[i];
        }else{
            allLanes = allLanes + ' ' + myLines[i];
        };
    }
    myRegistryLanes = allLanes.split('\r\n');
    let result = 0;
    myRegistryLanes.forEach(currentItem => {
        let lettersYes:string[] = [];
        currentItem = currentItem.trim();
        let myLinesGroups:string[] = currentItem.split(' ');
        let counter = 0;
        myLinesGroups.forEach(currentItem => {
            let currentYes:string[] = [];
            for (let i = 0; i < currentItem.length; i++){
                if (counter == 0){
                    lettersYes.push(currentItem.charAt(i));                    
                    currentYes.push(currentItem.charAt(i));
                }else{
                    currentYes.push(currentItem.charAt(i));
                };
            };
            lettersYes = lettersYes.filter(value => currentYes.includes(value));
            counter++;
        });
        result = result + lettersYes.length;
    });//reviso grupos
    return result;
}
console.log('-------------Begin------------------------------Begin------------------');
console.log(puzzleDay6b());
