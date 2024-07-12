// Use modern ES6+ syntax

// Convert each character to its ASCII code
const charToAscii = char => char.charCodeAt(0);

// Normalize ASCII codes to the range 0-255
const normalizeAscii = code => code % 256;

// Generate pixel art based on input
function generatePixelArtFromString(input) {
    const asciiCodes = input.split('').map(charToAscii);
    const normalizedCodes = asciiCodes.map(normalizeAscii);

    // Determine the number of pixels per row
    const numRows = Math.ceil(Math.sqrt(normalizedCodes.length));

    // Create a 2D array to represent the pixel art
    const pixelArt = Array.from({ length: numRows }, (_, i) =>
        normalizedCodes.slice(i * numRows, (i + 1) * numRows)
    );

    return pixelArt;
}

// Display pixel art
function displayPixelArt(pixelArt) {
    const pixelArtContainer = document.getElementById("pixelArt");

    // Clear previous pixel art
    pixelArtContainer.innerHTML = "";

    // Display pixel art
    pixelArt.forEach(row => {
        row.forEach(pixel => {
            const pixelDiv = document.createElement("div");
            pixelDiv.classList.add("pixel"); // Use classList for class manipulation
            pixelDiv.style.backgroundColor = `rgb(${pixel},${pixel},${pixel})`;
            pixelArtContainer.appendChild(pixelDiv);
        });
    });
}

function generatePixelArt() {
    // Get the input text
    const inputText = document.getElementById("inputText").value.trim();

    // Validate input
    if (inputText === "") {
        alert("Please enter some text.");
        return;
    }

    // Generate pixel art based on input
    const pixelArt = generatePixelArtFromString(inputText);

    // Display pixel art
    displayPixelArt(pixelArt);
}

