const innerContainerDiv = document.querySelector(".inner-container");
for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    innerContainerDiv.appendChild(rowDiv);
        for (let j = 0; j < 16; j++) {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("column")
            rowDiv.appendChild(columnDiv);
        }
}

function randomColorWithOpacity(opacity) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

innerContainerDiv.addEventListener("mouseover", e => {
    if (!e.target.classList.contains("column")) return;
    if (e.target.dataset.opacity) {
        const newOpacity = parseFloat(e.target.dataset.opacity) + 0.1;
        e.target.dataset.opacity = Math.min(newOpacity, 1);
    } else {
        e.target.dataset.opacity = 0.1;
    }
    e.target.style.backgroundColor = randomColorWithOpacity(parseFloat(e.target.dataset.opacity));
});

const btn = document.querySelector("button");

btn.addEventListener("click", e => {
    nrOfSquares = Number(prompt("Enter nr. of squares per side:"));
    console.log(nrOfSquares);
    while (Number.isNaN(nrOfSquares)) {
        alert("Try again with inputting a number!");
        nrOfSquares = Number(prompt("Enter nr. of squares per side:"));
    }
    while (nrOfSquares > 100) {
        alert("Try again with inputting a smaller number!");
        nrOfSquares = Number(prompt("Enter nr. of squares per side:"));
    }
    if (nrOfSquares) {
        innerContainerDiv.innerHTML="";
        for (let i = 0; i < nrOfSquares; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        innerContainerDiv.appendChild(rowDiv);
            for (let j = 0; j < nrOfSquares; j++) {
                const columnDiv = document.createElement("div");
                columnDiv.classList.add("column");
                rowDiv.appendChild(columnDiv);
                if (nrOfSquares > 50) {
                columnDiv.setAttribute("style", "border: grey solid 1px");
                innerContainerDiv.setAttribute("style", "border: grey solid 1px");
                }
            }
        }
}
});