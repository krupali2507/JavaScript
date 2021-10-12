function calculate() {
    let billAmount = document.getElementById("billAmount").value;
    let tipPercent = document.getElementById("percentageTip").value;
    let errorMessage = document.getElementById("errorMessage");
    let calculateButton = document.getElementById("calculateButton");

    if (billAmount === "") {
        errorMessage.textContent = "Please Enter a Valid Input."
        calculateButton.style.backgroundColor = "green";
    } else if (tipPercent === "") {
        errorMessage.textContent = "Please Enter a Valid Input."
        calculateButton.style.backgroundColor = "green";
    } else {
        errorMessage.textContent = "";
        billAmount = parseFloat(billAmount);
        tipPercent = parseFloat(tipPercent);
        let calculatedTip = (tipPercent / 100) * billAmount;
        let tipAmount = document.getElementById("tipAmount");
        tipAmount.value = calculatedTip;
        let totalAmount = document.getElementById("totalAmount");
        totalAmount.value = billAmount + calculatedTip;
        calculateButton.style.backgroundColor = "green";
        
    }

}