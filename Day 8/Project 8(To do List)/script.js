const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addtask(){

    if(inputbox.value==''){
        alert("You must write something!")
    }
    else{
        let list1=document.createElement("li");
        list1.innerText=inputbox.value;
        listcontainer.appendChild(list1);
        inputbox.value='';

        let span=document.createElement("span");
        span.innerHTML="\u00d7"; // this code is used to add cross button in each task
        list1.appendChild(span);
    }
    savedata();
}


listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false);


function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showtasks(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showtasks();