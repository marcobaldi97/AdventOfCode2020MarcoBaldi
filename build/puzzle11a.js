function puzzle11aMagic(myLines) {
    var myNewLines = [];
    console.log(myLines);
    var _loop_1 = function (i) {
        var individualItems = myLines[i].split('');
        var newLine = '';
        var _loop_2 = function (j) {
            var itemToEvaluate = individualItems[j];
            var arrayToSearch = [];
            arrayToSearch = [[i + 1, j + 1], [i + 1, j], [i, j + 1], [i - 1, j - 1], [i - 1, j], [i, j - 1], [i - 1, j + 1], [i + 1, j - 1]];
            var foundOccupied = false;
            var counterOccupied = 0;
            arrayToSearch.forEach(function (currentSearchItem) {
                if (0 <= currentSearchItem[0] && currentSearchItem[0] <= myLines.length - 1) {
                    if (0 <= currentSearchItem[1] && currentSearchItem[1] <= myLines[i].length - 1) {
                        var aux = myLines[currentSearchItem[0]].split('');
                        var iToEval = aux[currentSearchItem[1]];
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
        };
        for (var j = 0; j < myLines[i].length; j++) {
            _loop_2(j);
        }
        ;
        myNewLines.push(newLine);
    };
    for (var i = 0; i < myLines.length; i++) {
        _loop_1(i);
    }
    ;
    myLines = myNewLines;
    console.log('This is the result-------------------------------------------------------------------------');
    myLines.forEach(function (currentItem) {
        console.log(currentItem);
    });
    return myLines;
}
function puzzle11a() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay11.txt').toString().split("\r\n");
    var antCount = 1;
    var counter = 0;
    while (counter != antCount) {
        antCount = counter;
        counter = 0;
        myLines = puzzle11aMagic(myLines);
        myLines.forEach(function (currentItem) {
            var aux = currentItem.split('');
            aux.forEach(function (currentItemAux) {
                if (currentItemAux == '#')
                    counter++;
            });
        });
    }
    return counter;
}
console.log(puzzle11a());
