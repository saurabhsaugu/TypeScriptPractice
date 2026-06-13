console.log("SG");

//.ts -> TCS (TypeScript Compiler) -> .js (JavaScript) -> Browser/Node.js
//TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.
//TypeScript adds static types to JavaScript, which can help catch errors at compile time and improve code readability and maintainability.
//TypeScript also supports modern JavaScript features and can transpile them to older versions of JavaScript for compatibility with older browsers or environments.
//To compile TypeScript code, you can use the tsc command in the terminal, which will convert your .ts files into .js files that can be executed in a JavaScript environment. You can also configure the TypeScript compiler using a tsconfig.json file to specify options such as the target JavaScript version, module system, and more.

// 1. Example of a simple TypeScript program
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("World"));
