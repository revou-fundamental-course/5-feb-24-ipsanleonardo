// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select input elements
    let celsiusInput = document.querySelector('#celsius > input');
    let fahrenheitInput = document.querySelector('#fahrenheit > input');

    // Select button element
    let btn = document.querySelector('.button button');

    // Function to round a number to two decimal places
    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    // Event listener for Celsius input
    celsiusInput.addEventListener('input', function() {
        let cTemp = parseFloat(celsiusInput.value);
        let fTemp = (cTemp * (9 / 5)) + 32;

        fahrenheitInput.value = roundNumber(fTemp);
    });

    // Event listener for Fahrenheit input
    fahrenheitInput.addEventListener('input', function() {
        let fTemp = parseFloat(fahrenheitInput.value);
        let cTemp = (fTemp - 32) * (5 / 9);

        celsiusInput.value = roundNumber(cTemp);
    });

    // Event listener for button click to clear inputs
    btn.addEventListener('click', function() {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    });
});
