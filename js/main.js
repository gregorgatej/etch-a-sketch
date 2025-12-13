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

innerContainerDiv.addEventListener("mouseover", e => {
    if (!e.target.classList.contains("column")) return;
    e.target.classList.add("pink");
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
});