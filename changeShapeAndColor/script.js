let roundContainer = document.querySelector(".round_container");
let btn = document.querySelectorAll("button");
let square = document.querySelector(".square")


// for color change
function genarateColor(){
    let letters = '1234567890abcdf';
    let colorcodeLength = 6;
    let colorCode= "";
    for (let i = 0; i < colorcodeLength; i++) {
        let randomNumber = Math.floor(Math.random() * letters.length);
        colorCode += letters.substring(randomNumber, randomNumber + 1);
    }
    return colorCode;
}

function changeColor(){
    let newColor = genarateColor();
    roundContainer.style.backgroundColor = '#' + newColor;
}

btn[0].addEventListener("click", changeColor);


// for shape change
let arr = ["square", "circle", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

let index = 0;
btn[1].addEventListener("click", () => {
    square.classList.remove(arr[index]);
    index++;

    if (index >= arr.length) index = 0;

    square.classList.add(arr[index]);
}); 