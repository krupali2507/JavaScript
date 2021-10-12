let CounterElement = document.getElementById("CounterValue")


function onDecrement() {
    let currentCounterValue = CounterElement.textContent;
    let updatedValue = parseInt(currentCounterValue) - 1
    CounterElement.textContent = updatedValue
    if (updatedValue < 0) {
        CounterElement.style.color = 'red'
    } else if (updatedValue > 0) {
        CounterElement.style.color = 'green'
    } else {
        CounterElement.style.color = 'black'
    }

}

function onReset() {
    let updatedValue = 0
    CounterElement.textContent = updatedValue
    CounterElement.style.color = 'black'


}

function onIncrement() {
    let currentCounterValue = CounterElement.textContent;
    let updatedValue = parseInt(currentCounterValue) + 1
    CounterElement.textContent = updatedValue
    if (updatedValue < 0) {
        CounterElement.style.color = 'red'
    } else if (updatedValue > 0) {
        CounterElement.style.color = 'green'
    } else {
        CounterElement.style.color = 'black'
    }


}