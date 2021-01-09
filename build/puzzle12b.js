"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay12b(input) {
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
        setX(p) { this.x = p; }
        ;
        setY(p) { this.y = p; }
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
    let myWaypoint = new ShipPosition(10, 1, 0);
    mySetOfInstructions.forEach(currentInst => {
        let ins = currentInst.getIns();
        let val = currentInst.getVal();
        switch (ins) {
            case 'F': //wait a minute
                for (let i = 0; i < val; i++) {
                    let diffX = myWaypoint.getX() - myShip.getX();
                    let diffY = myWaypoint.getY() - myShip.getY();
                    myShip.addY(diffY);
                    myShip.addX(diffX);
                    myWaypoint.addY(diffY);
                    myWaypoint.addX(diffX);
                }
                ;
                break;
            case 'L': {
                let degreesRotation = degrees_to_radians(val);
                let relativeX = myWaypoint.getX() - myShip.getX();
                let relativeY = myWaypoint.getY() - myShip.getY();
                let newX = relativeX * Math.cos(degreesRotation) - relativeY * Math.sin(degreesRotation);
                let newY = relativeX * Math.sin(degreesRotation) + relativeY * Math.cos(degreesRotation);
                newX = Math.round(newX) + myShip.getX();
                newY = Math.round(newY) + myShip.getY();
                myWaypoint.setX(newX);
                myWaypoint.setY(newY);
                break;
            }
            case 'R': {
                let degreesRotation = degrees_to_radians(-val);
                let relativeX = myWaypoint.getX() - myShip.getX();
                let relativeY = myWaypoint.getY() - myShip.getY();
                let newX = relativeX * Math.cos(degreesRotation) - relativeY * Math.sin(degreesRotation);
                let newY = relativeX * Math.sin(degreesRotation) + relativeY * Math.cos(degreesRotation);
                newX = Math.round(newX) + myShip.getX();
                newY = Math.round(newY) + myShip.getY();
                myWaypoint.setX(newX);
                myWaypoint.setY(newY);
                break;
            }
            case 'N':
                myWaypoint.addY(val);
                break;
            case 'S':
                myWaypoint.addY(-val);
                break;
            case 'E':
                myWaypoint.addX(val);
                break;
            case 'W':
                myWaypoint.addX(-val);
                break;
        }
        ; //switch
        console.log(myShip);
    });
    console.log(myShip);
    return Math.round(absoluteOf(myShip.getX()) + absoluteOf(myShip.getY()));
}
;
function testDay12b() {
    let fs = require('fs');
    let myLines = fs.readFileSync('./input/inputDay12.txt').toString().split("\r\n");
    console.log('----------------------------------START----------------------------------');
    console.log(puzzleDay12b(myLines));
}
testDay12b();
