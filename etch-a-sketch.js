const container = document.querySelector("#container");
const resetBtn = document.getElementById("resetBtn");
const gridBtn = document.getElementById("gridBtn");

function createGrid(size){
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        
        div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "purple";
        });
    }


    resetBtn.addEventListener("click", function (){
        const elements = document.querySelectorAll(' #container div');

        elements.forEach(div => {
            div.style.backgroundColor = "";
        });
    })
}
createGrid(16);