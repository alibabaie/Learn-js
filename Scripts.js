
const ELEMENT=document.getElementById("myBtn");

//  test by anonymous function
// ELEMENT=addEventListener('click',function(){

//     document.getElementById("test").innerHTML=Date();

// });

//  test by name function
// function displayDate(){

// document.getElementById("test").innerHTML=Date();

// }

// ELEMENT.addEventListener('click',myFunction);

// // ELEMENT.addEventListener('click',otherFunction);

// function myFunction(){

// alert("First Function Happend");

// }

// function otherFunction(){

//     alert("Other Function Happend");
    
//     }

let p1=7;
let p2=4;

ELEMENT.addEventListener('click',function(){

myFunction(p1,p2);

});

function myFunction(a,b){

document.getElementById("test").innerHTML=a*b;

}