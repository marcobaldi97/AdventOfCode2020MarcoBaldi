function puzzleDay7b(){
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/inputDay7.txt').toString().split("\r\n");
    let myBags = new Map();
    let myBagsQuantity = new Map();
    myLines.forEach(currentItem => {
        let firstSplit:string[] = currentItem.split(' contain ');
        let bagName:string = firstSplit[0].replace(' bags',' bag');
        let bagContentsPreSplit:string = firstSplit[1];
        let bagContentsPre:string[] = bagContentsPreSplit.split(', ');
        let bagContents:string[] = [];
        let numberOfBags:number[] = [];
        for (let i = 0; i< bagContentsPre.length;i++){
            let currentSubBag:string = bagContentsPre[i];
            currentSubBag = currentSubBag.trim();
            let aux = currentSubBag.split(' ');
            numberOfBags.push(parseInt(aux[0]));
            currentSubBag = currentSubBag.replace(/\d+/g, '');
            currentSubBag = currentSubBag.replace('.', '');
            currentSubBag = currentSubBag.replace(' bags', ' bag');
            currentSubBag = currentSubBag.trim();
            bagContents.push(currentSubBag);
            if (currentSubBag == 'no other bag'){
                let a = numberOfBags.pop();
                numberOfBags.push(-1);
            }
        };
        myBags.set(bagName, bagContents);
        myBagsQuantity.set(bagName, numberOfBags);
    });
    function countBagsInside(bagToStart:string){
        if (myBags.get(bagToStart) == 'no other bag'){
            return 1;
        } else {
            let allMyBags:string[] = myBags.get(bagToStart);
            let allMyBagsQuantity:number[] = myBagsQuantity.get(bagToStart);
            let res = 1;
            for (let i = 0; i < allMyBags.length;i++){
                let currentBag:string = allMyBags[i];
                let currentBagQuantity:number = allMyBagsQuantity[i];
                console.log('The current bag to sum is : '+currentBag+ ' and the quantity is : '+currentBagQuantity);
                let a = currentBagQuantity * countBagsInside(currentBag);
                res = res + a;
            };
            return res;
        };
    };
    console.log('-----------------------------Begin---------------------------------------------');
    console.log(countBagsInside('shiny gold bag')-1);
}
puzzleDay7b();
    