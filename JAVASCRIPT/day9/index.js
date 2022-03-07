// let student1 = {
//     name: "Nguyen Van huy",
//     class: "React",
//     mark: 10,
//     exam: function() {
//         console.log(this.name + " is examing...");
//     }
// };

class Student {
    constructor(name, className, mark) {
        this.name = name;
        this.class = className;
        this.mark = mark;
        // this.exam = this.exam.bind(this);
    }
    exam = (subject) => {
        console.log(this.name + " is examing...." + subject);
    }
    study = () => {
        console.log(this.name + " is studying...");
    }
}
let aStudent = new Student("Ngo Tam", "React", 9);
let aStudent2 = new Student("Nguyen Huy", "React", 7);

aStudent.exam("math");
aStudent2.exam("physic");
aStudent.study();
aStudent2.study();
// console.log(aStudent, aStudent2);
// function call(cb) {
//     cb();
// }
// call(aStudent.exam);
// let exam = aStudent.exam;
name = "huy";
let exam = aStudent.exam;
exam("Math");

// function hello() {
//     console.log("HELLOO");
// }

// let hello2 = hello;

// hello2();

//inheritance
class Person {
    constructor(name) {
        this.name = name;
    }
    go() {
        console.log(this.name + " is going");
    }
}

class Doctor extends Person {
    constructor(name, subject, type) {
        super(name);
        this.subject = subject;
        this.type = type;
    }
    go() {
        console.log(this.name + " is helping ");
    }
}

class Teacher extends Person {
    constructor(name, className) {
        super(name);
        this.className = className;
    }
}

let aDoctor = new Doctor("Doctor one", "Dentist", "Inner");
let aTeacher = new Teacher("Teacher one", "Math");
console.log(aDoctor);
aDoctor.go();
aTeacher.go();