const container = document.querySelector("#container");

for (let i = 0; i<256; i++){
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = `calc(100%/16)`;
    grid.style.height = `calc(100%/16)`;
    grid.style.margin = "0px";
    grid.style.padding = "0px";
    grid.style.backgroundColor = "grey";
    grid.style.border = "1px solid black";
    grid.style.boxSizing = "border-box";
    grid.style.flex = "1 0 auto";
    container.appendChild(grid);

}