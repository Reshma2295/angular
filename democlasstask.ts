class Student {
    // Instance variables
    studentName: string;
    studentRollNo: number;
    studentMark: number;
    studentGrade: string;

    // Constructor
    constructor(name: string, rollNo: number, mark: number) {
        this.studentName = name;
        this.studentRollNo = rollNo;
        this.studentMark = mark;
        this.studentGrade = this.gradeTracker(); // Calculate the grade upon initialization
    }

    // Grading function
    gradeTracker = (): string => {
        if (this.studentMark < 60) {
            return "C";
        } else if (this.studentMark >= 60 && this.studentMark < 70) {
            return "B";
        } else if (this.studentMark >= 70 && this.studentMark < 90) {
            return "A";
        } else if (this.studentMark >= 90) {
            return "A+";
        } else {
            return "Not valid Grade";
        }
    };

    // Display function
    display = (): void => {
        console.log("Name: " + this.studentName);
        console.log("Roll Number: " + this.studentRollNo);
        console.log("Mark: " + this.studentMark);
    };
}

// Prompt for student information
const studentName: string = window.prompt("Enter the student name: ") || '';
const studentRollNo: number = Number(window.prompt("Enter the student roll number: ")) || 0;
const studentMark: number = Number(window.prompt("Enter the student mark: ")) || 0;

// Create a new Student object
const student = new Student(studentName, studentRollNo, studentMark);

// Display student information (excluding the grade)
student.display();
