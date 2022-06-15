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

    if (typeof startNum !== "number") {
        showWarning("starting number")
    } else if (typeof divNum !== "number") {
        showWarning("divisior number")
    } else {
        for (let i = startNum, div = divNum, range = addRange(startNum); 
        i < range; i++) {
            if (i % div === 0) {
                console.error(i);
            } else {
                console.log(i);
            }
        }
    }

}