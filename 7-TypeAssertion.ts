// 1. Type Assertion with <> syntax
let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;
console.log(`String Length: ${strLength}`);

// 2. Type Assertion with 'as' syntax
let anotherValue: any = "Another string";
let anotherStrLength: number = (anotherValue as string).length;
console.log(`Another String Length: ${anotherStrLength}`);

// 3. Type Assertion with DOM elements
let inputElement = document.getElementById("myInput") as HTMLInputElement;