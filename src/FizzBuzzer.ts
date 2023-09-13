/**
 * make a class, FizzBuzzer which makes objects which can be used to iterate over a fizz buzz sequence step by step, as follows:
 * const myFizzBuzzer = new FizzBuzzer()
console.log(myFizzBuzzer.next())  //1
console.log(myFizzBuzzer.next())  //2
console.log(myFizzBuzzer.next())  //"Fizz"
console.log(myFizzBuzzer.next())  //4

myFizzBuzzer.reset()
console.log(myFizzBuzzer.next())  //1...

*/

export class FizzBuzzer {
    currentNum: number;

    constructor(currentNum = 0) {
        this.currentNum = currentNum;
    }

    next() {
        this.currentNum += 1;
        if (this.currentNum % 3 === 0 && this.currentNum % 5 === 0) {
            return "FizzBuzz";
        } else if (this.currentNum % 5 === 0) {
            return "Buzz";
        } else if (this.currentNum % 3 === 0) {
            return "Fizz";
        } else {
            return this.currentNum;
        }
    }
    reset() {
        this.currentNum = 0;
    }
}

const myFizzBuzzer = new FizzBuzzer();

console.log(myFizzBuzzer);
console.log(myFizzBuzzer.next()); //1
console.log(myFizzBuzzer.next()); //2
console.log(myFizzBuzzer.next()); //"Fizz"
console.log(myFizzBuzzer.next()); //4
myFizzBuzzer.reset();
console.log(myFizzBuzzer);
console.log(myFizzBuzzer.next()); //1
