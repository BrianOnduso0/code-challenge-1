function calculateGrade(mark) {
    if (mark > 79) {
        return "A";
    } else if (mark >= 60 && mark <= 79) {
        return "B";
    } else if (mark >= 50 && mark <= 59) {
        return "C";
    } else if (mark >= 40 && mark <= 49) {
        return "D";
    } else {
        return "E";
    }
}

function main() {
    const input = prompt("Enter the student's mark (0-100):");
    const mark = parseFloat(input);

    if (mark >= 0 && mark <= 100) {
        const grade = calculateGrade(mark);
        alert("Grade: " + grade);
    } else {
        alert("Please enter a valid mark between 0 and 100.");
    }
}

main();
