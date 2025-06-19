let btn=document.getElementById("btn1");
let input = document.getElementById("input");
let listContainer = document.getElementById("lists");

btn.addEventListener("click",addTask)
function addTask(){
    if(input.value === ''){
        alert("Add a Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7"
        li.appendChild(cross);
    }
    input.value="";
    savedata();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
          e.target.classList.toggle("tasks");
          
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    savedata();
    
});
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showdata(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showdata();

