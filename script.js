
class Shape {
#color;

constructor (color){
  this.#color = color
}
 

move(){
    console.log(this.#color);
    
  }
}



class Square extends Shape{

  draw (){
    console.log('draw');
    
  }

  constructor (color){
    super(color)
  }
}




const square = new Square("green");



square.move();
square.draw();
