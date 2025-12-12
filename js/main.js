const containerDiv = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    containerDiv.appendChild(rowDiv);
        for (let j = 0; j < 16; j++) {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("column")
            rowDiv.appendChild(columnDiv);
        }
}

containerDiv.addEventListener('mouseover', e => {
    hoveredOverDiv = e.target;
    hoveredOverDiv.classList.add("pink");
});