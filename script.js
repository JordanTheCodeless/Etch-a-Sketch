let etchContainer = document.querySelector("#container");
let reset = document.querySelector("#resetBtn");
let enter = document.querySelector("#enterBtn");
let gridAmount = document.getElementById("gridSizeInput");
let rows = 16;
let columns = 16;
let gridSize = 700;
let tempDiv;

etchContainer.style.width = `${gridSize}px`;
etchContainer.style.height = `${gridSize}px`;
function createDivs(columns,rows){

etchContainer.innerHTML ="";

for(let i = 0; i < (rows*columns); i++){
    tempDiv = document.createElement("div");
    tempDiv.style.width = `${(gridSize/columns)-2}px`;
    tempDiv.style.height = `${(gridSize/rows)-2}px`;
    tempDiv.style.backgroundColor ="white";
    tempDiv.classList.add("grid");
    etchContainer.appendChild(tempDiv)

}
mouseOverDivs()

}
createDivs(columns,rows);
// need to create a function instead of just event listener due to newly created tempDivs disregarding event listener.
function mouseOverDivs(){
    tempDivs = document.querySelectorAll(".grid");
    tempDivs.forEach((thisDiv) => {
    thisDiv.addEventListener("mouseover",() =>{
        thisDiv.style.backgroundColor = "black";
    })
});
}


reset.addEventListener("click", () =>{
    tempDivs.forEach((thisDiv) => {
        thisDiv.style.backgroundColor = "white";
    })
});

// event listener for the number input field;
gridAmount.addEventListener('input', () => {
    size = parseInt(gridAmount.value);
    columns = size;
    rows = size;
    createDivs(columns,rows);
})
