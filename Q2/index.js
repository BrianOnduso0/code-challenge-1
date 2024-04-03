function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        return points > 12 ? "Your License is suspended" : "Points: " + points;
    }
}

function calculateAndDisplayDemeritPoints() {
    const speedInput = document.getElementById('speed').value;
    const speed = parseFloat(speedInput);

    if (!isNaN(speed)) {
        const result = calculateDemeritPoints(speed);
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = "You have entered an Invalid input. Please enter a valid number.";
    }
}


