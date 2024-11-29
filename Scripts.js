//Named Functions....

function findBiggestFraction(a,b)
{

var result;
a>b ? result=["firstFraction",a] : result=["secondFraction",b];
return result;

}

//var newResult = findBiggestFraction(7/16,13/25);

//console.log(findBiggestFraction(7/16,13/25));

var fractionResult = findBiggestFraction(7/16,13/25);

//console.log("Fraction "+fractionResult[0]+" with a value "+fractionResult[1]+" is the Biggest");



//Anonymous Functions....

var theBiggest= function (a,b){
    var result;
    a>b ? result=["a",a] : result=["b",b];
    return result;
}
//console.log(theBiggest(7/9,13/24));
//console.log(theBiggest);
//console.log(theBiggest());



//Immediately Invoked Functions....

var theBiggest= (function (a,b){

    var result;
    a>b ? result=["a",a] : result=["b",b];
    return result;

})(7/9,13/24);

console.log(theBiggest);


