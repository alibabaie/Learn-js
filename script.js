// const circle = {

//     radius : 1,
//     location : {
//         x:1,
//         y:1
//     },
//     draw : function () {

//         console.log("draw");
        
//     }

// }

// circle.draw();

//Object Factory..............................


 function createCircle(radius){

    return {
         radius:radius,
         draw:function(){
             console.log('draw');
        }
     }

 }


 const circle=createCircle(1);

 const circle2=createCircle(2);

 circle.draw();
 circle2.draw();



