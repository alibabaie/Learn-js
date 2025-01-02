
class Shape {

  move(){
    console.log('move');
    
  }
}

class Circle extends Shape{

  // move(){
  //   console.log('move');
    
  // }

  draw (){
    console.log('draw');
    
  }
}

class Square extends Shape{

  // move(){
  //   console.log('move');
    
  // }

  draw (){
    console.log('draw');
    
  }
}

class Triangle extends Shape{

  // move(){
  //   console.log('move');
    
  // }

  draw (){
    console.log('draw');
    
  }
}

const circle = new Circle();
const square = new Square();
const triangle = new Triangle();

circle.move();
circle.draw();
square.move();
square.draw();
triangle.move();
triangle.draw();