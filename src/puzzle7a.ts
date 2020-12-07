function puzzleDay7a(){
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/inputDay7.txt').toString().split("\r\n");
    let myBags = new Map();
    myLines.forEach(currentItem => {
        let firstSplit:string[] = currentItem.split(' contain ');
        let bagName:string = firstSplit[0].replace(' bags',' bag');
        let bagContentsPreSplit:string = firstSplit[1];
        let bagContentsPre:string[] = bagContentsPreSplit.split(', ');
        let bagContents:string[] = [];
        for (let i = 0; i< bagContentsPre.length;i++){
            let currentSubBag:string = bagContentsPre[i];
            currentSubBag = currentSubBag.replace(/\d+/g, '');
            currentSubBag = currentSubBag.replace('.', '');
            currentSubBag = currentSubBag.replace(' bags', ' bag');
            currentSubBag = currentSubBag.trim();
            bagContents.push(currentSubBag);
        };
        myBags.set(bagName,bagContents);
    });
    let result = 0;
    function searchMapitaForBag(itemToSearch:string, values:string[]){
        if((values.length == 1 && values[0] == itemToSearch) || (values.includes(itemToSearch))){
            return true;
        } else {
            let flag:boolean = false;
            values.forEach(currentItem => {
                if (myBags.has(currentItem)){
                    flag = flag || searchMapitaForBag(itemToSearch, myBags.get(currentItem));
                } else {
                    flag = flag || false;
                }
            });
            return flag;
        }  
    };
    myBags.forEach(function(value, key) {
        let flag:boolean = searchMapitaForBag('shiny gold bag',value);
        if (flag == true) result++;
    });
    console.log(myBags);
    
    console.log(result);
}
puzzleDay7a();
    