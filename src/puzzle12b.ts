import { parse } from "path";

function puzzleDay12b(input:string[]) {
    class IndividualInstruction {
        private ins: string;
        private val: number;
        constructor(crude:string) {
            this.ins = crude.charAt(0);
            let auxVal:string = '';
            for (let i = 1; i < crude.length; i++) {
                auxVal = auxVal + crude.charAt(i);
            };
            this.val = parseInt(auxVal);
        };
        getIns() {return this.ins};
        getVal() {return this.val};
    };//IndividualInstruction end.
    class ShipPosition {
      private x:number;
      private y:number;
      private dir:number;
      constructor(x:number, y:number, dir:number) {
        this.x = x;
        this.y = y;
        this.dir = dir;
      };
      getX() {return this.x};
      getY() {return this.y};
      setX(p:number) {this.x = p};
      setY(p:number) {this.y = p};
      getDir() {return this.dir};
      addX(p:number) {this.x = this.x + p};
      addY(p:number) {this.y = this.y + p};
      addDir(p:number) {
          this.dir = this.dir + p;
          if (this.dir < 0) {this.dir = 360 + this.dir};
          if (this.dir > 360) {this.dir = this.dir - 360};
        };
    };//ShipPosition
    function absoluteOf(p:number){
        if (p<0) return (-p);
        return p;
    };
    function degrees_to_radians(degrees:number) {
        var pi = Math.PI;
        return degrees * (pi/180);
    };
    console.log(absoluteOf(-3));
    let mySetOfInstructions:IndividualInstruction[] = [];
    input.forEach(currentInst => {
        let myIns:IndividualInstruction = new IndividualInstruction(currentInst);
        mySetOfInstructions.push(myIns);        
    });
    let myShip:ShipPosition = new ShipPosition(0,0,0);
    let myWaypoint:ShipPosition = new ShipPosition(10,1,0);
    mySetOfInstructions.forEach(currentInst => {
        let ins = currentInst.getIns();
        let val = currentInst.getVal();
        switch (ins){
            case 'F'://wait a minute
                for (let i:number = 0; i < val; i++){
                    let diffX = myWaypoint.getX() - myShip.getX();
                    let diffY = myWaypoint.getY() - myShip.getY();
                    myShip.addY(diffY);
                    myShip.addX(diffX);
                    myWaypoint.addY(diffY);
                    myWaypoint.addX(diffX);
                };
                break;
            case 'L':{
                let degreesRotation:number = degrees_to_radians(val);
                let relativeX:number = myWaypoint.getX() - myShip.getX();
                let relativeY:number = myWaypoint.getY() - myShip.getY();
                let newX:number = relativeX*Math.cos(degreesRotation) - relativeY*Math.sin(degreesRotation);
                let newY:number = relativeX*Math.sin(degreesRotation) + relativeY*Math.cos(degreesRotation);
                newX = Math.round(newX) + myShip.getX(); 
                newY = Math.round(newY) + myShip.getY();
                myWaypoint.setX(newX);
                myWaypoint.setY(newY);
                break;}
            case 'R':{
                let degreesRotation:number = degrees_to_radians(-val);
                let relativeX:number = myWaypoint.getX() - myShip.getX();
                let relativeY:number = myWaypoint.getY() - myShip.getY();
                let newX:number = relativeX*Math.cos(degreesRotation) - relativeY*Math.sin(degreesRotation);
                let newY:number = relativeX*Math.sin(degreesRotation) + relativeY*Math.cos(degreesRotation);
                newX = Math.round(newX) + myShip.getX(); 
                newY = Math.round(newY) + myShip.getY();
                myWaypoint.setX(newX);
                myWaypoint.setY(newY);
                break;}
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
        };//switch
        console.log(myShip);
    });
    console.log(myShip);
    return Math.round(absoluteOf(myShip.getX()) + absoluteOf(myShip.getY()));
};
function testDay12b(){
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/inputDay12.txt').toString().split("\r\n");
    console.log('----------------------------------START----------------------------------');
    console.log(puzzleDay12b(myLines));
}
testDay12b();