"use strict";
const number = 345678; // More descriptive variable name
console.log(number);
let value1 = 9; // More descriptive variable name
let value2 = 90; // More descriptive variable name
const calculateSum = () => {
    const sum = value1 + value2; // Directly use the sum variable
    console.log(`The sum of ${value1} and ${value2} is ${sum}`); // More descriptive output
};
console.log(calculateSum());
// Defination of variables in different ways
let nameo = "asd"; // More descriptive variable name
console.log(nameo);
let answer = 12; // More descriptive variable name
console.log(answer);
let newVar; //newvar can be number, boolean both
newVar = true;
console.log(newVar);
let a = "something";
console.log(a);
let a1 = 23;
let b1 = 45;
const function1 = (a1, b1) => {
    console.log(a1 + b1 + "asds");
    return a1 + b1;
};
const result = function1(a1, b1);
console.log(result);
//Array defination is ts
let arr = [1, 2, 3, 4, 5];
arr.forEach((it) => {
    console.log("The numbers in array are " + it);
});
// Most used syntax in array in typescript(used in generics too)
let arr1 = [1, 2, 3, 4, 5];
arr1.map((it) => {
    console.log("The numbers in array1 are " + it);
});
let newarr = ["Shivam", "Singh", 324, 4];
newarr.forEach((it) => {
    console.log("Multiple value array" + it);
});
