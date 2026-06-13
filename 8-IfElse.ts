// 1. If-Else Statement
let age: number = 25;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

// 2. If-Else If-Else Statement
let score: number = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// 3. Nested If-Else Statement
let number: number = 10;
if (number > 0) {
    console.log("The number is positive.");
    if (number % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 4. Ternary Operator (Shorthand for If-Else)
let isMember: boolean = true;
let discount: number = isMember ? 0.1 : 0.05;
console.log(`Discount: ${discount * 100}%`);
