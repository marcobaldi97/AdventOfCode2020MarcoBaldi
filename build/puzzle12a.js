"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay12a(input) {
    class IndividualInstruction {
        constructor(crude) {
            this.ins = crude.charAt(0);
            let auxVal = '';
            for (let i = 1; i < crude.length; i++) {
                auxVal = auxVal + crude.charAt(i);
            }
            ;
            this.val = parseInt(auxVal);
        }
        ;
        getIns() { return this.ins; }
        ;
        getVal() { return this.val; }
        ;
    }
    ; //IndividualInstruction end.
    class ShipPosition {
        constructor(x, y, dir) {
            this.x = x;
            this.y = y;
            this.dir = dir;
        }
        ;
        getX() { return this.x; }
        ;
        getY() { return this.y; }
        ;
        getDir() { return this.dir; }
        ;
        addX(p) { this.x = this.x + p; }
        ;
        addY(p) { this.y = this.y + p; }
        ;
        addDir(p) {
            this.dir = this.dir + p;
            if (this.dir < 0) {
                this.dir = 360 + this.dir;
            }
            ;
            if (this.dir > 360) {
                this.dir = this.dir - 360;
            }
            ;
        }
        ;
    }
    ; //ShipPosition
    function absoluteOf(p) {
        if (p < 0)
            return (-p);
        return p;
    }
    ;
    function degrees_to_radians(degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    }
    ;
    console.log(absoluteOf(-3));
    let mySetOfInstructions = [];
    input.forEach(currentInst => {
        let myIns = new IndividualInstruction(currentInst);
        mySetOfInstructions.push(myIns);
    });
    let myShip = new ShipPosition(0, 0, 0);
    mySetOfInstructions.forEach(currentInst => {
        let ins = currentInst.getIns();
        let val = currentInst.getVal();
        switch (ins) {
            case 'F':
                let degrees = degrees_to_radians(myShip.getDir());
                let additiveX = Math.round((val * Math.cos(degrees)));
                let additivieY = Math.round((val * Math.sin(degrees)));
                myShip.addX(additiveX);
                myShip.addY(additivieY);
                break;
            case 'L':
                myShip.addDir(val);
                break;
            case 'R':
                myShip.addDir(-val);
                break;
            case 'N':
                myShip.addY(val);
                break;
            case 'S':
                myShip.addY(-val);
                break;
            case 'E':
                myShip.addX(val);
                break;
            case 'W':
                myShip.addX(-val);
                break;
        }
        ; //switch
        console.log(myShip);
    });
    console.log(myShip);
    return Math.round(absoluteOf(myShip.getX()) + absoluteOf(myShip.getY()));
}
;
function testDay12a() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay12.txt').toString().split("\r\n");
    console.log('----------------------------------START----------------------------------');
    console.log(puzzleDay12a(myLines));
}
testDay12a();
