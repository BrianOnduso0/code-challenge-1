function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        return points > 12 ? "License suspended" : "Points: " + points;
    }
}

const speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));

if (!isNaN(speed)) {
    const result = calculateDemeritPoints(speed);
    alert(result);
} else {
    alert("Invalid input. Please enter a valid number.");
}
