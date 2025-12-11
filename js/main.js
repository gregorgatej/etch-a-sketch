for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    const containerDiv = document.querySelector(".container");
    containerDiv.appendChild(rowDiv);

        for (let j = 0; j < 16; j++) {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("column")
            columnDiv.innerText = "Column Div";
            rowDiv.appendChild(columnDiv);
        }
}
