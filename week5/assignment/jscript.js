// Declare any necessary variables.

// Add am event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.

// Create a function that instantiates a new student object with the input from the HTML form.

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
import {Student} from "/student.js";

const print = document.getElementById("print");

print.addEventListener("click", function() {
    let studentName = document.getElementById("studentName").value;
    let className = document.getElementById("className").value;
    let studentScores = document.getElementById("studentScores").value;
    let possibleScores = document.getElementById("possibleScores").value;

    let student = new Student(studentName, className, arrMaker(studentScores), arrMaker(possibleScores));
    console.log(student)
});

function arrMaker(str) {
    return str.split(",");
}