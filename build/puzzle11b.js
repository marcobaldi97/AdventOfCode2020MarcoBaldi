function puzzle11bMagic(myLines) {
    var myNewLines = [];
    console.log(myLines);
    for (var i = 0; i < myLines.length; i++) {
        var individualItems = myLines[i].split('');
        var newLine = '';
        for (var j = 0; j < myLines[i].length; j++) {
            var itemToEvaluate = individualItems[j];
            var arrayToSearch = [];
            arrayToSearch = [[i + 1, j + 1], [i + 1, j], [i, j + 1], [i - 1, j - 1], [i - 1, j], [i, j - 1], [i - 1, j + 1], [i + 1, j - 1]];
            var foundOccupied = false;
            var counterOccupied = 0;
            var k = 0;
            while (k < arrayToSearch.length) {
                var currentSearchItem = arrayToSearch[k];
                if (0 <= currentSearchItem[0] && currentSearchItem[0] <= myLines.length - 1) {
                    if (0 <= currentSearchItem[1] && currentSearchItem[1] <= myLines[i].length - 1) {
                        var aux = myLines[currentSearchItem[0]].split('');
                        var iToEval = aux[currentSearchItem[1]];
                        if (iToEval == '#') {
                            foundOccupied = true;
                            counterOccupied++;
                        }
                        ;
                        if (iToEval == '.') {
                            k--;
                            switch (k + 1) {
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
                            }
                            ;
                        }
                        ;
                    }
                    ;
                }
                ;
                k++;
            }
            ; //Search adjacents.
            switch (itemToEvaluate) {
                case '.':
                    break;
                case 'L':
                    if (foundOccupied == false) {
                        itemToEvaluate = '#';
                    }
                    break;
                case '#':
                    if (counterOccupied > 4)
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
    myLines.forEach(function (currentItem) {
        console.log(currentItem);
    });
    return myLines;
}
function puzzle11b() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay11.txt').toString().split("\r\n");
    var antCount = 1;
    var counter = 0;
    while (counter != antCount) {
        antCount = counter;
        counter = 0;
        myLines = puzzle11bMagic(myLines);
        myLines.forEach(function (currentItem) {
            var aux = currentItem.split('');
            aux.forEach(function (currentItemAux) {
                if (currentItemAux == '#')
                    counter++;
            });
        });
        console.log('another!');
    }
    return counter;
}
console.log(puzzle11b());
