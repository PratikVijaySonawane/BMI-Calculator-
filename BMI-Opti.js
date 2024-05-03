function validateInput(inputId, spanId, errorMsg, regex) 
{
    const inputElement = document.getElementById(inputId);
    const spanElement = document.getElementById(spanId);
    const value = inputElement.value;
    const isValid = value.match(regex);

    spanElement.innerHTML = isValid ? "ok" : errorMsg;
    spanElement.style.color = isValid ? "green" : "red";
    spanElement.style.fontSize = "30px";
    inputElement.style.border = isValid ? "5px solid green" : "5px solid red";
}

function valMass() {
    validateInput("root", "s", "Weight should contain only digits", /[0-9]+$/);
}

function valHeight() {
    validateInput("root1", "s1", "Height should contain only digits", /[0-9 .]+$/);
}

function calBMI() {
    const mass = parseFloat(document.getElementById("root").value);
    const height = parseFloat(document.getElementById("root1").value);

    if (isNaN(mass) || isNaN(height) || height === 0) {
        document.getElementById("s2").innerHTML = "Invalid input";
        document.getElementById("s2").style.color = "red";
        document.getElementById("s2").style.fontSize = "30px";
    } else {
        const bmi = mass / (height * height);
        document.getElementById("s2").innerHTML = `Your BMI is --> ${bmi.toFixed(2)}`;
        document.getElementById("s2").style.color = "darkblue";
        document.getElementById("s2").style.fontSize = "40px";
    }
}
