function puzzleDay7a() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay7.txt').toString().split("\r\n");
    let myBags = new Map();
    myLines.forEach(currentItem => {
        let firstSplit = currentItem.split(' contain ');
        let bagName = firstSplit[0].replace(' bags', ' bag');
        let bagContentsPreSplit = firstSplit[1];
        let bagContentsPre = bagContentsPreSplit.split(', ');
        let bagContents = [];
        for (let i = 0; i < bagContentsPre.length; i++) {
            let currentSubBag = bagContentsPre[i];
            currentSubBag = currentSubBag.replace(/\d+/g, '');
            currentSubBag = currentSubBag.replace('.', '');
            currentSubBag = currentSubBag.replace(' bags', ' bag');
            currentSubBag = currentSubBag.trim();
            bagContents.push(currentSubBag);
        }
        ;
        myBags.set(bagName, bagContents);
    });
    let result = 0;
    function searchMapitaForBag(itemToSearch, values) {
        if ((values.length == 1 && values[0] == itemToSearch) || (values.includes(itemToSearch))) {
            return true;
        }
        else {
            let flag = false;
            values.forEach(currentItem => {
                if (myBags.has(currentItem)) {
                    flag = flag || searchMapitaForBag(itemToSearch, myBags.get(currentItem));
                }
                else {
                    flag = flag || false;
                }
            });
            return flag;
        }
    }
    ;
    myBags.forEach(function (value, key) {
        let flag = searchMapitaForBag('shiny gold bag', value);
        if (flag == true)
            result++;
    });
    console.log(myBags);
    console.log(result);
}
puzzleDay7a();
