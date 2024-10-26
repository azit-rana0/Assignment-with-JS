let btn = document.querySelectorAll("button");
let textArea = document.getElementById("text_area");
let color = document.getElementById("color");
color.value = "#00ffa1";
let massage = document.getElementById("massage");
let noteContainer = document.getElementById("note_container");

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
        noteContainer.appendChild(div);
        isNotesPresent()
    
        textArea.value = "";
        console.log(div);

        cross_btn.addEventListener("click", function(){
            div.remove();
            isNotesPresent()
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
    noteContainer.innerHTML = "";
    isNotesPresent()
}) 

btn[0].addEventListener('click', addNotes)

// for notes is empty/present the show the massage
function isNotesPresent() {
    let notes = noteContainer.childNodes
    if (notes.length > 0) {
        massage.style.display = "none";
    } else {
        massage.style.display = "block";
    }
}

