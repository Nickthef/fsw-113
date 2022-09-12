// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

export class Student {
    constructor(studentName, className, studentScores, possibleScores) {
        this.studentName = studentName;
        this.className = className;
        this.studentScores = studentScores;
        this.possibleScores = possibleScores;
    }

    addStudentScores() {
        let scores = document.getElementById("studentScores").value.split(",");
        console.log(scores)
    }
}
