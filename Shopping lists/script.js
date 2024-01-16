var button = document.getElementById("button");
var input = document.getElementById("input");
var ul = document.getElementById("ul");

function createliElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addLiElementBtn(){
    if( input.value.length >0 ){
        createliElement();
    }
};
function addLiElementInput(event){
    if( input.value.length > 0 && event.key === "Enter"){
        createliElement();
        }
};
button.addEventListener("click", addLiElementBtn);

input.addEventListener("keypress",addLiElementInput);