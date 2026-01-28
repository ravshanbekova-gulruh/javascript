//data type

const { userInfo } = require("../2 dars/app");

//primitive data types - oddiy sodda ma'lumot turlari
//1 string - yozuv
// let text = "string text"
// console .log (text);

//templete literal
// let userName = "gulrukh"
// let userAge = 15;
// console.log("foydalanuvchining ismi:" + userName + ",yoshi:" + userAge)
// console.log(`foydalanuvchining ismi: ${userName}, yoshi: ${userAge}`);

//2 number -son
let number =1_000_000;
console.log (number);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
//3 boolean - mantiqiy
let boll = false;
//4 null - mavjud emas
let empty = null;
console.log(null == 0); //false

//5 undefined - aniqlanmagan
let userName;
console.log(userName); //undefined

//6 bigint - katta sonlar
let example_one = 9007199254740991n + 1n
let example_two = 9007199254740991n + 2n
console.log(example_one == example_two);

//7 symbol - maxsus qiymat
let id = Symbol("id")

let userInfo ={
    [id]: 1234
}

console.log(userInfo[id]);

//non-primitive data types - murakkab ma'lumot turlari
//nonprimitive data types - bir o'zgaruvchi bir nechta qiymatlar

// 1 object -> array, function
let person = {
    name:"ism",
    age : 20,
    isGraduaded: true,
    nationality: "uz"
}
console.table(person)

// 2. array - list
let cars = ["bmw","audi","mercedes","ferrari"]

// 3. function

function sayHello() {
    return "hello!"
}

console.log(sayHello())