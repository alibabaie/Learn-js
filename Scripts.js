const myBtn = document.getElementById("myBtn");

const txtDiv = document.getElementById("text");

function loadText(){

var xhr = new XMLHttpRequest();

//console.log(xhr);

xhr.open("GET","test.txt",true);

console.log("READYSTATE",xhr.readyState);

xhr.onprogress=function(){

    console.log("READYSTATE",xhr.readyState);
    
}


// xhr.onload=function(){

//     if(xhr.status==200){
//         txtDiv.innerHTML=this.response;
//         console.log("READYSTATE",xhr.readyState);
//     }
// }

xhr.onreadystatechange= function () {
    
    //console.log("READYSTATE",xhr.readyState);

    if(this.readyState==4 & this.status==200){
        txtDiv.innerHTML=this.responseText;
    }
    
}

xhr.send("READYSTATE",xhr.readyState);
}

myBtn.addEventListener('click',loadText);