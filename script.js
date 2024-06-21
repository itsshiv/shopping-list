var button = document.getElementById("enter");
var input =document.getElementById("userinput");
var ul=document.querySelector("ul");

function createlistElement(){
    var li=document.createElement("li");
        li.appendChild(document.createTextNode(
            input.value));
        ul.appendChild(li);
        input.value="";
}

function inputLength(){
    return input.value.length;
}

button.addEventListener("click" , function(){
    if(input.value.length>0){
        createlistElement();
    }
    })

input.addEventListener("keypress" , function(){
    if(input.value.length>0 && event.keyCode===13){
        createlistElement();
        }
        })    