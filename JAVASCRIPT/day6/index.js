// continue array : map, reduce, sort, concat

let students = [{
        firstName: "Nguyen Van",
        lastName: "Huy",
        mark: 9,
    },
    {
        firstName: "NgoThanh",
        lastName: "Tam",
        mark: 10,
    },
    {
        firstName: "Thach Thi Do",
        lastName: "Quyen",
        mark: 8,
    }
];
// need a list student with full name
console.log("original: ", students);
let studentsFullName = students.map((student) => {
    return student.firstName + " " + student.lastName;
});

console.log("studentsFullName: ", studentsFullName)
    //need a list student with one more attribute: fullname
let studentsNew = students.map((student, index, arr) => {
    // student.fullName = student.firstName + " " + student.lastName;
    // let newStudent = {
    //     firstName: student.firstName,
    //     lastName: student.lastName,
    //     mark: student.mark,
    //     fullName: student.firstName + " " + student.lastName,
    // };
    //spread operator
    let newStudent = {
        ...student,
        fullName: student.firstName + " " + student.lastName,
    }
    return newStudent;
});
console.log("studentsNew: ", studentsNew);
// studentsNew[0].fullName = "test";\
// studentsNew.pop();
// console.log("studentsNew: ", studentsNew);
// console.log("original: ", students);

let numbers = [1, 6, 3, 11, 4, 2];
let total = numbers.reduce((a, b) => {
    console.log("a, b: ", a, b);
    return a + b;
}, 0);
console.log("total: ", total);

let totalOdd = numbers.reduce((a, b) => {
    if (b % 2 === 1) {
        return a + b;
    }
    return a;
}, 0);
console.log("totalOdd: ", totalOdd);

// sort
let sortNumbers = numbers.sort();
console.log("sortNumbers: ", sortNumbers);

let sortDescNumbers = numbers.sort((number1, number2) => {
    return number1 - number2;
});
console.log("sortDescNumbers: ", sortDescNumbers);

// sort students
console.log("students: ", students);
students.push({
    firstName: "Linh Tam",
    lastName: "Thanh",
    mark: 9,
});
console.log("students: ", students);
let sortMarks = students.sort((student1, student2) =>
    student1.mark - student2.mark
);

console.log("sortMarks: ", sortMarks);

let sortFirstNameStudents = students.sort((student1, student2) => {
    return student1.firstName.localeCompare(student2.firstName);
});

console.log("sortFirstNameStudents: ", sortFirstNameStudents);

let sortFirstNameLongStudents = students.sort((student1, student2) => {
    return student1.firstName.length - student2.firstName.length;
});

console.log("sortFirstNameLongStudents: ", sortFirstNameLongStudents);

console.log("numbers concat students: ", numbers.concat(students));

/////// object - property, method (OOP)
var car = {
    name: "Fiat",
    color: "white",
    weight: 850,
    start: function() {
        console.log(this.name, "Starting.....");
    },
};
console.log("car.name: ", car.name);
console.log("car[name]: ", car["name"]);

function getValueByProperty(prop) {
    return car[prop];
}

console.log("getValueByProperty('name'): ", getValueByProperty('name'));
console.log("getValueByProperty('color'): ", getValueByProperty("color"));

car.model = "2022";
console.log("car: ", car);
// this.name = "TEST";
let start = car.start.bind(car);
start();
car.start();