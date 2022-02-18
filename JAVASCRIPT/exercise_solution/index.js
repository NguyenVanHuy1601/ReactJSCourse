let number = prompt("enter a number");

console.log("Number: ", number);
if (number < 2) {
    console.log(number, "is not prime number");
} else {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            console.log(number, "is not a prime number");
            count++;
            break;
        }
    }
    if (count == 0) {
        console.log(number, "is prime number");
    }
}