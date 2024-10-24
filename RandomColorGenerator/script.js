let container = document.querySelector(".container")


// for creating the divs and appended it to html document
for (let i = 1; i <= 30; i++) {
    let div = document.createElement("div");
    div.classList.add("color-conatiner")
    container.appendChild(div)
}

// for creating the colors and appending it to our divs
let colorContainerDiv = document.querySelectorAll(".color-conatiner");
console.log(colorContainerDiv);

generateColor();

// for generating colors boxes
function generateColor() {
    colorContainerDiv.forEach((element) => {
        let newColor = randomColor();
        element.style.background = "#" + newColor;
        element.style.height = "150px";
        element.style.width = "250px";
        element.style.display = "inline-block";
        element.style.textAlign = "center"
        element.style.borderRadius = "5px"
        element.style.fontSize = "16px"
        element.style.paddingTop   = "10px";
        element.innerText = "#" + newColor;
    });
}

// random colors are generated here
function randomColor(){
    let letters = '0123456789abcdf';
    let colorCodeLength = 6;
    let colorCode = "";
    for(let i=0;i<colorCodeLength;i++){
        let randomNumber = Math.floor(Math.random()*letters.length);
        colorCode += letters.substring(randomNumber, randomNumber+1);
    }
    return colorCode;
}


