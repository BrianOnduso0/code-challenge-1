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

function calculateAndDisplayGrade() {
    const markInput = document.getElementById('mark').value;
    const mark = parseFloat(markInput);

    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        const grade = calculateGrade(mark);
        document.getElementById('result').textContent = "Grade: " + grade;
    } else {
        document.getElementById('result').textContent = "Please enter a Marks between 0 and 100.";
    }
}

