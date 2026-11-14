// string **
//number 231232143
//bolean true/false

//array
//object

//{}
//() parenthesis
//[] array

//var
//let
//const

//let student1 =300
//console.log(student1)

//student1 =20
//console.log(student1)
// var varvariable=1
// let letvariable=1
// const constVariable=1

//arithmat
// +
// -
// *
// /

//assignment
//=
// +-
// -=

//comparison
// ==
// ===
// >
// <

// let num1=5
// let num2=5
// let sum=num1+num2

let num1=5;
let num2=5;
let sum= num1 == num2;

//let neWord=10;

//sum -= neWord

//console.log(sum)


console.log(sum)


let num3 ="adil ali daniyal"
console.log(num3)

let student =["email","password"]
console.log(student);

let student1={
    name : "adil",
    age1 : 20
}
console.log(student1);

// let newWord =10;

//sum -= newWord

// //console.log(sum);
// console.log(sum)

// logical
// let age =
//console.log(num1 == 0 || num1==10);

// if (num1==0 && num1==10) {
//  console.log("if ka block chal gaya");
//   }else {
//    console.log("else ka block chal gaya")
//}

age=50

if (age >=40 && age <= 60) {
    console.log("you are elder");
} else {
    console.log("you are teenage")
}

//age3=78

let age3 = prompt("enter your age")
//console.log(age)
//document.write(age3)

//if (num1 ==9) {
// console.log("correct!");
//} else if (num1 == 7) {
//  console.log("wrong ! 2");
//} else if (num 1 == 5) {
//    console.log("correct ! 2");
//}else {
//    console.log("wrong !");
//}

// let percentage  =90

//if percentage > 80) {
// console.log("A+")    
//} else if (percentage > 70) {
//    console.log("A")
//} else if percentage > 60) {
// console.log("c");    
//} else if (percentage > 50) {
//    console.log("D");
// else {
//  console.log("you fail");  
//}


// querySelector takes a CSS selector ("#id"), but getElementById takes the bare id (no "#").
const password = document.querySelector("#passinput");
const email = document.getElementById("emailinput");

const savedEmail = "adil@gmail.com";
const savedPassword = "12345"; // input values are always strings, so compare with a string

function getValue() {
    if (email.value.trim() === savedEmail && password.value === savedPassword) {
        console.log("Login successful");
    } else {
        console.log("Incorrect email or password");
    }
}