export class BizzFuzzer {
    currentNum: number;
    bizzWord: string;
    fuzzWord: string;
    bizzNum: number;
    fuzzNum: number;

    constructor(
        bizzWord: string,
        fuzzWord: string,
        bizzNum: number,
        fuzzNum: number,
        currentNum = 0
    ) {
        this.currentNum = currentNum;
        this.bizzWord = bizzWord;
        this.fuzzWord = fuzzWord;
        this.bizzNum = bizzNum;
        this.fuzzNum = fuzzNum;
    }

    next() {
        this.currentNum += 1;
        if (
            this.currentNum % this.bizzNum === 0 &&
            this.currentNum % this.fuzzNum === 0
        ) {
            return `${this.bizzWord}${this.fuzzWord}`;
        } else if (this.currentNum % this.fuzzNum === 0) {
            return `${this.fuzzWord}`;
        } else if (this.currentNum % this.bizzNum === 0) {
            return `${this.bizzWord}`;
        } else {
            return this.currentNum;
        }
    }
    reset() {
        this.currentNum = 0;
    }
}

const myBizzFuzzer = new BizzFuzzer("Boop", "Schnoop", 2, 3);

console.log(myBizzFuzzer);
console.log(myBizzFuzzer.next()); //1
console.log(myBizzFuzzer.next()); //"Boop"
console.log(myBizzFuzzer.next()); //"Schnoop"
console.log(myBizzFuzzer.next()); //"Boop"
myBizzFuzzer.reset();
console.log(myBizzFuzzer.next()); //1
