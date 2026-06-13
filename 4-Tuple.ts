//1. Tuple
let tuplePerson: [string, number] = ["Alice", 30];
console.log(`Person: ${tuplePerson[0]}, Age: ${tuplePerson[1]}`);

//2. Tuple with Optional Elements
let tupleWithOptional: [string, number?] = ["Bob"];
console.log(`Person: ${tupleWithOptional[0]}, Age: ${tupleWithOptional[1] ?? "N/A"}`);

//3. Tuple with Rest Elements
let tupleWithRest: [string, ...number[]] = ["Charlie", 25, 30, 35];
console.log(`Person: ${tupleWithRest[0]}, Ages: ${tupleWithRest.slice(1).join(", ")}`);

//4. Tuple with Array
let tupleWithArray: [string, number[]] = ["Dave", [20, 25, 30]];
console.log(`Person: ${tupleWithArray[0]}, Ages: ${tupleWithArray[1].join(", ")}`);

let tupleWithArray2: [string, number][] = [
    ["Eve", 28],
    ["Frank", 32],
];
tupleWithArray2.push(["Grace", 26]);
tupleWithArray2.forEach(([name, age]) => {
    console.log(`Person: ${name}, Age: ${age}`);
});