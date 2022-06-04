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

 obj = arr.filter(item => typeof item === "null")
console.log(obj)

// Задание 2 

let arr2_nd = [1,2,3,4,5,6,7,8,9];
arr2_nd.filter(Number);
if (arr2_nd.length > 5){
    alert("GOOD")
} else{
    alert("Bad")
}