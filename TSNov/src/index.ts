// interface Obj {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }

// type FuncType = (n: number, m: number) => void;

// interface NewObj extends Obj {
//   scolar: boolean;
//   func: FuncType;
// }

// const gigi: NewObj = {
//   height: 3434,
//   weight: 3434,
//   scolar: true,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };

// const kendal: NewObj = {
//   height: 43434,
//   scolar: true,
//   weight: 545,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };

// kendal.func(20, 10);

// const obj: Obj = {
//   gender: true,
//   height: 3434,
//   weight: 34,
// };

// const obj2: Obj = {
//   gender: false,
//   height: 4434,
//   weight: 94,
// };

// const obj3: Obj = {
//   height: 4434,
//   weight: 94,
// };

// ----------------------------------------

// type FuncType = (n: number, m: number, l?: number) => number;

// // Optional Parameter
// const func: FuncType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;

//   return n * m * l;
// };

// func(25, 23);

// // Default Parameter
// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// };

// func(25, 23);

// // Rest Operator
// type FuncType = (...m: number[]) => number[];
// const func: FuncType = (...m) => {
//   return m;
// };
// func(25, 23, 34, 6, 67, 8, 9);

// function lol(n:number):number{
//     return 45
// }

// function with Obj

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }

// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne: Product = {☺
//   name: "Macbook",
//   stock: 46,
//   price: 999999,
//   photo: "samplephotourl",
//   id: "asdnasjdasjkdas",
// };

// getData(productOne);

// Never Type

// const errorHandler = (): never => {
//   throw new Error();
// };

// --------------------------------------

// classes

// class Player {
//   public readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }

//   get getMyHeight(): number {
//     return this.height;
//   }

//   set changeHeight(val: number) {
//     this.height = val;
//   }
// }

// const abhi = new Player(100, 150, 23);

// console.log("Heigfht", abhi.getMyHeight);
// abhi.changeHeight = 500;
// console.log("Heigfht", abhi.getMyHeight);

// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   getMyPower = () => this.power;
// }

// const abhi = new Player2(100, 150, 23, true);
// console.log("Weight", abhi.weight);
// console.log("Height", abhi.getMyHeight());
// console.log("Power", abhi.getMyPower());

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   offer?: boolean;
// }

// interface GiveId {
//   getId: () => string;
// }

// class Product implements ProductType, GiveId {
//   private id: string = String(Math.random() * 1000);
//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}
//   getId = () => this.id;
// }

// const product1 = new Product("Macbook", 2000, 20);

// ---------------------------------------------

// Type Assertion

// const btn = document.getElementById("btn")!;
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick;

// const img = document.getElementById("myimg") as HTMLImageElement;

// const img = document.querySelector("img")!
// img.src

// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const h2 = document.createElement("h2");
//   const body = document.querySelector("body")!;
//   const value = Number(myinput.value);

//   h2.textContent = String(value + 20);
//   body.append(h2);
// };

// Keyof & Index Signature

// interface Person {
//     // [key: string]: string;
//   name: string;
//   email: string;
// }

// const myobj: Person = {
//   name: "Abhi",
//   email: "abhI@gmail.com",
// };

// let key="name";

// myobj[key as keyof typeof myobj]

// const getName = (): string => {
//   return myobj["name"];
// };
// const getEmail = (): string => {
//   return myobj["email"];
// };

// const getData = (key: keyof Person ): string => {
//   return myobj[key];
// };

// getData("name")

// --------------------------------------

// Type Utility

// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>

// Partial<Type>

// type User ={
//     name:string,
//     email:string
// }
// type User2 = Partial<User>

// Required<Type> - opposite of partial
// type User ={
//     name?:string,
//     email:string
// }
// const user: Required<User>={
//     name:"abhi",
//     email:"abhi@gmail.vom"
// }

// Readonly<Type> - makes every property readonly
// type User ={
//     name:string,
//     email:string
// }
// const user: Readonly<User> ={
//     name:"abhi",
//     email:"abhi@gmail.vom"
// }

// Record<Keys, Type>

// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Record<"name"|"email"|"gender",string>

