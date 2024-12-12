const h1 = document.getElementById("title");

//const firstName = "";

localStorage.setItem("firstName",'Ali');

localStorage.setItem("lastName",'Babaie');

localStorage.removeItem('lastName');

const firstName = localStorage.getItem('firstName');

firstName ? h1.innerText=`Welcome ${firstName}` : h1.innerText='Nobody To Welcome';




