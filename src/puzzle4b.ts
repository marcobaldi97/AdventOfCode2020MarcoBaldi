"use strict";

import { allowedNodeEnvironmentFlags } from "process";

Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay4b() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay4.txt').toString().split("\r\n");
    let myPassportsLanes:String[] = [];
    let allLanes:string = ' ';
    myPassportsLanes.push('');
    let j=0;
    //for(let i = 0; i<11;i++){
    for(let i = 0; i<myLines.length;i++){
        if(myLines[i].charAt(0)==''){
            allLanes= allLanes +'\r\n';
        };
        allLanes= allLanes + ' ' + myLines[i];
    };
    myPassportsLanes = allLanes.split('\r\n');
    let correctPassports=0;
    let counter = 0;
    myPassportsLanes.forEach(currentItem => {
        console.log('Esta es la iteracion numero: '+counter);
        counter++;
        let passPortsElements = 0;
        let cidIsHere:boolean = false;
        let thisIsValid:boolean = true;
        let separateElementsBySpace:string[] = currentItem.split(' ');
        let nothingCorrection = 2;
        passPortsElements = separateElementsBySpace.length;
        separateElementsBySpace.forEach(currentItem => {
            let separateElementsByDoubleStops = currentItem.split(':');
            switch (separateElementsByDoubleStops[0]) {
                case 'cid':
                    cidIsHere = true;
                    break;
                case 'byr':
                    let birthdayYear:number = parseInt(separateElementsByDoubleStops[1]); 
                    if(!(1920<=birthdayYear && birthdayYear<=2002)) thisIsValid = false;
                    break;
                case 'iyr':
                    let issueYear:number = parseInt(separateElementsByDoubleStops[1]); 
                    if(!(2010<=issueYear && issueYear<=2020)) thisIsValid = false;
                    break;
                case 'eyr':
                    let expirationYear:number = parseInt(separateElementsByDoubleStops[1]); 
                    if(!(2020<=expirationYear && expirationYear<=2030)) thisIsValid = false;
                    break;
                case 'hgt':
                    let splittedHeight:string[] =  splitHeight(separateElementsByDoubleStops[1]);
                    let height:number = parseInt(splittedHeight[0]); 
                    if((splittedHeight[1] == 'cm')  && !(150<=height && height<=193)) thisIsValid = false;
                    if((splittedHeight[1] == 'in')  && !(59<=height && height<=76)) thisIsValid = false;
                    if(!(splittedHeight[1] == 'cm' || splittedHeight[1] == 'in')) thisIsValid = false;             
                    break;
                case 'hcl':
                    let hairColor:string = separateElementsByDoubleStops[1];
                    if(!(verifyHairColor(hairColor))) thisIsValid = false; 
                    break;
                case 'ecl':
                    let eyeColor:string =  separateElementsByDoubleStops[1];
                    if(!(['amb','blu','brn','gry','grn','hzl','oth'].includes(eyeColor))) thisIsValid = false;
                    break;
                case 'pid':
                    let passportId:string = separateElementsByDoubleStops[1];
                    if(!(passportId.length==9)) thisIsValid = false;
                    break;
                default:
            };
        });
        if(passPortsElements-nothingCorrection == 8 && thisIsValid==true) {
            correctPassports++
            console.log('here!');
        };
        if((passPortsElements-nothingCorrection == 7 && cidIsHere == false) && thisIsValid==true){
            correctPassports++;
            console.log('Actually here!'+thisIsValid);
        }; 
    });
    return correctPassports;
};

function splitHeight(param:string){
    let aux:string[] = [];
    let height:string = '';
    let medida:string = '';
    for(let i = 0; i < param.length;i++){
        if(param.charAt(i) == 'c' || param.charAt(i) == 'n' || param.charAt(i) == 'i' || param.charAt(i) == 'm'){
            medida = medida + param.charAt(i);
        } else {
            height = height + param.charAt(i);
        }
    }
    aux[0] = height;
    aux[1] = medida;
    return aux;
};

function splitHashtag(param:string){
    if(param.charAt(0) != '#') {
        return '#Z';
    }else{
        let aux:string[] = param.split('#');
        return aux[1];
    };
    
};

function verifyHairColor(param:string){
    let newparam:string = splitHashtag(param);
    let allOk:boolean = true;
    if(newparam.length!=6) allOk = false;
    for(let i = 0;i<newparam.length;i++){
        let letter:string = newparam.charAt(i);
        let condition = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(letter);
        if(!(condition)) allOk = condition;
    }
    return allOk;
};

console.log('-------------Begin------------------------------Begin------------------');
console.log(puzzleDay4b());


