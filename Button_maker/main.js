let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function applyStyles() {
    let bgColorValue = bgColorInput.value;
    console.log(bgColorValue);
    let fontColorValue = fontColorInput.value;
    console.log(fontColorValue);
    let fontSizeValue = fontSizeInput.value;
    console.log(fontSizeValue);
    let fontWeightValue = fontWeightInput.value;
    console.log(fontWeightValue);
    let paddingValue = paddingInput.value;
    console.log(paddingValue);
    let borderRadiusValue = borderRadiusInput.value;
    console.log(borderRadiusValue);
    customButton.style.backgroundColor = bgColorValue;
    customButton.style.color = fontColorValue;
    customButton.style.fontSize = fontSizeValue;
    customButton.style.fontWeight = fontWeightValue;
    customButton.style.padding = paddingValue;
    customButton.style.borderRadius = borderRadiusValue;

}