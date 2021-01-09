function puzzle11aMagic(myLines) {
    let myNewLines = [];
    console.log(myLines);
    for (let i = 0; i < myLines.length; i++) {
        let individualItems = myLines[i].split('');
        let newLine = '';
        for (let j = 0; j < myLines[i].length; j++) {
            let itemToEvaluate = individualItems[j];
            let arrayToSearch = [];
            arrayToSearch = [[i + 1, j + 1], [i + 1, j], [i, j + 1], [i - 1, j - 1], [i - 1, j], [i, j - 1], [i - 1, j + 1], [i + 1, j - 1]];
            let foundOccupied = false;
            let counterOccupied = 0;
            arrayToSearch.forEach(currentSearchItem => {
                if (0 <= currentSearchItem[0] && currentSearchItem[0] <= myLines.length - 1) {
                    if (0 <= currentSearchItem[1] && currentSearchItem[1] <= myLines[i].length - 1) {
                        let aux = myLines[currentSearchItem[0]].split('');
                        let iToEval = aux[currentSearchItem[1]];
                        if (iToEval == '#') {
                            foundOccupied = true;
                            counterOccupied++;
                        }
                        ;
                    }
                    ;
                }
                ;
            }); //Search adjacents.
            switch (itemToEvaluate) {
                case '.':
                    break;
                case 'L':
                    if (foundOccupied == false) {
                        itemToEvaluate = '#';
                    }
                    break;
                case '#':
                    if (counterOccupied > 3)
                        itemToEvaluate = 'L';
                    break;
            }
            ;
            newLine = newLine.concat(itemToEvaluate);
        }
        ;
        myNewLines.push(newLine);
    }
    ;
    myLines = myNewLines;
    console.log('This is the result-------------------------------------------------------------------------');
    myLines.forEach(currentItem => {
        console.log(currentItem);
    });
    return myLines;
}
function puzzle11a() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay11.txt').toString().split("\r\n");
    let antCount = 1;
    let counter = 0;
    while (counter != antCount) {
        antCount = counter;
        counter = 0;
        myLines = puzzle11aMagic(myLines);
        myLines.forEach(currentItem => {
            let aux = currentItem.split('');
            aux.forEach(currentItemAux => {
                if (currentItemAux == '#')
                    counter++;
            });
        });
    }
    return counter;
}
console.log(puzzle11a());
