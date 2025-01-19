document.addEventListener("DOMContentLoaded", function() {
    // Color Change Button
    var btn = document.getElementById("colorBtn");
    btn.addEventListener("click", function() {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        btn.style.backgroundColor = randomColor;
    });

    // Greeting Alert
    let currentHour = new Date().getHours();
    let greeting;
    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    alert(greeting);

    // Basic Calculator
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let calculateBtn = document.getElementById("calculateBtn");
    let resultDisplay = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        let number1 = parseFloat(num1.value);
        let number2 = parseFloat(num2.value);

        if (!isNaN(number1) && !isNaN(number2)) {
            let result = number1 + number2;
            resultDisplay.textContent = "Result: " + result;
        } else {
            resultDisplay.textContent = "Please enter valid numbers";
        }
    });
});
