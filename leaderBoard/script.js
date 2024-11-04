let data = [];

//fetched all the values 
let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let pcountry = document.querySelector(".country");
let pscore = document.querySelector(".number");
let button = document.querySelector("button");
let section2 = document.querySelector(".section2");

function activateButtons(){
    document.querySelectorAll(".button_group").forEach((item, index)=>{
        console.log(item);
        
        item.addEventListener('click', (e)=>{
            // console.log(e);
            if(e.target.classList.contains("but1")){
                console.log(item.score);
                
                let score = parseInt(data[index].score);
                score+=5;
                data[index].score = score;
                updateDataOnUI();
            }

            if(e.target.classList.contains("but2")){
                let score = parseInt(data[index].score);
                score-=5;
                data[index].score = score;
                updateDataOnUI();
            }

            if(e.target.classList.contains("del")){
               data.splice(index, 1);
                updateDataOnUI();
            
            }
            
        })
    })
}


function updateDataOnUI(){
    data.sort((p1,p2)=>{
        return p2.score - p1.score;
    })
    console.log(data);

    let showData= "";
    data.forEach((player)=> {
        showData += `
            <div class="button_group">
                <div class="name">
                    <span>${player.fname}</span>
                    <span>${player.lname}</span>
                </div>
                <span>${player.country}</span>
                <span>${player.score}</span>
                <div class="allBtn">
                    <button class="del">X</button>
                    <button class="but1">+5</button>
                    <button class="but2">-5</button>
                </div>
            </div>
        `;

        section2.innerHTML = showData;
        activateButtons()
        
    })
    
}

button.addEventListener("click", function(e){
    e.preventDefault();
    if(fname.value === "" || lname.value ==="" || pcountry.value==="" || pscore.value===""){
        alert("Please fill all the fields");
        return;
    }else{

        let plaerObj = {
            fname: fname.value,
            lname: lname.value,
            country: pcountry.value,
            score: pscore.value
        };

        data.push(plaerObj);

        updateDataOnUI();

        fname.value="";
        lname.value="";
        pcountry.value="";
        pscore.value="";
    }
})