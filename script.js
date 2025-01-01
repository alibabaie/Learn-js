// "use strict"


// const Car = function () {

//     this.drive = function () {console.log(this);}
    
// }

//const Pride = new Car ();
//const Peykan = new Car ();

// Method Call....................

//Pride.drive();
//Peykan.drive();

// Function Call...................

//const drive = Pride.drive;
//drive();


// New Syntax......................

class Car {
    drive () {console.log(this);
    }
}

const Pride = new Car ();
Pride.drive();

const driveFunction = Pride.drive;
driveFunction();