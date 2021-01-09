const modularMultiplicativeInverse = (a: bigint, modulus: bigint) => {
    // Calculate current value of a mod modulus
    const b = BigInt(a % modulus);
    // We brute force the search for the smaller hipothesis, as we know that the number must exist between the current given modulus and 1
    for (let hipothesis = 1n; hipothesis <= modulus; hipothesis++) {
        if ((b * hipothesis) % modulus == 1n) return hipothesis;
    }
    // If we do not find it, we return 1
    return 1n;
}
const solveCRT = (remainders: bigint[], modules: bigint[]) => {
    // Multiply all the modulus
    const prod : bigint = modules.reduce((acc: bigint, val) => acc * val, 1n);
    
    return modules.reduce((sum, mod, index) => {
        // Find the modular multiplicative inverse and calculate the sum
    // SUM( remainder * productOfAllModulus/modulus * MMI ) (mod productOfAllModulus) 
        const p = prod / mod;
        return sum + (remainders[index] * modularMultiplicativeInverse(p, mod) * p);
    }, 0n) % prod;
}
function puzzleDay13b(input:string){
    let aux:string[] = input.split(',');
    let generatorNumbers:bigint[] = [];
    let validators:boolean[] = []
    let positions:number[] = [];
    let p:number = 0;
    aux.forEach(currentItem => {
        if (currentItem == 'x'){
            validators.push(false);
        } else {
            generatorNumbers.push(BigInt(parseInt(currentItem)));
            positions.push(p);
            validators.push(true);
        };
        p++;
    });
    console.log(generatorNumbers);
    console.log(positions);
    let reminder:bigint[] = [];
    for (let i = 0; i< positions.length; i++) {
        reminder.push(BigInt(generatorNumbers[i])-BigInt(positions[i]));
    };
    let res:bigint = solveCRT(reminder, generatorNumbers);
    return res;
};
function test13b(){
    let fs = require('fs');
    let myLines:string[] = fs.readFileSync('./input/inputDay13.txt').toString().split("\r\n");
    console.log('----------------------------------START----------------------------------');
    console.log(puzzleDay13b(myLines[1]));
};
test13b();
