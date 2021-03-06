// alert("hi Tam");
// array 
let marks = [9, 7, 6, 10, 5, 8, 10, 7];
let names = ["Huy", "Tam", "Huyy", "Huyyy", "Tamm", "Tammm"];
console.log(marks[2]);
for (let i = 0; i < marks.length; i++) {
    console.log(names[i], ": ", marks[i]);
}

// object 
let student1 = {
    name: "Huy",
    mark: 9,
};

console.log("name:", student1.name, student1.mark);

let students = [
    student1,
    {
        name: "Tam",
        mark: 10,
    },
    student2 = {
        name: "TamHuy",
        mark: 10,
    },
];
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    console.log("student", i, student.name, student.mark);
}

// handle with methods
let reactJSStudents = [];
let newStudent = {
    name: "Nguyen Van Huy",
    mark: 0,
};
reactJSStudents.unshift(newStudent);
reactJSStudents.unshift({
    name: "Ngo Thi Thanh Tam",
    mark: 9,
});
reactJSStudents.unshift({
    name: "Nguyen Huy",
    mark: 10,
});

console.log("reactJSStudent", reactJSStudents);
// let theLastStudent = reactJSStudents.pop();
// let theFirstStudent = reactJSStudents.shift();
// console.log("reactJSStudent", reactJSStudents);
// console.log("theFirstStudent: ", theFirstStudent);
// console.log("theLastStudent: ", theLastStudent);
//notice  push + pop\

// indexOf , lastIndexOf , slice, splice, reverse, join 

console.log("marks: ", marks);
let indexOf10 = marks.indexOf(10);
console.log("indexOf10 = ", indexOf10);

console.log("index Of ", names.indexOf("Huyy"));
console.log("index Of student ",
    reactJSStudents.indexOf({
        name: "Ngo Thi Thanh Tam",
        mark: 9,
    }),
    "\n Huy",
    reactJSStudents.indexOf(newStudent)
);
console.log("{} == {}", {} == {});
let studentA = {
    name: "NVH",
};

let studentAClone = studentA;
studentAClone.name = "NTTT";

console.log("studentA: ", studentA);

console.log("marks.slice(): ", marks.slice(1));
console.log("marks.splice(): ", marks.splice(1, 2, 14, 19));
console.log("marks:", marks);
console.log("marks.join(" + ")", marks.join(" + "));
console.log("marks.reverse()", marks.reverse());
console.log("students: ", marks.join(" - "));

/// callback
function hello() {
    console.log("hello");
}

function say(callback) {
    callback();
}
console.log("hello", hello);
say(hello);

// find, filter, map, reduce, concat
console.log("reactJSStudents: ", reactJSStudents);

function findCondition(student) {
    console.log("log Student: ", student);
    return student.name == "Ngo Thi Thanh Tam";
}
let foundStudent = reactJSStudents.find(findCondition);
console.log("foundStudent: ", foundStudent);
// function find(callbackFind) {
//     let foundStudent;
//     for (let i = 0; i < reactJSStudents.length; i++) {
//         if (callbackFind(reactJSStudents[i])) {
//             foundStudent = reactJSStudents[i];
//             break;
//         }
//     }
//     return foundStudent;
// }


// console.log("Found: ", find(findCondition));
// let foundStudent = reactJSStudents.find(findCondition);
// console.log("foundStudent: ", foundStudent);

// let huyStudent = reactJSStudents.find(
//     (student) => student.name == "Nguyen Huy"
// );
// console.log("huyStudent: ", huyStudent);

// let teachers = ["Huyen", "Tam", "Huy", "Linh"];
// console.log(
//     "findHuy: ",
//     teachers.find(
//         (teacher) => teacher == "Tam"
//     ));

reactJSStudents.push({
    name: "Nguyen Tam",
    mark: 10,
});
reactJSStudents.unshift({
    name: "Nguyen Tuyet",
    mark: 10,
});
reactJSStudents.push({
    name: "Vo Huyen",
    mark: 9,
});

console.log("reactJSStudent:", reactJSStudents);

let students10Marks = reactJSStudents.filter(
    (student, index) => student.mark == 10 && index >= 1
);
console.log("students10Marks: ", students10Marks);
console.log("studentsHaveNguyen: ",
    reactJSStudents.filter(
        (student) => student.name.includes("Nguyen")
    ));