let sales = 1234_567_89;
interface Person {
    name : string;
    age : number | string;
}

const person = Person = {
    name : ""
    age : 

}
type UserName = string | number;
let a: UserName = "hello ji";

console.log(a);
let n = 2;
let m = 3;

const func = (n: number, m: number): number => {
  console.log("G");
  return n * m;
};
console.log(func(n, m));

const arr: number[] = [1, 2, 3, 4];
const arr2: Array<string | number> = ["Shivam", "Arun", "Pawan", 123];

arr2.forEach(i => {
    i.toLocaleString();
    console.log(i);
    
})

//objects in typescript










// Type -> 

// type Point = {
//     x : number;
//     y : number;
// };

// const point: Point = {
//     x : 10,
//     y: 16,
// }


interface Person {
    name : string;
    age?: number;
}

const ob1: Person = {

}

interface Users {
    
}

type UserName = string | number;
let a : UserName = "hello ji";

console.log(a);
let n =2;
let m = 3;

const func = (n: number , m:number): number => {
    
    console.log("G" );
    return n*m;
    
}
console.log(func(n,m));
