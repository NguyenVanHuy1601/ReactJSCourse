// let number = 8;

// function checkNumber() {
//     if (number % 2 == 1) {
//         return "ODD";
//     } else {
//         return "EVEN";
//     }
// }
// console.log(number, " is", checkNumber());
// let n = 1;

// function calculateN(n) {
//     if (n > 10)
//         return 0;
//     return n + calculateN(n + 1);
// }
// let total = calculateN(n);
// console.log("total = ", total);

// // 2 ways to declare a function
// let hello = function() {
//     console.log("hello Tam");
// }
// hello();

// // arrow function - fat function
// let checkNumberA = (number) => (number % 2 == 1 ? "Odd" : "Even");
// console.log(checkNumberA(7));

// // number handle

// let index = 1;
// let result = index + ++index + index++ + index;
// console.log("total:", result);

// function getInputNumber() {
//     let number = 0;
//     do {
//         let numberStr = window.prompt("enter a number", 0);
//         number = Number(numberStr);
//     } while (isNaN(number))
//     console.log(number, typeof number);
//     return number;
// }
// console.log(getInputNumber());
let a = 2435;
a = Number(a);
console.log(a, typeof(a));
a = a.toString();
console.log(a, typeof(a));
console.log("floor(1.5):", Math.floor(1.5));
console.log("ceil(1.5):", Math.ceil(1.5));
console.log("round(1.5):", Math.round(1.5));
// random
console.log("random:", Math.random());

function rollADice() {
    return Math.ceil(Math.random() * 6);
}
console.log("Roll a dice: ", rollADice());

function randomFromTo(from, to) {
    return Math.ceil(Math.random() * (to - from + 1)) + from - 1;
}

console.log("random(10-15):", randomFromTo(10, 15));

// string handler
let studentName = "Thanh Tam";
studentName = "Ngo Thi " + studentName;
console.log("student's name: ", studentName);
console.log("studentName.length()", studentName.length);
console.log("studentName.toUpperCase()", studentName.toUpperCase());
console.log("studentName.toLowerCase()", studentName.toLowerCase());
console.log("studentName.charAt(3)", studentName.charAt(4));
console.log("studentName.indexOf('Thanh')", studentName.indexOf('Thanh'));
console.log("studentName.lastIndexOf('h')", studentName.lastIndexOf('h'));
console.log("studentName.slice(3)", studentName.slice(3));
console.log("studentName.slice(3,7)", studentName.slice(3, 7));
console.log("studentName.substring(3)", studentName.substring(3));
console.log("studentName.substring(3,7)", studentName.substring(3, 7));
console.log("studentName.substr(5)", studentName.substr(5));
console.log("studentName.substr(5,7)", studentName.substr(5, 7));
console.log("studentName.replace('Thanh')", studentName.replace("Thanh", "Huy"));

let userName = "nguyen vAn huY";
// normalize userName
function normalizeName(userName) {
    userName = userName.toLowerCase();
    for (let i = 0; i < userName.length; i++) {
        if (i == 0 || userName[i - 1] == " ") {
            userName =
                userName.slice(0, i) +
                userName[i].toUpperCase() +
                userName.slice(i + 1);
        }
    }
    return userName;
}
console.log("normalize from ", userName, " \n to", normalizeName(userName));
userName = normalizeName(userName);
// console.log("replaceName: ", replaceName(userName));