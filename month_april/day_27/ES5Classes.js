// EXAMPLE OF CAR IN ES5 CLASSES

function Car(color, seatcount, acStatus){  //here color and seatCount is the parameter of the car class
    // console.log("car class has been initilised");
    // console.log("properties of the car is", color, seatcount);

    this.color = color;
    this.seatcount = seatcount;
    this.maxSpeed = 120; // in kms // here its is default and cannot be changed
    //console.log("lexical this" , this); // this means current thing
    //var defaultAcStatus = false;
    //this.defaultAcStatus= false;
    // (HERE ALL THIS ARE CALLED LEXICAL THIS)

    if(acStatus == true){
        this.acStatus = "ON";
    }else {
        this.acStatus = "OFF";
    }
  //  console.log("this is the constructor")
}

// how to start car
// ALL THE METHODS HAVE TO GO IN HE PROTOTYPE
Car.prototype.start = function(){   
    //console.log("am i invoked")                              // prototype is a property which has default type object and inside which u can add functions which will be bound to the car class
   // console.log("start the car");
    console.log("color:", this.color);
    console.log("seatCount:", this.seatcount);
    console.log("maxSpeed:", this.maxSpeed);
    console.log("ac status:", this.acStatus);

    console.log("\n"); // breaking lines or new lines

    console.log("car is starting");
}

Car.prototype.toggleAc = function(){
    if(this.acStatus == "OFF"){
        this.acStatus = "ON";
    }else {
        this.acStatus = "OFF";
    }
    console.log("ac stastus now:", this.acStatus);
    return this.acStatus;
    
}
var myCar = new Car("red", 4, false)        // new is a reserved keyword in js which creates an instance of funtion(it creates object)
myCar.start(); // to call the start method


//console.log("my car color:", myCar.color); // can also access like this way also
//console.log(myCar);

//console.log("Instance of Car class", myCar);
// var blueSUVcar = new Car("black", 6, false)
// blueSUVcar.start();
myCar.toggleAc();
