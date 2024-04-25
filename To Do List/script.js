const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container"); // Corrected selector

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!"); // Corrected alert message
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Corrected Unicode character
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){ // Corrected tag name
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
