let btn = false;

let container = document.querySelector(".container");
let toggleBtn = document.querySelector(".circle");
let heading = document.querySelector("#heading");

toggleBtn.addEventListener(("click"), () => {

    if(!btn) {
        container.style.backgroundColor = "black";
        heading.style.color = "white";
        toggleBtn.style.transform = 'translateX(115%)';

        btn = true;
    } else {
        container.style.backgroundColor = "white";
        heading.style.color = "black";
        toggleBtn.style.transform = 'translateX(0%)';

        btn = false;
    }
    
});