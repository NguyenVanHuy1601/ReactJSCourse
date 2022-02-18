// alert("xin chào");


function hello(studentName, universityName) {
    if (studentName && universityName) {
        console.log("hello Tam");
        console.log("My name is", studentName, ", university: ", universityName);
        return true;
    }
    return false;
}
hello("Huy", "Buu Chinh");

hello("Tam", "KHXH&NV");
let check = hello("", "Buu chinh");
if (!check) {
    console.log("something went wrong on print");
}

// write a function check is a number prime?
function checkPrime(number) {
    let check = true;
    if (number < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
let aNumber = window.prompt("enter a number to check ");
let checkP = checkPrime(aNumber);
if (checkP) {
    console.log(aNumber, "is Prime number");
} else {
    console.log(aNumber, "is Not Prime number");
}