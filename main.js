const form = document.querySelector("#form");
const startInput = document.querySelector("#start-input");
const divInput = document.querySelector("#div-input");

function addRange(start, range=10) {
    return start + range;
}

function showWarning(field) {
    console.clear();
    console.log(`Please put a number to your ${field}`)
}

function printSus() {
    let startNum = parseInt(startInput.value);
    let divNum = parseInt(divInput.value);
    let rangeNum = addRange(startNum);

    if (typeof startNum !== "number") {
        showWarning("starting number");
    } else if (typeof divNum !== "number") {
        showWarning("divisior number");
    } else {
        for (let i = startNum, div = divNum, range = rangeNum; 
        i <= range; i++) {
            if (i % div === 0) {
                console.warn(i);
            } else {
                console.log(i);
            }
        }
        console.log(`Test ${startNum}-${rangeNum} Done!\n\n\nTest Start...`);
    }
}

form.addEventListener("submit", (e) => {
    printSus();
    e.preventDefault(); // to prevent submit event's page refresh
});