
// function Circle(radius) {

//   this.radius = radius;
  
//   this.draw = function () {
//   console.log('draw');
  
//   };
  
// }


// Class in ES6 .................................

class Circle {

  constructor (radius) {

    this.radius = radius;
  }

  draw () {
    console.log("draw");
    
  }
}

const c = new Circle (2);

c.draw();