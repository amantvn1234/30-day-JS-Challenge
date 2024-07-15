const notescontainer=document.querySelector(".notes-container")
const crateBtn=document.querySelector(".btn")
let notes=document.querySelectorAll(".input-box")

function shownotes(){
    notescontainer.innerHTML=localStorage.getItem("Notes")
}

shownotes();

function updateStorage(){
    localStorage.setItem("Notes",notescontainer.innerHTML)
}

crateBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})


notescontainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})


document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

