function puzzle11bMagic(myLines:string[]):string[]{
    let myNewLines:string [] = [];
    console.log(myLines);
    for (let i = 0; i < myLines.length; i++){
        let individualItems:string[] = myLines[i].split('');
        let newLine:string = '';
        for (let j = 0; j < myLines[i].length; j++){
            let itemToEvaluate:string = individualItems[j];
            let arrayToSearch:number[][] = [];
            arrayToSearch=[[i+1,j+1], [i+1,j], [i,j+1], [i-1,j-1], [i-1,j], [i,j-1], [i-1,j+1], [i+1,j-1]];
            let foundOccupied:boolean = false;
            let counterOccupied:number = 0;
            let k = 0;
            while ( k < arrayToSearch.length){
                let currentSearchItem = arrayToSearch[k];
                if (0 <= currentSearchItem[0] && currentSearchItem[0] <= myLines.length - 1) {
                    if (0 <= currentSearchItem[1] && currentSearchItem[1] <= myLines[i].length - 1){
                        let aux = myLines[currentSearchItem[0]].split('');
                        let iToEval = aux[currentSearchItem[1]];
                        if (iToEval == '#'){
                            foundOccupied = true;
                            counterOccupied++;
                        };
                        if (iToEval == '.'){
                            k--;
                            switch (k + 1){
                                case 0:
                                    arrayToSearch[0][0] = arrayToSearch[0][0] + 1;
                                    arrayToSearch[0][1] = arrayToSearch[0][1] + 1;
                                    break;
                                case 1:
                                    arrayToSearch[1][0] = arrayToSearch[1][0] + 1;
                                    arrayToSearch[1][1] = arrayToSearch[1][1];
                                    break;
                                case 2:
                                    arrayToSearch[2][0] = arrayToSearch[2][0];
                                    arrayToSearch[2][1] = arrayToSearch[2][1] + 1;
                                    break;
                                case 3:
                                    arrayToSearch[3][0] = arrayToSearch[3][0] - 1;
                                    arrayToSearch[3][1] = arrayToSearch[3][1] - 1;
                                    break;
                                case 4:
                                    arrayToSearch[4][0] = arrayToSearch[4][0] - 1;
                                    arrayToSearch[4][1] = arrayToSearch[4][1];
                                    break;
                                case 5:
                                    arrayToSearch[5][0] = arrayToSearch[5][0];
                                    arrayToSearch[5][1] = arrayToSearch[5][1] - 1;
                                    break;
                                case 6:
                                    arrayToSearch[6][0] = arrayToSearch[6][0] - 1;
                                    arrayToSearch[6][1] = arrayToSearch[6][1] + 1;
                                    break;
                                case 7:
                                    arrayToSearch[7][0] = arrayToSearch[7][0] + 1;
                                    arrayToSearch[7][1] = arrayToSearch[7][1] - 1;
                                    break;     
                            };
                        };
                    };
                };
                k++;
            };//Search adjacents.
            switch (itemToEvaluate){
                case '.':
                    break;
                case 'L':
                    if (foundOccupied == false){
                        itemToEvaluate = '#';
                    }
                    break;
                case '#':
                    if (counterOccupied > 4) itemToEvaluate = 'L'
                    break;    
            };
            newLine = newLine.concat(itemToEvaluate);
        };
        myNewLines.push(newLine);
    };
    myLines = myNewLines;
    console.log('This is the result-------------------------------------------------------------------------');
    myLines.forEach(currentItem => {
        console.log(currentItem);
        
    });
    return myLines;
};
function puzzle11b(){
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/inputDay11.txt').toString().split("\r\n");
    let antCount = 1;
    let counter = 0;
    while (counter != antCount){
        antCount = counter;
        counter = 0;
        myLines = puzzle11bMagic(myLines);
        myLines.forEach(currentItem => {
            let aux = currentItem.split('');
            aux.forEach(currentItemAux => {
            if(currentItemAux == '#') counter++;
            });
        });
        console.log('another!');
    }
    return counter;
}
console.log(puzzle11b());