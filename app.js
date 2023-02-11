function logName(name) {
    console.log(name);
}
logName("Jack");
var studentID = 12345;
var studentName = "Jenny Kim";
var age = 21;
var subject = "Javascript";
var courseCompleted = false;
var student1 = {
    studentID: 121212,
    studentName: "Janet Jackson",
    age: 30,
    gender: "Female",
    subject: "Mongo DB",
    courseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 123455,
        studentName: "Mark Jacobs",
        gender: "male",
        subject: "Node JS",
        courseCompleted: true
    };
}
function saveStudentDetails(student) { }
saveStudentDetails(student1);
