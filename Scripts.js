
const DIV1 = document.getElementById("myDiv");

const pElement = document.getElementById("myP1");

const ButtonElement = document.getElementById("myBtn");

// DIV1.addEventListener('click',function(){

//     alert("You Click on DIV")
// },true);

// pElement.addEventListener('click',function(){

//     alert("You Click on P")
// },true);

ButtonElement.addEventListener('click',RemoveEventFormDIV);

function RemoveEventFormDIV(){

    DIV1.removeEventListener('mousemove',RandomNumber);
}


DIV1.addEventListener('mousemove',RandomNumber);

function RandomNumber(){

    document.getElementById("test").innerHTML=Math.random();
}