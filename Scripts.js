const myBtn = document.getElementById("myBtn");

const txtDiv = document.getElementById("text");

function loadText(){

var xhr = new XMLHttpRequest();

//console.log(xhr);

xhr.open("GET","test.txt",true);

xhr.onload=function(){

    if(xhr.status==200){
        txtDiv.innerHTML=this.response;
    }
}

xhr.send();
}

myBtn.addEventListener('click',loadText);