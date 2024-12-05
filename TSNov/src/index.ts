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

//Arrays in TS

//Type aliasis
//we can manually define the type at the top and use it anywhere
type strong = number | string;
let a : strong = "something";
console.log(a);

let a1 = 23;
let b1 = 45;
type Username = (a1:number, b1:number) => number

const function1 : Username = (a1,b1) => {
    console.log(a1+b1+"asds");
    return a1+b1;
    
}

const result = function1(a1,b1);
console.log(result);

//Array defination is ts
let arr : number[] = [1,2,3,4,5];
arr.forEach((it:number) => {
    console.log("The numbers in array are "+it);
})

// Most used syntax in array in typescript(used in generics too)

let arr1 : Array<number> = [1,2,3,4,5];
arr1.map((it:number) =>{
    console.log("The numbers in array1 are "+it);
})

let newarr : Array<number | string> = ["Shivam","Singh",324,4];
newarr.forEach((it : number | string) => {
    console.log("Multiple value array"+it);
})

// let arr : Array <string> = [];
//Objects in TS
//one wat to declare the variables

const obj1: {
    height : number,
    width : number
} = {
height : 12,
width : 21
}

// Another way to declare

type Obj = {
    age : number,
    name : string,
    address ?: string //it means address is optinal
}

const obj : Obj = { 
age : 23,
name : "Shivam",
address : "Bengaluru"
}

const obj2 : Obj = { 
    age : 23,
    name : "Shivam",
    }

    interface newobj {
        name : string,
        age : number,
        gender : boolean
    }

 //We can use extends here too just as classes and objects in javascript 

 //Functions in ts 

type FuncType = (n:number,m:number) => number;

 const func = (n:number, m : number) => {
return n+n
 }

 const fun22 : FuncType = (n,m) => {
    return n+m;
 }
 fun22(2,3);
 console.log("Function returned "+fun22(2,3));

 //Functions with objects as arguments

 const getData = (product : {name:string,price:number,stock:number}) => {
    console.log(product);
 }

 console.log(getData({
    name : "Shivam",
    "price" : 23,
    "stock" : 1
 }))

//never type 


//this returns never                                                                 
const errorHandler = () => {
    throw new Error();
}
// this returns error 
const errHandler = () => {
    return new Error();
}