const etchContainer = document.querySelector("#container");

let tempDiv
function createDivs(){
for(let i = 0; i < 256; i++){
    tempDiv = document.createElement("div");
    tempDiv.classList.add("grid");
    etchContainer.appendChild(tempDiv)

}}
createDivs();
const tempDivs = document.querySelectorAll(".grid");


tempDivs.forEach((thisDiv) => {
    thisDiv.addEventListener("mouseover",() =>{
        thisDiv.style.backgroundColor = "black";
    })
})

