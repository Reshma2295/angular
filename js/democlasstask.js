"use strict";
class Student {
    // Constructor
    constructor(name, rollNo, mark) {
        // Grading function
        this.gradeTracker = () => {
            if (this.studentMark < 60) {
                return "C";
            }
            else if (this.studentMark >= 60 && this.studentMark < 70) {
                return "B";
            }
            else if (this.studentMark >= 70 && this.studentMark < 90) {
                return "A";
            }
            else if (this.studentMark >= 90) {
                return "A+";
            }
            else {
                return "Not valid Grade";
            }
        };
        // Display function
        this.display = () => {
            console.log("Name: " + this.studentName);
            console.log("Roll Number: " + this.studentRollNo);
            console.log("Mark: " + this.studentMark);
        };
        this.studentName = name;
        this.studentRollNo = rollNo;
        this.studentMark = mark;
        this.studentGrade = this.gradeTracker(); // Calculate the grade upon initialization
    }
}
// Prompt for student information
const studentName = window.prompt("Enter the student name: ") || '';
const studentRollNo = Number(window.prompt("Enter the student roll number: ")) || 0;
const studentMark = Number(window.prompt("Enter the student mark: ")) || 0;
// Create a new Student object
const student = new Student(studentName, studentRollNo, studentMark);
// Display student information (excluding the grade)
student.display();
