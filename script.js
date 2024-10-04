const container = document.querySelector("#container");

for (let i = 0; i<16; i++){
    for (let j=0; j <16; j++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        container.appendChild(gridDiv);
    }
}

const gridDivs = document.querySelectorAll('.gridDiv');

gridDivs.forEach((gridDiv) => {

    let currentOpacity = 0.1;
    let hoverCount = 0;
   const initialGrid = gridDiv.addEventListener("mouseover", () =>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridDiv.style.backgroundColor = "#" + randomColor;
        hoverCount++;
      if (hoverCount <= 10) {
        currentOpacity += 0.1;
        gridDiv.style.opacity = currentOpacity;
      }
    
    });

    
});


const userInputButton = document.querySelector(".userInput");

userInputButton.addEventListener("click", () => {
    const userInput = prompt("Specify the number of squares you want: ");

    if (userInput >= 100 || userInput < 0){
        return prompt("Enter a number less than 100: ");
    }else {
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
        
        const divSize = Math.floor(256 /userInput);
        for (let i = 0; i<userInput; i++){
            for (let j=0; j<userInput; j++){
                const gridDiv = document.createElement("div");
                gridDiv.classList.add("gridDiv");
                gridDiv.style.width = `${100/userInput}%`;
                gridDiv.style.height = `${100/userInput}%`;
                gridDiv.style.margin = "0px";
                gridDiv.style.padding = "0px";
                gridDiv.style.backgroundColor= "grey";
                gridDiv.style.border = "1px solid black";
                gridDiv.style.boxSizing = "border-box";
                gridDiv.style.flex = "1 0 auto";

                container.appendChild(gridDiv);

                const gridDivs = document.querySelectorAll('.gridDiv');

                gridDivs.forEach((gridDiv) => {
                    let currentOpacity = 0.1;
                    let hoverCount = 0;
                    gridDiv.addEventListener("mouseover", () =>{
                        const randomColor = Math.floor(Math.random()*16777215).toString(16);
                        gridDiv.style.backgroundColor = "#" + randomColor;
                        hoverCount++;
                        if (hoverCount <= 10) {
                          currentOpacity += 0.1;
                          gridDiv.style.opacity = currentOpacity;
                        }
    
                    });
                
                });
            }

        
           
         
        }
    }
});

// function promptUser(){
   
// }

// function createGrids (userInput){
    
    

// }