//1. Array
let arrayNumbers: number[] = [1, 2, 3, 4, 5];
console.log(`Numbers: ${arrayNumbers.join(", ")}`);

//2. Any Array
let anyArray: any[] = [1, "Hello", true, { name: "Alice" }];
console.log(`Any Array: ${anyArray.join(", ")}`);

anyArray.push(42);
console.log(`Any Array after push: ${anyArray.join(", ")}`);

//3. Multitype Array
let multitypeArray: (number | string)[] = [1, "Hello", 2, "World"];
console.log(`Multitype Array: ${multitypeArray.join(", ")}`);

// 4. Declartion and then Initialization of an Array
let declaredArray: string[];
declaredArray = ["TypeScript", "JavaScript", "Python"];
console.log(`Declared Array: ${declaredArray.join(", ")}`);
