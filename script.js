const btn=document.getElementById("btnSave");


btn.addEventListener('click',()=>{

    const myObject={firstName:"Ali",lastName:"Babaie",isMale:true};

    var myArray=[
    {firstName:"Ali",lastName:"Babaie",isMale:true},
    {firstName:"Amir Hossain",lastName:"Babaie",isMale:true},
    {firstName:"Zeynab",lastName:"Babaie",isMale:false},
    {firstName:"Fatemeh",lastName:"Farajpoor",isMale:false},
];


    localStorage.setItem('PersonInfo',JSON.stringify(myArray));


})