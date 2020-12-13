"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puzzleDay12a(input) {
    var IndividualInstruction = /** @class */ (function () {
        function IndividualInstruction(crude) {
            this.ins = crude.charAt(0);
            var auxVal = '';
            for (var i = 1; i < crude.length; i++) {
                auxVal = auxVal + crude.charAt(i);
            }
            ;
            this.val = parseInt(auxVal);
        }
        ;
        IndividualInstruction.prototype.getIns = function () { return this.ins; };
        ;
        IndividualInstruction.prototype.getVal = function () { return this.val; };
        ;
        return IndividualInstruction;
    }());
    ; //IndividualInstruction end.
    var ShipPosition = /** @class */ (function () {
        function ShipPosition(x, y, dir) {
            this.x = x;
            this.y = y;
            this.dir = dir;
        }
        ;
        ShipPosition.prototype.getX = function () { return this.x; };
        ;
        ShipPosition.prototype.getY = function () { return this.y; };
        ;
        ShipPosition.prototype.getDir = function () { return this.dir; };
        ;
        ShipPosition.prototype.addX = function (p) { this.x = this.x + p; };
        ;
        ShipPosition.prototype.addY = function (p) { this.y = this.y + p; };
        ;
        ShipPosition.prototype.addDir = function (p) {
            this.dir = this.dir + p;
            if (this.dir < 0) {
                this.dir = 360 + this.dir;
            }
            ;
            if (this.dir > 360) {
                this.dir = this.dir - 360;
            }
            ;
        };
        ;
        return ShipPosition;
    }());
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
    var mySetOfInstructions = [];
    input.forEach(function (currentInst) {
        var myIns = new IndividualInstruction(currentInst);
        mySetOfInstructions.push(myIns);
    });
    var myShip = new ShipPosition(0, 0, 0);
    mySetOfInstructions.forEach(function (currentInst) {
        var ins = currentInst.getIns();
        var val = currentInst.getVal();
        switch (ins) {
            case 'F':
                var degrees = degrees_to_radians(myShip.getDir());
                var additiveX = Math.round((val * Math.cos(degrees)));
                var additivieY = Math.round((val * Math.sin(degrees)));
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
    var fs = require('fs');
    var myLines = fs.readFileSync('./input/inputDay12.txt').toString().split("\r\n");
    console.log('----------------------------------START----------------------------------');
    console.log(puzzleDay12a(myLines));
}
testDay12a();
