let warningMessage = document.getElementById("warningMessage");
let imageElement = document.getElementById("image");
let imageWidth = document.getElementById("imageWidth");

let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;
currentWidth = imageElement.style.width;

function decrementSize() {
    currentWidth = parseInt(currentWidth)
    if (currentWidth < 105) {
        warningMessage.textContent = "Can't Visible. Increse the size of the image."
    } else {
        warningMessage.textContent = "";
        currentWidth = currentWidth - 5;
        imageElement.style.width = currentWidth + "px";
        imageWidth.textContent = imageElement.style.width;
        currentWidth = imageElement.style.width;

    }


}

function incrementSize() {
    currentWidth = parseInt(currentWidth);
    if (currentWidth > 295) {
        warningMessage.textContent = "Can't Visible. Decrese the size of the image."
    } else {
        warningMessage.textContent = "";
        currentWidth = currentWidth + 5;
        imageElement.style.width = currentWidth + "px";
        imageWidth.textContent = imageElement.style.width;
        currentWidth = imageElement.style.width;

    }

}