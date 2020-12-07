function puzzleDay7b() {
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay7.txt').toString().split("\r\n");
    var myBags = new Map();
    var myBagsQuantity = new Map();
    myLines.forEach(function (currentItem) {
        var firstSplit = currentItem.split(' contain ');
        var bagName = firstSplit[0].replace(' bags', ' bag');
        var bagContentsPreSplit = firstSplit[1];
        var bagContentsPre = bagContentsPreSplit.split(', ');
        var bagContents = [];
        var numberOfBags = [];
        for (var i = 0; i < bagContentsPre.length; i++) {
            var currentSubBag = bagContentsPre[i];
            currentSubBag = currentSubBag.trim();
            var aux = currentSubBag.split(' ');
            numberOfBags.push(parseInt(aux[0]));
            currentSubBag = currentSubBag.replace(/\d+/g, '');
            currentSubBag = currentSubBag.replace('.', '');
            currentSubBag = currentSubBag.replace(' bags', ' bag');
            currentSubBag = currentSubBag.trim();
            bagContents.push(currentSubBag);
            if (currentSubBag == 'no other bag') {
                var a = numberOfBags.pop();
                numberOfBags.push(-1);
            }
        }
        ;
        myBags.set(bagName, bagContents);
        myBagsQuantity.set(bagName, numberOfBags);
    });
    function countBagsInside(bagToStart) {
        if (myBags.get(bagToStart) == 'no other bag') {
            return 1;
        }
        else {
            var allMyBags = myBags.get(bagToStart);
            var allMyBagsQuantity = myBagsQuantity.get(bagToStart);
            var res = 1;
            for (var i = 0; i < allMyBags.length; i++) {
                var currentBag = allMyBags[i];
                var currentBagQuantity = allMyBagsQuantity[i];
                console.log('The current bag to sum is : ' + currentBag + ' and the quantity is : ' + currentBagQuantity);
                var a = currentBagQuantity * countBagsInside(currentBag);
                res = res + a;
            }
            ;
            return res;
        }
        ;
    }
    ;
    console.log('-----------------------------Begin---------------------------------------------');
    console.log(countBagsInside('shiny gold bag') - 1);
}
puzzleDay7b();
