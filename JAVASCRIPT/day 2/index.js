let today = 4;
let isTuesday = true;
let isWeatherGood = true;
if (today == 3) {
    console.log("Go to class");
} else if (today === 5) {
    console.log(" go to class");
} else {
    console.log("go to class");
}
if (today == 3 && isWeatherGood) {
    console.log("go to the Park");
}

console.log("3 == '3'", 3 == '3');
console.log("3 === '3'", 3 === '3');

// switch case
let month = 3;
if (month === 1) {
    console.log("January");
} else if (month === 2) {
    console.log("February");
} else if (month === 3) {
    console.log("March");
}
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Don't know");
}

switch (month) {
    case 1:
    case 3:
    case 5:
        console.log("31");
        break;
    case 2:
        console.log("28");
        break;
    case 4:
    case 6:
    case 9:
        console.log("30");
        break;
    default:
        console.log("Not Valid");
}
// loop - for - while - do while
let begin = 0;
let end = 19;
for (let i = begin; i <= end; i = i + 1) {
    console.log("student ", i);
}
for (let i = 0; i < end; i++) {
    console.log("student: " + (i + 1));
}

let i = 1;
while (i < 10) {
    console.log("the day miss Tam: " + i);
    i++;
}
j = 1;
do {
    console.log("Never mind, I still do it");
    j++;
} while (j < 1)

console.log("please print me");

// get value from user input, enter number
let value = window.prompt("enter a number: ", 0);
console.log("value= ", value, typeof(value));

if (value % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}