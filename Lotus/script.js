// script.js

// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    // Get the SVG element by ID
    const lotus = document.getElementById("Layer_2");
    // Get the paragraph element for displaying text
    const textElement = document.getElementById("text");

    // Function to show text when the lotus is clicked
    function showText() {
        // Display the text
        textElement.style.display = "block";
    }

    // Add click event listener to the lotus
    lotus.addEventListener("click", showText);
});
