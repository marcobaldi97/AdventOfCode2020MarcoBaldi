import { close } from "fs";

function puzzleDay13a(input:string[]){
    let earliestTimestamp:number = parseInt(input[0]);
    let preNumbs = input[1];
    preNumbs = preNumbs.replace(/x,/g,'');
    let aux:string[] = preNumbs.split(',');
    let generatorNumbers:number[] = []; 
    aux.forEach(currentItem => {
        generatorNumbers.push(parseInt(currentItem));
    });
    let departures:number[] = [];
    generatorNumbers.forEach(currentGN => {
        let currentGenerated = currentGN;
        while (currentGenerated<(earliestTimestamp+currentGN)){
            currentGenerated = currentGenerated + currentGN;
            if(currentGenerated>earliestTimestamp) departures.push(currentGenerated);
        };
    });
    departures.sort((a,b) => a - b);
    let diff = 1000;
    let closestTime = 0;
    console.log(departures);
    departures.forEach(currentDeparture=> {
        let analDiff:number = 0;
        if (currentDeparture>earliestTimestamp){
            analDiff = currentDeparture - earliestTimestamp;
        };
        if (analDiff<diff){
            diff = analDiff;
            closestTime = currentDeparture;
        }
    });
    let ogGenerator = 0;
    generatorNumbers.forEach(currentGenerator => {
        if ((closestTime % currentGenerator) == 0) ogGenerator = currentGenerator;
    });
    console.log(diff+' <- Diff ClosestTime-> '+closestTime+' generator->'+ogGenerator);
    return diff * ogGenerator;
};
function test13a(){
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/inputDay13.txt').toString().split("\r\n");
    console.log('----------------------------------START----------------------------------');
    console.log(puzzleDay13a(myLines));
};
test13a();
