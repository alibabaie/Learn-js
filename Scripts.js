
// try{
//     console.log("Start of Try");

//     uniercycle();

//     console.log("End Of My Try --- Never Run");
    
    
// }catch(error){
//     console.log("Error is: "+error);
    
// }finally{
//     console.log("Finally Always Run");
// }


let json='{"age":30}';

try{
    let user=JSON.parse(json);

    //console.log(user);

    if(!user.name)
    {
        throw "The json data is incomplete";
        //throw new Error("The json data is incomplete");
        //throw new SyntaxError("The json data is incomplete");
    }
    
}catch(e){
    console.log("Json Error  : "+e);
    //console.log(e);
    
    
}
