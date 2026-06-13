// 1. For Loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
}

// 2. While Loop
let count: number = 0;
while (count < 5) {
    console.log(`While Iteration: ${count}`);
    count++;
}

// 3. Do-While Loop
let doCount: number = 0;
do {
    console.log(`Do-While Iteration: ${doCount}`);
    doCount++;
} while (doCount < 5);

// 4. For...of Loop (for iterating over iterable objects)
let fruits: string[] = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// 5. For...in Loop (for iterating over object properties)
let person: { name: string; age: number } = { name: "Alice", age: 30 };
for (let key in person) {
    console.log(`${key}: ${person[key as keyof typeof person]}`);
}

