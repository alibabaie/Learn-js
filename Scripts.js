const Cars=["Benz","BMW","Peykan","Pride","MVM"];

const car={name:"BMW X6" , productyear:2022 , color:"white" , isABS:true};

 for (key in car){

     console.log("For in : "+key);
     //console.log(car[key]);
    
 }

// for (key in Cars){

//     console.log(key);
    
// }

for (value of Cars){

    console.log("For of : "+value);
    
}