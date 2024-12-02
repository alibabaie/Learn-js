
const Names=["Ali","FatemehZahra","Zeynab","AmirHossain"];

function createLiElement(){

    for (const item of Names) {
        
        var node=document.createElement("li");

        var textnode=document.createTextNode(item);
    
        node.appendChild(textnode);
    
        document.getElementById("myList").appendChild(node);

    }
 
}

createLiElement();