function puzzleDay7b() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay7.txt').toString().split("\r\n");
    let myBags = new Map();
    let myBagsQuantity = new Map();
    myLines.forEach(currentItem => {
        let firstSplit = currentItem.split(' contain ');
        let bagName = firstSplit[0].replace(' bags', ' bag');
        let bagContentsPreSplit = firstSplit[1];
        let bagContentsPre = bagContentsPreSplit.split(', ');
        let bagContents = [];
        let numberOfBags = [];
        for (let i = 0; i < bagContentsPre.length; i++) {
            let currentSubBag = bagContentsPre[i];
            currentSubBag = currentSubBag.trim();
            let aux = currentSubBag.split(' ');
            numberOfBags.push(parseInt(aux[0]));
            currentSubBag = currentSubBag.replace(/\d+/g, '');
            currentSubBag = currentSubBag.replace('.', '');
            currentSubBag = currentSubBag.replace(' bags', ' bag');
            currentSubBag = currentSubBag.trim();
            bagContents.push(currentSubBag);
            if (currentSubBag == 'no other bag') {
                let a = numberOfBags.pop();
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
            let allMyBags = myBags.get(bagToStart);
            let allMyBagsQuantity = myBagsQuantity.get(bagToStart);
            let res = 1;
            for (let i = 0; i < allMyBags.length; i++) {
                let currentBag = allMyBags[i];
                let currentBagQuantity = allMyBagsQuantity[i];
                console.log('The current bag to sum is : ' + currentBag + ' and the quantity is : ' + currentBagQuantity);
                let a = currentBagQuantity * countBagsInside(currentBag);
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
