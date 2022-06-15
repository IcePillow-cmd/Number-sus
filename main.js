const startInput = document.querySelector("#start-input");
const divInput = document.querySelector("#div-input");

function addRange(start, range=10) {
    return start + range;
}

function printSus() {
    let startNum = parseInt(startInput.value);
    let divNum = parseInt(divInput.value);
    
    for (let i = startNum, div = divNum, range = addRange(startNum); 
    i < range; i++) {
        if (i % div === 0) {
            console.error(i);
        } else {
            console.log(i);
        }
    }
}