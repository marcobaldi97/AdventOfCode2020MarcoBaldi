function puzzleDay7a() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay7.txt').toString().split("\r\n");
    var myBags = new Map();
    myLines.forEach(function (currentItem) {
        var firstSplit = currentItem.split(' contain ');
        var bagName = firstSplit[0].replace(' bags', ' bag');
        var bagContentsPreSplit = firstSplit[1];
        var bagContentsPre = bagContentsPreSplit.split(', ');
        var bagContents = [];
        for (var i = 0; i < bagContentsPre.length; i++) {
            var currentSubBag = bagContentsPre[i];
            currentSubBag = currentSubBag.replace(/\d+/g, '');
            currentSubBag = currentSubBag.replace('.', '');
            currentSubBag = currentSubBag.replace(' bags', ' bag');
            currentSubBag = currentSubBag.trim();
            bagContents.push(currentSubBag);
        }
        ;
        myBags.set(bagName, bagContents);
    });
    var result = 0;
    function searchMapitaForBag(itemToSearch, values) {
        if ((values.length == 1 && values[0] == itemToSearch) || (values.includes(itemToSearch))) {
            return true;
        }
        else {
            var flag_1 = false;
            values.forEach(function (currentItem) {
                if (myBags.has(currentItem)) {
                    flag_1 = flag_1 || searchMapitaForBag(itemToSearch, myBags.get(currentItem));
                }
                else {
                    flag_1 = flag_1 || false;
                }
            });
            return flag_1;
        }
    }
    ;
    myBags.forEach(function (value, key) {
        var flag = searchMapitaForBag('shiny gold bag', value);
        if (flag == true)
            result++;
    });
    console.log(myBags);
    console.log(result);
}
puzzleDay7a();
