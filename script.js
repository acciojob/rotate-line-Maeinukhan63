//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

// Function to rotate the line
function rotateLine() {
    angle += 2; // Increase the angle by 2 degrees
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply the rotation
}

// Rotate the line every 20 milliseconds
setInterval(rotateLine, 20);
