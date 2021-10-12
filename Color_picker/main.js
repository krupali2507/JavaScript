let colorPickerContainer = document.getElementById("colorPickerContainer");
let hexCode = document.getElementById("selectedColorHexCode");

function changeGrey() {
    let currentHexCode = document.getElementById("button1").textContent;
    hexCode.textContent = currentHexCode;
    hexCode.style.color = "#49a6e9";
    colorPickerContainer.style.backgroundColor = "#e0e0e0";


}

function changeGreen() {
    let currentHexCode = document.getElementById("button2").textContent;
    hexCode.textContent = currentHexCode;
    hexCode.style.color = "#49a6e9";
    colorPickerContainer.style.backgroundColor = "#6fcf97";
}

function changeBlue() {
    let currentHexCode = document.getElementById("button3").textContent;
    hexCode.textContent = currentHexCode;
    hexCode.style.color = "#49a6e9";
    colorPickerContainer.style.backgroundColor = "#56ccf2";

}

function changePurple() {
    let currentHexCode = document.getElementById("button4").textContent;
    hexCode.textContent = currentHexCode;
    hexCode.style.color = "#49a6e9";
    colorPickerContainer.style.backgroundColor = "#bb6bd9";
}