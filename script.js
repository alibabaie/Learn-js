
function Car (speed) {
    this.speed = speed;
    this.move = function () {
    console.log("Moving");
    
    };
}

const car = new Car (120);

car.move();

const Car1 = new Function ('speed',`
        this.speed = speed;
    this.move = function () {
    console.log("Moving");
    
    };`);

    const carObject = new Car1 (80);

    carObject.move();

