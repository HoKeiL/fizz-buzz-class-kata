class FizzBuzz {
    currentNum: number;
    tupleArray: [string, number][];

    constructor(tupleArray: [string, number][], currentNum = 0) {
        this.currentNum = currentNum;
        this.tupleArray = tupleArray;
    }

    next() {
        this.currentNum += 1;
        let output = "";
        for (const item of this.tupleArray) {
            if (this.currentNum % item[1] === 0) {
                output += item[0];
            }
        }
        if (output.length > 0) {
            return output;
        }
        return this.currentNum;
    }
    reset() {
        this.currentNum = 0;
    }
}

const fb = new FizzBuzz([
    ["fozz", 3],
    ["bozz", 5],
    ["blurp", 7],
]);

console.log(fb.next()); //1
console.log(fb.next()); //2
console.log(fb.next()); //fozz...
