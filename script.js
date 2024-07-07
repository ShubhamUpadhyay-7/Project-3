document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button");
    const delButton = document.querySelector(".del");
    const resetButton = document.querySelector(".btn1");
    const equalButton = document.querySelector(".btn2");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (display.innerText === "0") {
                display.innerText = "";
            }
            display.innerText += button.innerText;
        });
    });

    delButton.addEventListener("click", () => {
        display.innerText = display.innerText.slice(0, -1);
        if (display.innerText === "") {
            display.innerText = "0";
        }
    });

    resetButton.addEventListener("click", () => {
        display.innerText = "0";
    });

    equalButton.addEventListener("click", () => {
        try {
            // Only evaluate if the expression is valid
            if (isValidExpression(display.innerText)) {
                display.innerText = eval(display.innerText.replace(/x/g, '*').replace(/÷/g, '/'));
            } else {
                display.innerText = "Error";
            }
        } catch {
            display.innerText = "Error";
        }
    });

    function isValidExpression(expression) {
        // Regular expression to check for a valid arithmetic expression
        const validRegex = /^[0-9+\-*/.()]*$/;
        return validRegex.test(expression);
    }
});