// Example

// interface UserInfo {
//   age: number;
// }

// type UserName = "john" | "levi" | "elon" | "jack";

// const users: Record<UserName, UserInfo> = {
//   john: { age: 34 },
//   levi: { age: 34 },
//   elon: { age: 34 },
//   jack: { age: 34 },
// };

// Pick<Type, Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// Omit<Type, Keys>
// interface ShippingInfo {
//   city: string;
//   state: string;
//   country: string;
// }

// type Random = Omit<ShippingInfo,"country">

// Exclude<Type, ExcludedUnion>
// type MyUnion = string | number | boolean
// type Random = Exclude<MyUnion , boolean>

// Extract<Type, Union>
// type MyUnion = string | number | boolean
// type Random = Extract<MyUnion , boolean>

// NonNullable<Type>
// type MyUnion = string | number | boolean | null | undefined
// type Random = NonNullable<MyUnion>
// type Random2 = Exclude<MyUnion,undefined| null>

// Parameters<Type>
// const myfunc = (a: number, b: string) => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof myfunc>

// ConstructorParameters<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>

// ReturnType<Type>
// const myfunc = (a: number, b: string):string => {
//   return a + b;
// };
// type FuncType = ReturnType< typeof myfunc>

// InstanceType<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>

// const user:Random ={
//     s:"44",
//     t:"ssds"
// }

// -----------------------------------------------------------------

// Generics

// const func = <T>(n: T): T => {

//   return n;
// };

// const ans = func(20);
// const ans2 = func("20");
// const ans3 = func(true);

// type Person = {
//   name: string;
//   age: number;
// };

// const func = <T>(n: T): T => {
//   return n;
// };

// const person1: Person = {
//   name: "Abhi",
//   age: 109,
// };

// const ans = func<Person>(person1);

// const func = <T, U>(n: T, o: U): { n:T, o:U } => {
//   return { n, o };
// };

// const ans = func<number,string>(20,"Lol");

// type Person = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user: Person = {
//   name: "abhi",
//   age: 109,
// };

// const user2: Person2 = {
//   name: "abhi",
//   age: 109,
//   email: "asd@gmail.com",
// };

// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const ans = func<Person, Person2>(user, user2);

// type Person = {
//   name: string;
//   age: number;
// };

// const users: Person[] = [
//   {
//     name: "abhi",
//     age: 109,
//   },
//   {
//     name: "Nahar",
//     age: 109,
//   },
//   {
//     name: "Levi",
//     age: 52,
//   },

//   {
//     name: "Random",
//     age: 2,
//   },
// ];

// const filterByPeoples = <T, U extends keyof T>(
//   arr: T[],
//   property: U,
//   value: T[U]
// ): T[] => {
//   return arr.filter((item) => item[property] === value);
// };

// const filteredPeopleByName = filterByPeoples(users, "name", "Nahar");
// const filteredPeopleByAge = filterByPeoples(users, "age", 109);
// console.log(filteredPeopleByAge);

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


//Classess in TS

class Player {
    height;
    weight;
    constructor (height : number, weight : number){
        this.height = height;
        this.weight = weight;
    }
    
}

console.log("Classes------------------------>")
const shivam = new Player(10,12);
console.log("Height is "+shivam.height+ "cm and weight is "+shivam.weight+" kg");

// type assertion

// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement> document.getElementById

const btn = document.getElementById("btn") as HTMLElement;
btn.onclick = () => {
    console.log("___")
  alert('hi');
  
};

const img = document.getElementById("imgs") as HTMLImageElement;
img.src = "m"


//generics in ts

const funce = (n : number) : number => {
    return n;
}

const answer0 = funce(10);
// T - custom type
const functionnew = <T>(n : T) : T => {
    let text : T = n;
    return n;
}

const ans1 = functionnew(23);
const ans2 = functionnew("shivam");
const ans3 = functionnew(true);

// we cann 't assign different types to same variable like ans1. will show
//all the methods of number similarly we can use all the methods of string and boolean in ans2 and 3

const funcgen = <T> (n : T) : T => {
return n;
}