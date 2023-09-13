import { FizzBuzzer } from "./FizzBuzzer";
import { BizzFuzzer } from "./BizzFuzzer";
import { FizzBuzz } from "./extendedTask";

test("myFizzBuzzer next method", () => {
    const myFizzBuzzer = new FizzBuzzer();
    expect(myFizzBuzzer.next()).toBe(1);
    expect(myFizzBuzzer.next()).toBe(2);
    expect(myFizzBuzzer.next()).toBe("Fizz");
    expect(myFizzBuzzer.next()).toBe(4);
    expect(myFizzBuzzer.next()).toBe("Buzz");
});

test("myBizzFuzzer next method", () => {
    const myBizzFuzzer = new BizzFuzzer("Boop", "Schnoop", 2, 3);
    expect(myBizzFuzzer.next()).toBe(1);
    expect(myBizzFuzzer.next()).toBe("Boop");
    expect(myBizzFuzzer.next()).toBe("Schnoop");
    expect(myBizzFuzzer.next()).toBe("Boop");
    expect(myBizzFuzzer.next()).toBe(5);
});

test("fb next method", () => {
    const fb = new FizzBuzz([
        ["fozz", 3],
        ["bozz", 5],
        ["blurp", 7],
    ]);

    expect(fb.next()).toBe(1);
    expect(fb.next()).toBe(2);
    expect(fb.next()).toBe("fozz");
});
