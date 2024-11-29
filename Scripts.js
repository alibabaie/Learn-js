var variable1="variable1";   //Globally Variable

function myfunction() {

    var variable2="variable2";   //Locally Variable
    console.log(variable2);
    
}
//console.log(variable1);
myfunction();

//---------------------------------------

var Result="Ali";

Result="AmirHossain"

const Result2="Ali";

//Result2="AmirHossain";

//console.log(Result2);

// function logScope(){
//     var localVar=2;
    

//     if(localVar=2)
//     {
//         var localVar="different Variable ";
//         console.log("nested localVar "+localVar);
        
//     }
//     console.log("LogScope localVar  :"+localVar);
// }
// logScope();


function logScope(){
    let localVar=2;
    

    if(localVar=2)
    {
        let localVar="different Variable ";
        console.log("nested localVar "+localVar);
        
    }
    console.log("LogScope localVar  :"+localVar);
}
logScope();

