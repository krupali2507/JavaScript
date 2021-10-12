let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function stopSignal() {
    stopButton.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";
    readyButton.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";


}

function readySignal() {
    stopButton.style.backgroundColor = "#4b5069";
    stopLight.style.backgroundColor = "#4b5069";
    readyButton.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";
    goButton.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
}

function goSignal() {
    stopButton.style.backgroundColor = "#4b5069";
    stopLight.style.backgroundColor = "#4b5069";
    readyButton.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";
}