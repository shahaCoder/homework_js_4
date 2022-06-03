// Задание 1

let arr = [1,2,false,"hello",24,"world", undefined, null, "error", 22];

let numbers = [];
let str = [];
let boolean = [];
let obj = [];

numbers = arr.filter(item => typeof item === "number")
console.log(numbers)


str = arr.filter(item => typeof item === "string")
console.log(str)

boolean = arr.filter(item => typeof item === "boolean")
console.log(boolean)

let und = arr.filter(item => typeof item === "undefined")
console.log(und)

// Задание 2 

