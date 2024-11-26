const number = 345678; // More descriptive variable name
console.log(number);

let value1 = 9; // More descriptive variable name
let value2 = 90; // More descriptive variable name
const calculateSum = () => {
    const sum = value1 + value2; // Directly use the sum variable
    console.log(`The sum of ${value1} and ${value2} is ${sum}`); // More descriptive output
}
console.log(calculateSum());

// Defination of variables in different ways

let nameo : string = "asd"; // More descriptive variable name
console.log(nameo);

let answer = <number> 12; // More descriptive variable name
console.log(answer);

let newVar : number | boolean; //newvar can be number, boolean both
newVar = true;
console.log(newVar);