const container = document.querySelector("#container");
const resetBtn = document.getElementById("resetBtn");
const gridBtn = document.getElementById("gridBtn");


function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    return bgColor;
}
function createGrid(size){
    container.innerHTML = '';

    container.style.setProperty('--grid-size', size);

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        
        div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = randomColor();
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

gridBtn.addEventListener("click", () => {
    let newGrid = prompt('How many squares would you like (max = 100)? ')
    const size = parseInt(newGrid);
    if (newGrid < 1 ||newGrid > 100 || isNaN(size)){
        alert("Please enter a valid number.");
        return;
    }
    createGrid(size)
});