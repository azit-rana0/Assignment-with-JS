let circle = document.querySelector(".circle");
let btn = document.querySelectorAll("button");
let square = document.querySelector(".square")




// genarateColor();
// to generate the color
function genarateColor(){
    // let color = Math.floor(Math.random() * 255);
    // return color;
    let letters = '1234567890abcdf';
    let colorcodeLength = 6;
    let colorCode= "";
    for (let i = 0; i < colorcodeLength; i++) {
        let randomNumber = Math.floor(Math.random() * letters.length);
        colorCode += letters.substring(randomNumber, randomNumber + 1);
    }
    return changeColor;
}

function changeColor(){
    let newColor = genarateColor();
    circle.style.backgroundColor = '#' + newColor;
}

btn[0].addEventListener("click", changeColor);

//to change the Shape

let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape(){
    let idname = randomShape();
    shape.id = idname;
}
btn[1].addEventListener("click", changeShape);