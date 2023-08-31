document.getElementById("convert-btn").addEventListener("click", function() {
    const celsiusInput = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsiusInput)) {
        const fahrenheit = celsiusInput * 9 / 5 + 32;
        document.getElementById("result").textContent = `${celsiusInput}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid temperature.";
    }
});
