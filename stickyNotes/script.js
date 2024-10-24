let btn = document.querySelectorAll("button");
let textArea = document.getElementById("text_area");
let color = document.getElementById("color");
color.value = "#00ffa1";
let massage = document.getElementById("massage");

function addNotes() {
    if (textArea.value === "") {
        alert("Please Enter Some Text");
        return;
    } else {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let cross_btn = document.createElement("button");

        div.appendChild(p);
        div.appendChild(cross_btn);

        massage.style.display = "none"
        
        cross_btn.innerText = 'X';
        p.innerText = textArea.value;

        
        div.style.backgroundColor = color.value;
        note_container.appendChild(div);
    
        textArea.value = "";
        console.log(div);

        cross_btn.addEventListener("click", function(){
            div.style.display = "none";
        })

        cross_btn.style.position = "absolute"
        cross_btn.style.top = "0px"
        cross_btn.style.right = "0px"
        cross_btn.style.margin = "20px"
        cross_btn.style.fontSize = "16px"
        cross_btn.style.color = "black"
        cross_btn.style.backgroundColor = "transparent"
        cross_btn.style.border = "none"
    }
}

btn[1].addEventListener('click', () => {
    note_container.innerHTML = "";
}) 

btn[0].addEventListener('click', addNotes)

