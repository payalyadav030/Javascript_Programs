// EXAMPLE OF USER IN ES5 CLASSES

function User(firstname, lastname, age, email, phoneNumber){

    // validation or check
    if(!firstname){
        throw new Error("first name is required");
    }
    if(!lastname){
        throw new Error("last name is required");
    }
    if(!age){
        throw new Error("age  is required");
    }
    if(!email){
        throw new Error("email  is required");
    }
   // this.validateAge();  // this is wrong because here it will not check age<18 and will show whatever the value user has entered

    // assigning the base properties(lexial this)
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email; 
    //this.validateAge(); 

    // the default value of the phone number
    this.phone = false;
    if(phoneNumber){
        this.phone = phoneNumber;
    }

}
User.prototype.validateAge = function(){
    if(this.age < 18){
        throw new Error("age should be 18 above to register")
    }
}
User.prototype.register = function(){
    this.validateAge();
    var username = this.generateUsername();
    var password = this.generatePassword();
    console.log("saving info in database:", this.firstname);
    console.log("first name:", this.firstname);
    console.log("last name:", this.lastname);
    console.log("age:", this.age);
    console.log("email:", this.email);
    console.log("phone:", this.phone);
    console.log("username:" ,username);
    console.log("password:", password);
    console.log("\n\n");

    // send notificaton to the user
    this.sendNotif();

}
User.prototype.generateUsername = function(){
    return "payal yadav";
}
User.prototype.generatePassword = function(){
    return "1123456";
}
User.prototype.sendNotif = function(){
    this.sendSms();
    this.sendEmail();
}
User.prototype.sendSms = function(){
    if(!this.phone){
        console.log("cnt send sms as phone number is not present")
    }else {
        console.log("sending sms to user at phone:", this.phone)
 
    }
}
User.prototype.sendEmail = function(){
    console.log("sending email to the user at address:", this.email)
}

var myUser = new User( "payal","yadav",21, "payalyafav@gmail.com",234567);
console.log(myUser);
myUser.register();

// PROTOTYPE IS USED TO DEFINE A FUNCTION USING METHOD AND WE CAN INVOKE THE FUCTION USING THIS