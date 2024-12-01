//const element= document.querySelector("#showcase").hasAttribute("href");

//const element= document.querySelector("#showcase").setAttribute("class","test");

//const element= document.querySelector("#showcase").removeAttribute("class");

const ctaElement= document.querySelector(".cta a");

if(ctaElement.hasAttribute("target"))
{
    console.log(ctaElement.getAttribute("target"));
    
}else{

    ctaElement.setAttribute("target","blank");

}

console.log(ctaElement.attributes);