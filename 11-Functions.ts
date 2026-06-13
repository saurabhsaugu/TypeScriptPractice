// 1. Function Declaration
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

greet("Alice");

// 2. Function Expression
const add = function (a: number, b: number): number {
    return a + b;
};
console.log(add(5, 3));

// 3. Arrow Function
const multiply = (x: number, y: number): number => {
    return x * y;
};
console.log(multiply(4, 6));

// 4. Optional Parameters
function introduce(name: string, age?: number): void {
    if (age) {
        console.log(`My name is ${name} and I am ${age} years old.`);
    } else {
        console.log(`My name is ${name}.`);
    }
}

introduce("Bob");
introduce("Charlie", 28);

// 5. Default Parameters
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}
console.log(power(5)); // Default exponent is 2
console.log(power(5, 3)); // Exponent is 3

// 6. Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// 7. Function Overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}
console.log(combine("Hello, ", "World!"));