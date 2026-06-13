// 1. Type Inference
let message = "Hello, TypeScript!"; // Type inference: string -- Compile time
console.log(message);

// 2. Type Annotations
let count: number; // Type annotation: number
count = 42;
console.log(count);

let userName: string = "Alice"; // Explicit type annotation
console.log(userName);

// 3. Types

//String
let firstName: string = "John";
let lastName: string = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

//Number
let age: number = 30;
console.log(`Age: ${age}`);

//Boolean
let isStudent: boolean = true;
console.log(`Is Student: ${isStudent}`);

//Array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(`Numbers: ${numbers.join(", ")}`); 

//Tuple
let person: [string, number] = ["Alice", 30];
console.log(`Person: ${person[0]}, Age: ${person[1]}`);

//Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Red;
console.log(`Favorite Color: ${Color[favoriteColor]}`);

//Any
let randomValue: any = "Hello";
console.log(`Random Value: ${randomValue}`);
randomValue = 42;
console.log(`Random Value: ${randomValue}`);

//Void
function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}

logMessage("This is a log message.");

//Never
function throwError(message: string): never {
    throw new Error(message);
}
// Uncommenting the line below will throw an error
// throwError("This is an error message.");

//Null and Undefined
let nullableValue: string | null = null;
console.log(`Nullable Value: ${nullableValue}`);

let undefinedValue: string | undefined = undefined;
console.log(`Undefined Value: ${undefinedValue}`);


// 4. Function with Type Annotations
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10));

// 5. Type Inference in Functions
function multiply(x: number, y: number) {
    return x * y; // Type inference: number
}
console.log(multiply(5, 10));

