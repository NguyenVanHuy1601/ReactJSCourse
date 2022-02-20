// alert("xin chào");


// function hello(studentName, universityName) {
//     if (studentName && universityName) {
//         console.log("hello Tam");
//         console.log("My name is", studentName, ", university: ", universityName);
//         return true;
//     }
//     return false;
// }
// hello("Huy", "Buu Chinh");

// hello("Tam", "KHXH&NV");
// let check = hello("", "Buu chinh");
// if (!check) {
//     console.log("something went wrong on print");
// }

// // write a function check is a number prime?
// function checkPrime(number) {
//     let check = true;
//     if (number < 2) {
//         return false;
//     } else {
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }
// let aNumber = window.prompt("enter a number to check ");
// let checkP = checkPrime(aNumber);
// if (checkP) {
//     console.log(aNumber, "is Prime number");
// } else {
//     console.log(aNumber, "is Not Prime number");
// }
function checkSymNumber(n) {
    let count = 0;
    let a = [];
    while (n > 0) {
        a[count] = n % 10;
        n = (n - a[count]) / 10;
        count++;
    }
    for (let i = 0; i <= count / 2 - 1; i++) {
        if (a[i] != a[count - 1 - i]) {
            return false;
        }
    }
    return true;
}
let number = window.prompt("enter a number");
let check = checkSymNumber(number);
if (check == true) {
    console.log("Symmetry number");
} else {
    console.log("NOT");
}

function checkOddNumber(n) {
    let count = 0;
    let a = [];
    while (n > 0) {
        a[count] = n % 10;
        n = (n - a[count]) / 10;
        count++;
    }
    for (let i = 0; i < count; i++) {
        if (a[i] % 2 == 0) {
            return false;
        }
    }
    return true;
}

let checkOdd = checkOddNumber(number);
if (checkOdd) {
    console.log("Full ODD");
} else {
    console.log("have Even");
}

let str = window.prompt("enter a string");
console.log("this is your string", str);