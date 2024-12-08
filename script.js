//forEach تابع.....................


//  const numbers = [65,44,32,4];

//  numbers.forEach(function(item,index,arr){

//    console.log("item value is = "+item);

//    console.log(`item = ${item} index = ${index}`);
//    console.log(arr);
  
//  }

//  );

//Fetch Api......................................

function getUsers(){

fetch("users.json")
// .then((res) => console.log(res));
.then((res) => res.json())
//.then((json) => console.log(json));
.then((json) => {

let output = "";

json.forEach(function(user){

output +=`<ul>

<li>${user.id}</li>
<li>${user.name}</li>
<li>${user.email}</li>

</ul>`;

  });

document.getElementById("output").innerHTML=output;

});

}

getUsers();
