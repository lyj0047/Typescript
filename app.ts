let studentID: number = 12345;
let studentName: string = "Jenny Kim";
let age: number = 21;
let subject: string = "Javascript";
let courseCompleted: boolean = false;

let student1 = {
  studentID: 121212,
  studentName: "Janet Jackson",
  age: 30,
  gender: "Female",
  subject: "Mongo DB",
  courseCompleted: false,
};
interface Student {
  studentID: number;
  studentName: string;
  age?: number;
  gender: string;
  subject: string;
  courseCompleted: boolean;
}

function getStudentDetails(studentID: number): Student {
  return {
    studentID: 123455,
    studentName: "Mark Jacobs",
    gender: "male",
    subject: "Node JS",
    courseCompleted: true,
  };
}

function saveStudentDetails(student: Student): void {}

saveStudentDetails(student1);
